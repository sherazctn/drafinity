import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/drafinity-logo.png";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

const resourceLinks = [
  { label: "Software & Tools", href: "/software" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
];

const serviceLinks = [
  "2D Floor Plans",
  "3D Rendering",
  "Plan Stamping",
  "BIM Modeling",
  "Structural Drafting",
  "MEP Drafting",
];

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img src={logo} alt="Drafinity LLC" className="h-5 w-auto invert mb-4" />
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              USA Certified Drafting, 3D Design & Plan Stamping Experts. Delivering
              permit-ready, precision-driven plans since 2015.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-heading uppercase tracking-[0.15em] text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-heading uppercase tracking-[0.15em] text-foreground mb-4">
              Resources
            </h4>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-heading uppercase tracking-[0.15em] text-foreground mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+19175401563"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  +1 (917) 540-1563
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@drafinity.com"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  info@drafinity.com
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-3.5 h-3.5" />
                  New York, USA
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="section-divider my-10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Drafinity LLC. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            USA Certified · Precision-Driven · Since 2015
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
