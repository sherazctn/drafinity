import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowUpRight, Clock } from "lucide-react";
import logo from "@/assets/drafinity-logo.png";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

const resourceLinks = [
  { label: "Software & Tools", href: "/software" },
  { label: "Legal & Permits", href: "/legal" },
  { label: "Blog & Resources", href: "/blog" },
];

const serviceLinks = [
  { label: "2D Floor Plans", href: "/services/2d-floor-plans" },
  { label: "3D Rendering", href: "/services/3d-rendering" },
  { label: "Plan Stamping", href: "/services/plan-stamping" },
  { label: "BIM Modeling", href: "/services/bim-modeling" },
  { label: "Structural Drafting", href: "/services/structural-drafting" },
  { label: "MEP Drafting", href: "/services/mep-drafting" },
  { label: "Construction Documents", href: "/services/construction-documents" },
  { label: "Permit Expediting", href: "/services/permit-expediting" },
];

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="lg:col-span-4">
            <img src={logo} alt="Drafinity LLC" className="h-5 w-auto invert mb-4" />
            <p className="text-sm text-primary-foreground/60 leading-relaxed max-w-xs mb-6">
              USA Certified Drafting, 3D Design & Plan Stamping Experts. Delivering
              permit-ready, precision-driven plans since 2015.
            </p>
            <div className="space-y-3">
              <a href="tel:+19177281625" className="flex items-center gap-3 text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Phone className="w-4 h-4 flex-shrink-0" />
                +1 (917) 728-1625
              </a>
              <a href="mailto:info@drafinity.us" className="flex items-center gap-3 text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Mail className="w-4 h-4 flex-shrink-0" />
                info@drafinity.us
              </a>
              <span className="flex items-center gap-3 text-sm text-primary-foreground/60">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                1209 Mountain Road Pl NE, Albuquerque, NM 87110
              </span>
              <span className="flex items-center gap-3 text-sm text-primary-foreground/60">
                <Clock className="w-4 h-4 flex-shrink-0" />
                Mon – Fri, 9 AM – 6 PM EST
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-heading uppercase tracking-[0.15em] text-primary-foreground mb-4">Company</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors inline-flex items-center gap-1 group">
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-heading uppercase tracking-[0.15em] text-primary-foreground mb-4">Services</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors inline-flex items-center gap-1 group">
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-heading uppercase tracking-[0.15em] text-primary-foreground mb-4">Resources</h4>
            <ul className="space-y-2.5 mb-8">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors inline-flex items-center gap-1 group">
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
            <div className="bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg p-4">
              <p className="text-xs font-heading uppercase tracking-[0.12em] text-primary-foreground mb-2">Need a Quote?</p>
              <p className="text-xs text-primary-foreground/60 mb-3 leading-relaxed">Get a free, detailed quote for your project within 24 hours.</p>
              <Link to="/contact" className="inline-flex text-xs font-heading uppercase tracking-[0.12em] text-primary-foreground hover:text-primary-foreground/80 transition-colors">
                Request Quote →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-primary-foreground/50">© {new Date().getFullYear()} Drafinity LLC. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <span className="text-xs text-primary-foreground/50">USA Certified · Precision-Driven · Since 2015</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
