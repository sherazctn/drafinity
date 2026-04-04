import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Ruler, Box, Layers, PaintBucket, FolderUp, Triangle, Weight, Blocks, Grid3X3, ArrowRightLeft, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import CTASection from "@/components/CTASection";
import PageHeroAnimation from "@/components/PageHeroAnimation";

// ─── Tool Components ─────────────────────────────────────────

const SquareFootageCalc = () => {
  const [length, setLength] = useState(""); const [width, setWidth] = useState("");
  const area = length && width ? (parseFloat(length) * parseFloat(width)) : 0;
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <div><Label className="text-xs">Length (ft)</Label><Input type="number" value={length} onChange={e => setLength(e.target.value)} placeholder="0" /></div>
        <div><Label className="text-xs">Width (ft)</Label><Input type="number" value={width} onChange={e => setWidth(e.target.value)} placeholder="0" /></div>
      </div>
      {area > 0 && (
        <div className="bg-muted rounded-lg p-4 text-center">
          <p className="text-xs text-muted-foreground mb-1">Total Area</p>
          <p className="text-2xl font-heading font-bold">{area.toLocaleString()} sq ft</p>
          <p className="text-xs text-muted-foreground mt-1">{(area * 0.0929).toFixed(2)} m²</p>
        </div>
      )}
    </div>
  );
};

const ConcreteCalc = () => {
  const [l, setL] = useState(""); const [w, setW] = useState(""); const [d, setD] = useState("");
  const vol = l && w && d ? (parseFloat(l) * parseFloat(w) * (parseFloat(d) / 12)) / 27 : 0;
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-3">
        <div><Label className="text-xs">Length (ft)</Label><Input type="number" value={l} onChange={e => setL(e.target.value)} placeholder="0" /></div>
        <div><Label className="text-xs">Width (ft)</Label><Input type="number" value={w} onChange={e => setW(e.target.value)} placeholder="0" /></div>
        <div><Label className="text-xs">Depth (in)</Label><Input type="number" value={d} onChange={e => setD(e.target.value)} placeholder="4" /></div>
      </div>
      {vol > 0 && (
        <div className="bg-muted rounded-lg p-4 text-center">
          <p className="text-xs text-muted-foreground mb-1">Concrete Needed</p>
          <p className="text-2xl font-heading font-bold">{vol.toFixed(2)} cubic yards</p>
          <p className="text-xs text-muted-foreground mt-1">{(vol * 0.7646).toFixed(2)} m³ · ~{Math.ceil(vol * 2)} bags (80lb)</p>
        </div>
      )}
    </div>
  );
};

const StairCalc = () => {
  const [totalRise, setTotalRise] = useState(""); const [riserH, setRiserH] = useState("7.5");
  const risers = totalRise ? Math.ceil(parseFloat(totalRise) / parseFloat(riserH)) : 0;
  const actualRiser = totalRise && risers ? parseFloat(totalRise) / risers : 0;
  const treadDepth = 10;
  const totalRun = risers > 0 ? (risers - 1) * treadDepth : 0;
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <div><Label className="text-xs">Total Rise (in)</Label><Input type="number" value={totalRise} onChange={e => setTotalRise(e.target.value)} placeholder="108" /></div>
        <div><Label className="text-xs">Riser Height (in)</Label><Input type="number" value={riserH} onChange={e => setRiserH(e.target.value)} placeholder="7.5" /></div>
      </div>
      {risers > 0 && (
        <div className="bg-muted rounded-lg p-4 space-y-2">
          <div className="grid grid-cols-2 gap-4 text-center">
            <div><p className="text-xs text-muted-foreground">Risers</p><p className="text-xl font-heading font-bold">{risers}</p></div>
            <div><p className="text-xs text-muted-foreground">Treads</p><p className="text-xl font-heading font-bold">{risers - 1}</p></div>
            <div><p className="text-xs text-muted-foreground">Actual Riser</p><p className="text-xl font-heading font-bold">{actualRiser.toFixed(2)}"</p></div>
            <div><p className="text-xs text-muted-foreground">Total Run</p><p className="text-xl font-heading font-bold">{totalRun}"</p></div>
          </div>
          <p className="text-[10px] text-muted-foreground text-center">IRC max riser: 7¾" · Min tread: 10" · Rule of thumb: riser + tread = 17–18"</p>
        </div>
      )}
    </div>
  );
};

const RoofPitchCalc = () => {
  const [rise, setRise] = useState(""); const [run, setRun] = useState("12");
  const pitch = rise && run ? parseFloat(rise) / parseFloat(run) : 0;
  const angle = pitch ? Math.atan(pitch) * (180 / Math.PI) : 0;
  const factor = pitch ? Math.sqrt(1 + pitch * pitch) : 0;
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <div><Label className="text-xs">Rise (in)</Label><Input type="number" value={rise} onChange={e => setRise(e.target.value)} placeholder="6" /></div>
        <div><Label className="text-xs">Run (in)</Label><Input type="number" value={run} onChange={e => setRun(e.target.value)} placeholder="12" /></div>
      </div>
      {pitch > 0 && (
        <div className="bg-muted rounded-lg p-4 text-center space-y-2">
          <p className="text-2xl font-heading font-bold">{parseFloat(rise)}/12 Pitch</p>
          <p className="text-sm text-muted-foreground">Angle: {angle.toFixed(1)}° · Multiplier: {factor.toFixed(4)}</p>
          <p className="text-xs text-muted-foreground">
            {angle < 10 ? "Flat roof" : angle < 20 ? "Low slope" : angle < 35 ? "Moderate slope" : "Steep slope"}
          </p>
        </div>
      )}
    </div>
  );
};

const PaintCalc = () => {
  const [l, setL] = useState(""); const [w, setW] = useState(""); const [h, setH] = useState("8"); const [coats, setCoats] = useState("2");
  const wallArea = l && w && h ? 2 * (parseFloat(l) + parseFloat(w)) * parseFloat(h) : 0;
  const gallons = wallArea ? (wallArea * parseInt(coats)) / 350 : 0;
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <div><Label className="text-xs">Room Length (ft)</Label><Input type="number" value={l} onChange={e => setL(e.target.value)} placeholder="12" /></div>
        <div><Label className="text-xs">Room Width (ft)</Label><Input type="number" value={w} onChange={e => setW(e.target.value)} placeholder="10" /></div>
        <div><Label className="text-xs">Wall Height (ft)</Label><Input type="number" value={h} onChange={e => setH(e.target.value)} placeholder="8" /></div>
        <div><Label className="text-xs">Coats</Label><Input type="number" value={coats} onChange={e => setCoats(e.target.value)} placeholder="2" /></div>
      </div>
      {gallons > 0 && (
        <div className="bg-muted rounded-lg p-4 text-center">
          <p className="text-xs text-muted-foreground mb-1">Paint Needed</p>
          <p className="text-2xl font-heading font-bold">{Math.ceil(gallons)} gallons</p>
          <p className="text-xs text-muted-foreground mt-1">Wall area: {wallArea.toFixed(0)} sq ft · Coverage: 350 sq ft/gal</p>
        </div>
      )}
    </div>
  );
};

const UnitConverter = () => {
  const [val, setVal] = useState(""); const [from, setFrom] = useState("ft"); const [to, setTo] = useState("m");
  const conversions: Record<string, number> = { ft: 0.3048, m: 1, in: 0.0254, cm: 0.01, mm: 0.001, yd: 0.9144 };
  const result = val ? (parseFloat(val) * conversions[from]) / conversions[to] : 0;
  const units = [{ v: "ft", l: "Feet" }, { v: "m", l: "Meters" }, { v: "in", l: "Inches" }, { v: "cm", l: "Centimeters" }, { v: "mm", l: "Millimeters" }, { v: "yd", l: "Yards" }];
  return (
    <div className="space-y-4">
      <div><Label className="text-xs">Value</Label><Input type="number" value={val} onChange={e => setVal(e.target.value)} placeholder="0" /></div>
      <div className="grid grid-cols-2 gap-3">
        <div><Label className="text-xs">From</Label>
          <Select value={from} onValueChange={setFrom}><SelectTrigger><SelectValue /></SelectTrigger><SelectContent>{units.map(u => <SelectItem key={u.v} value={u.v}>{u.l}</SelectItem>)}</SelectContent></Select>
        </div>
        <div><Label className="text-xs">To</Label>
          <Select value={to} onValueChange={setTo}><SelectTrigger><SelectValue /></SelectTrigger><SelectContent>{units.map(u => <SelectItem key={u.v} value={u.v}>{u.l}</SelectItem>)}</SelectContent></Select>
        </div>
      </div>
      {result > 0 && (
        <div className="bg-muted rounded-lg p-4 text-center">
          <p className="text-2xl font-heading font-bold">{result.toFixed(4)} {to}</p>
        </div>
      )}
    </div>
  );
};

const BrickCalc = () => {
  const [l, setL] = useState(""); const [h, setH] = useState("");
  const area = l && h ? parseFloat(l) * parseFloat(h) : 0;
  const bricks = area ? Math.ceil(area * 7) : 0; // ~7 standard bricks per sq ft
  const mortar = area ? (area * 0.007).toFixed(1) : "0"; // cubic yards of mortar
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <div><Label className="text-xs">Wall Length (ft)</Label><Input type="number" value={l} onChange={e => setL(e.target.value)} placeholder="20" /></div>
        <div><Label className="text-xs">Wall Height (ft)</Label><Input type="number" value={h} onChange={e => setH(e.target.value)} placeholder="8" /></div>
      </div>
      {bricks > 0 && (
        <div className="bg-muted rounded-lg p-4 text-center">
          <p className="text-xs text-muted-foreground mb-1">Bricks Needed</p>
          <p className="text-2xl font-heading font-bold">{bricks.toLocaleString()} bricks</p>
          <p className="text-xs text-muted-foreground mt-1">Wall area: {area.toFixed(0)} sq ft · Mortar: ~{mortar} cu yd</p>
        </div>
      )}
    </div>
  );
};

const RebarCalc = () => {
  const [l, setL] = useState(""); const [w, setW] = useState(""); const [sp, setSp] = useState("12");
  const area = l && w ? parseFloat(l) * parseFloat(w) : 0;
  const barsL = w && sp ? Math.ceil((parseFloat(w) * 12) / parseFloat(sp)) + 1 : 0;
  const barsW = l && sp ? Math.ceil((parseFloat(l) * 12) / parseFloat(sp)) + 1 : 0;
  const totalFt = l && w ? (barsL * parseFloat(l)) + (barsW * parseFloat(w)) : 0;
  const bars20 = totalFt ? Math.ceil(totalFt / 20) : 0;
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-3">
        <div><Label className="text-xs">Length (ft)</Label><Input type="number" value={l} onChange={e => setL(e.target.value)} placeholder="20" /></div>
        <div><Label className="text-xs">Width (ft)</Label><Input type="number" value={w} onChange={e => setW(e.target.value)} placeholder="20" /></div>
        <div><Label className="text-xs">Spacing (in)</Label><Input type="number" value={sp} onChange={e => setSp(e.target.value)} placeholder="12" /></div>
      </div>
      {totalFt > 0 && (
        <div className="bg-muted rounded-lg p-4 text-center space-y-1">
          <p className="text-xs text-muted-foreground">Rebar Needed</p>
          <p className="text-2xl font-heading font-bold">{totalFt.toFixed(0)} linear ft</p>
          <p className="text-xs text-muted-foreground">{barsL + barsW} bars · ~{bars20} pcs (20ft bars) · Area: {area} sq ft</p>
        </div>
      )}
    </div>
  );
};

const GravelCalc = () => {
  const [l, setL] = useState(""); const [w, setW] = useState(""); const [d, setD] = useState("4");
  const cubicFt = l && w && d ? parseFloat(l) * parseFloat(w) * (parseFloat(d) / 12) : 0;
  const cubicYd = cubicFt / 27;
  const tons = cubicYd * 1.4;
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-3">
        <div><Label className="text-xs">Length (ft)</Label><Input type="number" value={l} onChange={e => setL(e.target.value)} placeholder="20" /></div>
        <div><Label className="text-xs">Width (ft)</Label><Input type="number" value={w} onChange={e => setW(e.target.value)} placeholder="10" /></div>
        <div><Label className="text-xs">Depth (in)</Label><Input type="number" value={d} onChange={e => setD(e.target.value)} placeholder="4" /></div>
      </div>
      {cubicYd > 0 && (
        <div className="bg-muted rounded-lg p-4 text-center">
          <p className="text-xs text-muted-foreground mb-1">Material Needed</p>
          <p className="text-2xl font-heading font-bold">{cubicYd.toFixed(2)} cubic yards</p>
          <p className="text-xs text-muted-foreground mt-1">~{tons.toFixed(2)} tons · {cubicFt.toFixed(0)} cu ft</p>
        </div>
      )}
    </div>
  );
};

const DeckBoardCalc = () => {
  const [l, setL] = useState(""); const [w, setW] = useState(""); const [bw, setBw] = useState("5.5");
  const area = l && w ? parseFloat(l) * parseFloat(w) : 0;
  const boardFt = area;
  const boards = l && bw ? Math.ceil((parseFloat(l) * 12) / (parseFloat(bw) + 0.125)) : 0;
  const boardLength = w ? parseFloat(w) : 0;
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-3">
        <div><Label className="text-xs">Deck Length (ft)</Label><Input type="number" value={l} onChange={e => setL(e.target.value)} placeholder="16" /></div>
        <div><Label className="text-xs">Deck Width (ft)</Label><Input type="number" value={w} onChange={e => setW(e.target.value)} placeholder="12" /></div>
        <div><Label className="text-xs">Board Width (in)</Label><Input type="number" value={bw} onChange={e => setBw(e.target.value)} placeholder="5.5" /></div>
      </div>
      {boards > 0 && (
        <div className="bg-muted rounded-lg p-4 text-center space-y-1">
          <p className="text-xs text-muted-foreground">Boards Needed</p>
          <p className="text-2xl font-heading font-bold">{boards} boards</p>
          <p className="text-xs text-muted-foreground">Each {boardLength}ft long · {boardFt} board ft · Area: {area} sq ft</p>
        </div>
      )}
    </div>
  );
};

const DryWallCalc = () => {
  const [l, setL] = useState(""); const [w, setW] = useState(""); const [h, setH] = useState("8");
  const wallArea = l && w && h ? 2 * (parseFloat(l) + parseFloat(w)) * parseFloat(h) : 0;
  const ceilingArea = l && w ? parseFloat(l) * parseFloat(w) : 0;
  const totalArea = wallArea + ceilingArea;
  const sheets4x8 = totalArea ? Math.ceil(totalArea / 32) : 0;
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-3">
        <div><Label className="text-xs">Room Length (ft)</Label><Input type="number" value={l} onChange={e => setL(e.target.value)} placeholder="12" /></div>
        <div><Label className="text-xs">Room Width (ft)</Label><Input type="number" value={w} onChange={e => setW(e.target.value)} placeholder="10" /></div>
        <div><Label className="text-xs">Height (ft)</Label><Input type="number" value={h} onChange={e => setH(e.target.value)} placeholder="8" /></div>
      </div>
      {sheets4x8 > 0 && (
        <div className="bg-muted rounded-lg p-4 text-center space-y-1">
          <p className="text-xs text-muted-foreground">Drywall Sheets (4×8)</p>
          <p className="text-2xl font-heading font-bold">{sheets4x8} sheets</p>
          <p className="text-xs text-muted-foreground">Walls: {wallArea.toFixed(0)} sq ft · Ceiling: {ceilingArea.toFixed(0)} sq ft · Total: {totalArea.toFixed(0)} sq ft</p>
        </div>
      )}
    </div>
  );
};

const InsulationCalc = () => {
  const [area, setArea] = useState(""); const [rVal, setRVal] = useState("R-19");
  const rValues: Record<string, { thickness: string; bags: number }> = {
    "R-13": { thickness: '3.5"', bags: 26 }, "R-19": { thickness: '6.25"', bags: 18 },
    "R-30": { thickness: '9.5"', bags: 12 }, "R-38": { thickness: '12"', bags: 9 },
    "R-49": { thickness: '15.5"', bags: 7 },
  };
  const sqft = area ? parseFloat(area) : 0;
  const info = rValues[rVal];
  const batts = sqft ? Math.ceil(sqft / (info?.bags || 18)) : 0;
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <div><Label className="text-xs">Area (sq ft)</Label><Input type="number" value={area} onChange={e => setArea(e.target.value)} placeholder="500" /></div>
        <div><Label className="text-xs">R-Value</Label>
          <Select value={rVal} onValueChange={setRVal}><SelectTrigger><SelectValue /></SelectTrigger><SelectContent>
            {Object.keys(rValues).map(r => <SelectItem key={r} value={r}>{r}</SelectItem>)}
          </SelectContent></Select>
        </div>
      </div>
      {sqft > 0 && info && (
        <div className="bg-muted rounded-lg p-4 text-center space-y-1">
          <p className="text-xs text-muted-foreground">Insulation Needed</p>
          <p className="text-2xl font-heading font-bold">{batts} bags/rolls</p>
          <p className="text-xs text-muted-foreground">{rVal} · Thickness: {info.thickness} · Coverage: {info.bags} sq ft/bag</p>
        </div>
      )}
    </div>
  );
};

// ─── Tool definitions ───────────────────────────────────────

const tools = [
  { id: "sqft", icon: Grid3X3, title: "Square Footage Calculator", desc: "Calculate area in sq ft and sq meters from length × width.", component: SquareFootageCalc, category: "General" },
  { id: "concrete", icon: Box, title: "Concrete Calculator", desc: "Estimate cubic yards of concrete for slabs, footings, and walls.", component: ConcreteCalc, category: "Materials" },
  { id: "stair", icon: Stairs, title: "Stair Calculator", desc: "Calculate riser count, tread depth, and total run per IRC code.", component: StairCalc, category: "Design" },
  { id: "roof", icon: TriangleRight, title: "Roof Pitch Calculator", desc: "Find pitch ratio, angle, and slope multiplier for roofing.", component: RoofPitchCalc, category: "Design" },
  { id: "paint", icon: PaintBucket, title: "Paint Calculator", desc: "Estimate gallons of paint needed for rooms and walls.", component: PaintCalc, category: "Materials" },
  { id: "unit", icon: ArrowRightLeft, title: "Unit Converter", desc: "Convert between feet, meters, inches, centimeters, and more.", component: UnitConverter, category: "General" },
  { id: "brick", icon: Brick, title: "Brick Calculator", desc: "Calculate number of bricks and mortar for wall construction.", component: BrickCalc, category: "Materials" },
  { id: "rebar", icon: Layers, title: "Rebar Calculator", desc: "Estimate linear feet and number of rebar bars for slabs.", component: RebarCalc, category: "Structural" },
  { id: "gravel", icon: Weight, title: "Gravel & Fill Calculator", desc: "Calculate cubic yards and tons of gravel, sand, or fill dirt.", component: GravelCalc, category: "Materials" },
  { id: "deck", icon: Ruler, title: "Deck Board Calculator", desc: "Estimate number of deck boards needed by dimensions.", component: DeckBoardCalc, category: "Design" },
  { id: "drywall", icon: FileText, title: "Drywall Calculator", desc: "Calculate 4×8 drywall sheets for walls and ceilings.", component: DryWallCalc, category: "Materials" },
  { id: "insulation", icon: Calculator, title: "Insulation Calculator", desc: "Estimate insulation bags/rolls by area and R-value.", component: InsulationCalc, category: "Materials" },
];

const categories = ["All", "General", "Design", "Materials", "Structural"];

const Tools = () => {
  const [activeTool, setActiveTool] = useState<string | null>(null);
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? tools : tools.filter(t => t.category === filter);

  return (
    <main>
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 blueprint-grid relative overflow-hidden">
        <PageHeroAnimation page="software" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs font-heading uppercase tracking-[0.2em] text-muted-foreground mb-4 block">Free Online Tools</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl lg:text-6xl font-heading font-bold mb-6 max-w-3xl">
            Construction &<br /><span className="text-gradient-highlight">Design Calculators</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Free professional-grade calculators and tools for architects, engineers, contractors, and homeowners. No signup required.
          </motion.p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map(cat => (
              <Button key={cat} variant={filter === cat ? "default" : "outline"} size="sm" onClick={() => setFilter(cat)} className="text-xs font-heading uppercase tracking-wider">
                {cat}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((tool, i) => {
              const isActive = activeTool === tool.id;
              const Icon = tool.icon;
              return (
                <motion.div
                  key={tool.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className={`bg-card border rounded-lg p-6 transition-all ${isActive ? "border-foreground shadow-lg" : "border-border card-hover"}`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                        <Icon className="w-5 h-5 text-foreground" />
                      </div>
                      <div>
                        <h3 className="text-sm font-heading font-bold">{tool.title}</h3>
                        <span className="text-[10px] uppercase tracking-wider text-muted-foreground">{tool.category}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mb-4">{tool.desc}</p>

                  {isActive ? (
                    <div className="border-t border-border pt-4">
                      <tool.component />
                      <Button variant="ghost" size="sm" onClick={() => setActiveTool(null)} className="mt-4 w-full text-xs">
                        Close Tool
                      </Button>
                    </div>
                  ) : (
                    <Button variant="outline" size="sm" onClick={() => setActiveTool(tool.id)} className="w-full text-xs font-heading uppercase tracking-wider">
                      Open Calculator
                    </Button>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
};

export default Tools;
