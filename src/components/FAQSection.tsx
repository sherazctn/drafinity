import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "What areas do you serve?", a: "We serve all 50 US states. Our licensed professionals are certified to stamp and submit plans in every jurisdiction, ensuring compliance with local building codes no matter where your project is located." },
  { q: "How long does a typical drafting project take?", a: "Timelines vary by project complexity. Simple floor plans can be completed in 2–3 business days, while comprehensive construction document sets typically take 1–2 weeks. We also offer expedited services for urgent projects." },
  { q: "Do you offer plan stamping services?", a: "Yes, we provide certified plan stamping by licensed architects and engineers across all US states. Our stamped plans are permit-ready and meet all applicable building code requirements." },
  { q: "What file formats do you deliver?", a: "We deliver in all standard formats including DWG, DXF, PDF, RVT (Revit), SKP (SketchUp), and high-resolution image files. We can accommodate any specific format requirements your project needs." },
  { q: "Can you work with my existing sketches or drawings?", a: "Absolutely. We routinely work from hand sketches, napkin drawings, PDFs, photos, or existing CAD files. Our team will convert your concepts into precise, code-compliant technical drawings." },
  { q: "What is your revision policy?", a: "We include revisions in every project. Minor revisions are typically included at no additional cost. For major scope changes, we'll provide a transparent quote before proceeding so there are no surprises." },
  { q: "How do you ensure quality and accuracy?", a: "Every project goes through our multi-step QC process: initial review, cross-discipline coordination check, code compliance verification, and final senior review before delivery." },
  { q: "Do you sign NDAs or confidentiality agreements?", a: "Yes, we take data security seriously. We're happy to sign NDAs and confidentiality agreements. All project files are stored on encrypted, secure servers with restricted access." },
];

const FAQSection = () => {
  return (
    <section className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs font-heading uppercase tracking-[0.2em] text-muted-foreground mb-4 block"
            >
              FAQ
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl lg:text-5xl font-heading font-bold mb-6"
            >
              Questions?
              <br />
              <span className="text-gradient-highlight">We've Got Answers</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground leading-relaxed mb-8"
            >
              Everything you need to know about our drafting, design, and plan stamping services. Can't find what you're looking for? Reach out to our team.
            </motion.p>
            <motion.a
              href="tel:+19175401563"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-sm font-heading uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors"
            >
              Call us: (917) 540-1563 →
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-2">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="border border-border rounded-lg px-6 bg-card shadow-sm"
                >
                  <AccordionTrigger className="text-sm font-heading font-medium text-left hover:no-underline py-4">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
