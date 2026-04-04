import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/drafinity-logo.png";

const serviceItems = [
  { label: "2D Floor Plans", slug: "2d-floor-plans" },
  { label: "Structural Drafting", slug: "structural-drafting" },
  { label: "Site Plans", slug: "site-plans" },
  { label: "MEP Drafting", slug: "mep-drafting" },
  { label: "3D Rendering", slug: "3d-rendering" },
  { label: "Interior Visualization", slug: "interior-visualization" },
  { label: "BIM Modeling", slug: "bim-modeling" },
  { label: "Construction Documents", slug: "construction-documents" },
  { label: "Material Estimation", slug: "material-estimation" },
  { label: "Plan Stamping", slug: "plan-stamping" },
  { label: "Permit Expediting", slug: "permit-expediting" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Software", href: "/software" },
  { label: "Tools", href: "/tools" },
  { label: "Legal", href: "/legal" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm" : "bg-transparent"}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Drafinity LLC" className="h-5 lg:h-6 w-auto" />
          </Link>

          <div className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <div key={link.href} className="relative" ref={link.hasDropdown ? dropdownRef : undefined}>
                {link.hasDropdown ? (
                  <button
                    onMouseEnter={() => setServicesOpen(true)}
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className={`relative text-xs font-heading uppercase tracking-[0.15em] transition-colors duration-300 py-1 flex items-center gap-1 ${location.pathname.startsWith("/services") ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
                  >
                    {link.label}
                    <ChevronDown className={`w-3 h-3 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                    {location.pathname.startsWith("/services") && (
                      <motion.div layoutId="nav-underline" className="absolute -bottom-0.5 left-0 right-0 h-px bg-foreground" />
                    )}
                  </button>
                ) : (
                  <Link to={link.href} className={`relative text-xs font-heading uppercase tracking-[0.15em] transition-colors duration-300 py-1 ${location.pathname === link.href ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}>
                    {link.label}
                    {location.pathname === link.href && (
                      <motion.div layoutId="nav-underline" className="absolute -bottom-0.5 left-0 right-0 h-px bg-foreground" />
                    )}
                  </Link>
                )}

                {/* Services Dropdown */}
                <AnimatePresence>
                  {link.hasDropdown && servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-background/98 backdrop-blur-xl border border-border rounded-lg shadow-xl overflow-hidden z-50"
                    >
                      <div className="py-2">
                        <Link to="/services" className="block px-4 py-2 text-xs font-heading uppercase tracking-wider text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors border-b border-border mb-1">
                          All Services →
                        </Link>
                        {serviceItems.map((item) => (
                          <Link
                            key={item.slug}
                            to={`/services/${item.slug}`}
                            className="block px-4 py-2 text-xs font-heading tracking-wide text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="hidden xl:flex items-center gap-4">
            <a href="mailto:info@drafinity.us" className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors">
              <Mail className="w-3.5 h-3.5" />
              <span className="font-heading tracking-wide">info@drafinity.us</span>
            </a>
            <span className="text-border">|</span>
            <a href="tel:+19177281625" className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors">
              <Phone className="w-3.5 h-3.5" />
              <span className="font-heading tracking-wide">(917) 728-1625</span>
            </a>
            <Link to="/contact">
              <Button variant="hero" size="sm">Get a Quote</Button>
            </Link>
          </div>

          <button className="xl:hidden text-foreground p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className="xl:hidden bg-background/98 backdrop-blur-xl border-b border-border overflow-hidden">
            <div className="container mx-auto px-4 py-6 flex flex-col gap-3">
              {navLinks.map((link, i) => (
                <motion.div key={link.href} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}>
                  {link.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className={`text-lg font-heading uppercase tracking-[0.15em] py-2 flex items-center gap-2 transition-colors w-full text-left ${location.pathname.startsWith("/services") ? "text-foreground" : "text-muted-foreground"}`}
                      >
                        {link.label}
                        <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden pl-4">
                            <Link to="/services" className="block py-1.5 text-sm text-muted-foreground hover:text-foreground">All Services</Link>
                            {serviceItems.map((item) => (
                              <Link key={item.slug} to={`/services/${item.slug}`} className="block py-1.5 text-sm text-muted-foreground hover:text-foreground">
                                {item.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link to={link.href} className={`text-lg font-heading uppercase tracking-[0.15em] py-2 block transition-colors ${location.pathname === link.href ? "text-foreground" : "text-muted-foreground"}`}>
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}
              <div className="pt-4 border-t border-border flex flex-col gap-3">
                <a href="tel:+19177281625" className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <span>(917) 728-1625</span>
                </a>
                <a href="mailto:info@drafinity.us" className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <span>info@drafinity.us</span>
                </a>
                <Link to="/contact">
                  <Button variant="hero" className="w-full">Get a Free Quote</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
