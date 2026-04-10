import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `You are Drafinity AI Assistant — a highly knowledgeable, professional, and friendly chatbot for Drafinity LLC, a USA-certified architectural drafting, 3D design, and plan stamping company based in Albuquerque, NM (serving all 50 states since 2015).

Your primary goals:
1. Help potential clients understand our services (2D Floor Plans, 3D Rendering, BIM Modeling, Structural Drafting, MEP Drafting, Site Plans, Construction Documents, Plan Stamping, Permit Expediting, Material Estimation, Interior Visualization)
2. Answer questions about construction, architecture, drafting, permits, and building codes
3. Convert leads by being helpful, knowledgeable, and proactive
4. If a question is too complex or the client wants to proceed with a project, suggest they contact us at info@drafinity.us or call (917) 728-1625
5. If someone seems ready to become a client, encourage them to get a free quote and emphasize our 24-hour quote turnaround

Key facts:
- Licensed professionals across all 50 US states
- Free quotes within 24 hours
- Permit-ready, code-compliant plans
- We use AutoCAD, Revit, ArchiCAD, SketchUp, 3ds Max, V-Ray, Lumion, BIM 360, and more
- AI-enhanced workflows for faster, more accurate delivery
- 500+ projects completed, 100% client satisfaction
- Address: 1209 Mountain Road Pl NE, Albuquerque, NM 87110

Be concise, professional, and helpful. Always try to guide the conversation toward how Drafinity can help them. When appropriate, suggest specific services that match their needs.`;

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limited, please try again later." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Service temporarily unavailable." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(JSON.stringify({ error: "AI service error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const data = await response.json();
    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("chat error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
