import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import PageHeroAnimation from "@/components/PageHeroAnimation";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent", description: "Thank you for reaching out! We'll get back to you within 24 hours." });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <main>
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 blueprint-grid relative overflow-hidden">
        <PageHeroAnimation page="contact" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs font-heading uppercase tracking-[0.2em] text-muted-foreground mb-4 block">Contact Us</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl lg:text-6xl font-heading font-bold mb-6 max-w-3xl">
            Let's Build<br /><span className="text-gradient-highlight">Something Together</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Reach out for a free consultation. We'll review your project and deliver a quote within 24 hours.
          </motion.p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="text-xs font-heading uppercase tracking-[0.15em] text-foreground mb-6">Get in Touch</h3>
                <ul className="space-y-5">
                  <li>
                    <a href="tel:+19177281625" className="group flex items-start gap-4">
                      <Phone className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors mt-0.5" />
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider">Phone</p>
                        <p className="font-heading group-hover:text-foreground transition-colors">+1 (917) 728-1625</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@drafinity.us" className="group flex items-start gap-4">
                      <Mail className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors mt-0.5" />
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider">Email</p>
                        <p className="font-heading group-hover:text-foreground transition-colors">info@drafinity.us</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <div className="flex items-start gap-4">
                      <MapPin className="w-5 h-5 text-muted-foreground mt-0.5" />
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider">Address</p>
                        <p className="font-heading">1209 Mountain Road Pl NE</p>
                        <p className="text-sm text-muted-foreground">Albuquerque, NM 87110</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <h4 className="text-sm font-heading font-semibold">Business Hours</h4>
                </div>
                <p className="text-sm text-muted-foreground">Monday – Friday: 9:00 AM – 6:00 PM EST</p>
                <p className="text-sm text-muted-foreground">Weekend: By appointment</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-heading uppercase tracking-wider text-muted-foreground mb-2">Full Name *</label>
                    <Input id="name" name="name" required value={formData.name} onChange={handleChange} placeholder="John Smith" className="bg-card border-border" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-heading uppercase tracking-wider text-muted-foreground mb-2">Email *</label>
                    <Input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} placeholder="john@example.com" className="bg-card border-border" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-heading uppercase tracking-wider text-muted-foreground mb-2">Phone</label>
                    <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="(555) 123-4567" className="bg-card border-border" />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-xs font-heading uppercase tracking-wider text-muted-foreground mb-2">Subject *</label>
                    <Input id="subject" name="subject" required value={formData.subject} onChange={handleChange} placeholder="e.g. 3D Rendering Quote" className="bg-card border-border" />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-heading uppercase tracking-wider text-muted-foreground mb-2">Project Details *</label>
                  <Textarea id="message" name="message" required rows={6} value={formData.message} onChange={handleChange} placeholder="Tell us about your project, timeline, and any specific requirements..." className="bg-card border-border resize-none" />
                </div>
                <Button variant="hero" size="lg" type="submit" className="w-full sm:w-auto">
                  Send Message <Send className="w-4 h-4" />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
