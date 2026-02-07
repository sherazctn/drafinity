import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import CTASection from "@/components/CTASection";

const plans = [
  {
    name: "Basic Drafting",
    price: "Starting at $299",
    description: "Essential drafting services for straightforward projects.",
    features: [
      "2D Floor Plans",
      "Site Plans",
      "Up to 2,500 sq ft",
      "2 Revisions Included",
      "PDF & DWG Delivery",
      "5-7 Business Days",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "Starting at $799",
    description: "Comprehensive design package for complex projects.",
    features: [
      "Everything in Basic",
      "Structural Drafting",
      "MEP Coordination",
      "3D Exterior Rendering",
      "Up to 10,000 sq ft",
      "4 Revisions Included",
      "BIM Model Included",
      "3-5 Business Days",
    ],
    popular: true,
  },
  {
    name: "Full Design + Stamp",
    price: "Starting at $1,499",
    description: "Complete permit-ready package with certified plan stamping.",
    features: [
      "Everything in Professional",
      "Licensed Plan Stamping",
      "Code Compliance Review",
      "Permit Expediting",
      "Unlimited Revisions",
      "Interior Visualization",
      "Priority Support",
      "2-3 Business Days",
    ],
    popular: false,
  },
  {
    name: "Enterprise",
    price: "Custom Pricing",
    description: "For large-scale developments and ongoing partnerships.",
    features: [
      "Everything in Full Design",
      "Dedicated Project Manager",
      "Multi-State Stamping",
      "Volume Discounts",
      "White-Label Delivery",
      "24/7 Support",
      "Custom Workflows",
      "SLA Guarantee",
    ],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <main>
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 blueprint-grid">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs font-heading uppercase tracking-[0.2em] text-muted-foreground mb-4 block"
          >
            Pricing
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-6xl font-heading font-bold mb-6 max-w-3xl"
          >
            Transparent
            <br />
            <span className="text-gradient-highlight">Pricing Plans</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl leading-relaxed"
          >
            Choose the package that fits your project needs. All plans include
            our quality guarantee and professional support.
          </motion.p>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative bg-card border rounded-lg p-8 flex flex-col card-hover ${
                  plan.popular
                    ? "border-foreground/30 white-glow"
                    : "border-border"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-heading uppercase tracking-[0.2em] bg-foreground text-background px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                )}

                <div className="mb-6">
                  <h3 className="text-lg font-heading font-bold mb-1">{plan.name}</h3>
                  <p className="text-2xl font-heading font-bold mb-2">{plan.price}</p>
                  <p className="text-xs text-muted-foreground">{plan.description}</p>
                </div>

                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-foreground mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/contact">
                  <Button
                    variant={plan.popular ? "hero" : "hero-outline"}
                    className="w-full"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-sm text-muted-foreground mt-12 max-w-lg mx-auto"
          >
            All prices are estimates. Final pricing depends on project scope,
            complexity, and timeline. Contact us for a detailed custom quote.
          </motion.p>
        </div>
      </section>

      <CTASection />
    </main>
  );
};

export default Pricing;
