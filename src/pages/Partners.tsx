import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Shield, Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import CTASection from "@/components/CTASection";
import PageHeroAnimation from "@/components/PageHeroAnimation";

const allServices = [
  "2D Floor Plans", "Structural Drafting", "Site Plans", "MEP Drafting",
  "3D Rendering", "BIM Modeling", "Plan Stamping", "Permit Expediting",
  "Construction Documents", "Material Estimation", "Interior Visualization",
];

const usStates = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
  "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
  "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan",
  "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire",
  "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
  "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia",
  "Wisconsin", "Wyoming",
];

const partners = usStates.map((state, i) => {
  const serviceCount = state === "New Mexico" ? allServices.length : 3 + (i % 5);
  const services = state === "New Mexico" ? allServices : allServices.slice(0, serviceCount);
  return {
    id: i + 1,
    name: "Partner Firm",
    state,
    license: `LIC-${String(10000 + i * 137).slice(0, 5)}`,
    address: `${100 + i * 7} Main Street, ${state}`,
    services,
    isNative: state === "New Mexico",
  };
});

const Partners = () => {
  const [stateFilter, setStateFilter] = useState("all");
  const [serviceFilter, setServiceFilter] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = partners.filter((p) => {
    if (stateFilter !== "all" && p.state !== stateFilter) return false;
    if (serviceFilter !== "all" && !p.services.includes(serviceFilter)) return false;
    if (search && !p.state.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <main>
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 blueprint-grid relative overflow-hidden">
        <PageHeroAnimation page="about" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs font-heading uppercase tracking-[0.2em] text-muted-foreground mb-4 block">Our Network</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl lg:text-6xl font-heading font-bold mb-6 max-w-3xl">
            Licensed Partners<br /><span className="text-gradient-highlight">Across 50 States</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Our nationwide network of licensed professionals ensures your projects meet local codes and regulations in every state.
          </motion.p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <div className="relative flex-1 max-w-xs">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Search by state..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9 text-sm" />
            </div>
            <Select value={stateFilter} onValueChange={setStateFilter}>
              <SelectTrigger className="w-48 text-sm">
                <Filter className="w-3.5 h-3.5 mr-2" />
                <SelectValue placeholder="Filter by State" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All States</SelectItem>
                {usStates.map((s) => (<SelectItem key={s} value={s}>{s}</SelectItem>))}
              </SelectContent>
            </Select>
            <Select value={serviceFilter} onValueChange={setServiceFilter}>
              <SelectTrigger className="w-56 text-sm">
                <Filter className="w-3.5 h-3.5 mr-2" />
                <SelectValue placeholder="Filter by Service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Services</SelectItem>
                {allServices.map((s) => (<SelectItem key={s} value={s}>{s}</SelectItem>))}
              </SelectContent>
            </Select>
          </div>

          <p className="text-sm text-muted-foreground mb-6">{filtered.length} partners found</p>

          {/* Partner Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((partner, i) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="relative bg-card border border-border rounded-lg p-6 overflow-hidden"
              >
                {/* Blur overlay */}
                <div className="absolute inset-0 backdrop-blur-md bg-background/60 z-20 flex items-center justify-center rounded-lg">
                  <div className="text-center">
                    <Shield className="w-8 h-8 text-muted-foreground/40 mx-auto mb-2" />
                    <span className="text-sm font-heading font-bold text-muted-foreground/60 uppercase tracking-wider">Coming Soon</span>
                  </div>
                </div>

                {/* Card content (blurred behind overlay) */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center">
                      <Shield className="w-6 h-6 text-muted-foreground" />
                    </div>
                    <div>
                      <h3 className="text-sm font-heading font-bold">{partner.name}</h3>
                      <p className="text-xs text-muted-foreground">License: {partner.license}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <MapPin className="w-3.5 h-3.5" />
                    {partner.address}
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2 font-heading">
                      {partner.isNative ? "Native Services" : "Partner Services"} · {partner.state}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {partner.services.map((s) => (
                        <span key={s} className="text-[10px] bg-muted text-muted-foreground px-2 py-0.5 rounded-full">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
};

export default Partners;
