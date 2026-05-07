import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User, Sparkles, Loader2 } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

type Message = { role: "user" | "assistant"; content: string };

const SYSTEM_PROMPT = `You are Drafinity AI Assistant — a highly knowledgeable, professional, and friendly chatbot for Drafinity LLC, a USA-certified architectural drafting, 3D design, and plan stamping company based in Albuquerque, NM (serving all 50 states since 2015).

Your primary goals:
1. Help potential clients understand our services (2D Floor Plans, 3D Rendering, BIM Modeling, Structural Drafting, MEP Drafting, Site Plans, Construction Documents, Plan Stamping, Permit Expediting, Material Estimation, Interior Visualization)
2. Answer questions about construction, architecture, drafting, permits, and building codes
3. Convert leads by being helpful, knowledgeable, and proactive
4. If a question is too complex or the client wants to proceed with a project, suggest they contact us at info@drafinity.us or call (917) 728-1625

Key facts:
- Licensed professionals across all 50 US states
- Free quotes within 24 hours
- Permit-ready, code-compliant plans
- We use AutoCAD, Revit, ArchiCAD, SketchUp, 3ds Max, V-Ray, Lumion, BIM 360, and more
- AI-enhanced workflows for faster delivery
- 500+ projects completed, 100% client satisfaction

Be concise, professional, and helpful. Use markdown formatting. Always try to guide the conversation toward how Drafinity can help them.`;

const AIChatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "👋 Hi! I'm Drafinity's AI Assistant. I can help you with questions about our drafting, design, and plan stamping services. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;
    const userMsg: Message = { role: "user", content: input.trim() };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke("chat", {
        body: { messages: newMessages.map(m => ({ role: m.role, content: m.content })) },
      });

      if (error) throw error;

      const text = data?.choices?.[0]?.message?.content || data?.content || "I apologize, I'm having trouble responding right now. Please contact us at info@drafinity.us or call (917) 728-1625.";
      setMessages(prev => [...prev, { role: "assistant", content: text }]);
    } catch {
      setMessages(prev => [...prev, { 
        role: "assistant", 
        content: "I'm sorry, I'm experiencing a temporary issue. Please try again or contact us directly at **info@drafinity.us** or call **(917) 728-1625**." 
      }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating button */}
      <motion.button
        onClick={() => setOpen(true)}
        className={`fixed bottom-6 right-6 z-[999] w-14 h-14 rounded-full bg-foreground text-background shadow-2xl flex items-center justify-center hover:scale-110 transition-transform ${open ? "hidden" : ""}`}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full border-2 border-background animate-pulse" style={{ backgroundColor: "hsl(142, 71%, 45%)" }} />
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-[999] w-[380px] max-w-[calc(100vw-2rem)] h-[520px] max-h-[calc(100vh-6rem)] bg-background border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-foreground text-background px-4 py-3 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-background/20 flex items-center justify-center">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-heading font-semibold">Drafinity AI</p>
                  <p className="text-[10px] opacity-70">Powered by AI • Always Online</p>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="hover:bg-background/10 rounded-full p-1 transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg, i) => (
                <div key={i} className={`flex gap-2 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${msg.role === "user" ? "bg-foreground text-background" : "bg-muted"}`}>
                    {msg.role === "user" ? <User className="w-3 h-3" /> : <Bot className="w-3 h-3" />}
                  </div>
                  <div className={`max-w-[80%] rounded-xl px-3 py-2 text-xs leading-relaxed ${msg.role === "user" ? "bg-foreground text-background" : "bg-muted text-foreground"}`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex gap-2">
                  <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center shrink-0">
                    <Bot className="w-3 h-3" />
                  </div>
                  <div className="bg-muted rounded-xl px-3 py-2">
                    <Loader2 className="w-4 h-4 animate-spin text-muted-foreground" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t border-border p-3 shrink-0">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about our services..."
                  className="flex-1 bg-muted border-none rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-foreground/20 text-foreground placeholder:text-muted-foreground"
                />
                <Button size="icon" onClick={sendMessage} disabled={loading || !input.trim()} className="h-8 w-8 rounded-lg shrink-0">
                  <Send className="w-3.5 h-3.5" />
                </Button>
              </div>
              <p className="text-[9px] text-muted-foreground/50 text-center mt-1.5">AI assistant • May produce inaccurate info</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatbot;
