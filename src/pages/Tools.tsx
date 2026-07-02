import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Calculator, Ruler, Box, Layers, PaintBucket, FolderUp, Triangle, Weight, Blocks, Grid3X3, ArrowRightLeft, FileText, Zap, Droplets, Thermometer, Scale, Wrench, Home, BarChart3, Maximize, TrendingUp, Star, Sparkles, Percent, Send, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import CTASection from "@/components/CTASection";
import PageHeroAnimation from "@/components/PageHeroAnimation";
import { toast } from "sonner";

// ─── Helper hint component ─────────────────
const Hint = ({ text }: { text: string }) => (
  <p className="text-[10px] text-muted-foreground/70 italic mt-1">{text}</p>
);

// ─── Email Results Dialog ─────────────────
const EmailResultsDialog = ({ open, onClose, resultText }: { open: boolean; onClose: () => void; resultText: string }) => {
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);

  const handleSend = async () => {
    if (!email) { toast.error("Please enter your email"); return; }
    setSending(true);
    const subject = encodeURIComponent("Drafinity Calculator Results");
    const body = encodeURIComponent(resultText + "\n\n—\nCalculated with Drafinity Free Tools\nhttps://drafinity.lovable.app/tools");
    window.open(`mailto:${email}?subject=${subject}&body=${body}`, "_self");
    setSending(false);
    toast.success("Opening your email client with results");
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-heading">Email Your Results</DialogTitle>
          <DialogDescription>Enter your email to receive the calculation results.</DialogDescription>
        </DialogHeader>
        <div className="space-y-4 pt-2">
          <div>
            <Label className="text-xs">Email Address</Label>
            <Input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="your@email.com" />
          </div>
          <div className="bg-muted rounded-lg p-3 text-xs text-muted-foreground whitespace-pre-wrap max-h-32 overflow-y-auto">{resultText}</div>
          <Button onClick={handleSend} disabled={sending} className="w-full">
            <Mail className="w-4 h-4 mr-2" /> Send Results
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

// ─── Result wrapper with email button ─────────────────
const ResultBox = ({ children, resultText }: { children: React.ReactNode; resultText: string }) => {
  const [showEmail, setShowEmail] = useState(false);
  return (
    <>
      <div className="bg-muted rounded-lg p-4 text-center">
        {children}
        <button onClick={() => setShowEmail(true)} className="mt-2 inline-flex items-center gap-1 text-[10px] text-muted-foreground hover:text-foreground transition-colors">
          <Send className="w-3 h-3" /> Email Results
        </button>
      </div>
      <EmailResultsDialog open={showEmail} onClose={() => setShowEmail(false)} resultText={resultText} />
    </>
  );
};


// ─── Calculator Components with helper hints ─────────────────

const SquareFootageCalc = () => {
  const [length, setLength] = useState(""); const [width, setWidth] = useState("");
  const area = length && width ? (parseFloat(length) * parseFloat(width)) : 0;
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <div><Label className="text-xs">Length (ft)</Label><Input type="number" value={length} onChange={e => setLength(e.target.value)} placeholder="0" /><Hint text="Measure wall-to-wall inside" /></div>
        <div><Label className="text-xs">Width (ft)</Label><Input type="number" value={width} onChange={e => setWidth(e.target.value)} placeholder="0" /></div>
      </div>
      {area > 0 && <ResultBox resultText={`Area: ${area.toLocaleString()} sq ft (${(area * 0.0929).toFixed(2)} m²)`}><p className="text-xs text-muted-foreground mb-1">Total Area</p><p className="text-2xl font-heading font-bold">{area.toLocaleString()} sq ft</p><p className="text-xs text-muted-foreground mt-1">{(area * 0.0929).toFixed(2)} m²</p></ResultBox>}
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
        <div><Label className="text-xs">Depth (in)</Label><Input type="number" value={d} onChange={e => setD(e.target.value)} placeholder="4" /><Hint text="Standard slab: 4in, Footing: 8-12in" /></div>
      </div>
      {vol > 0 && <ResultBox resultText={`Concrete: ${vol.toFixed(2)} cu yd · ${Math.ceil(vol * 2)} bags (80lb)`}><p className="text-xs text-muted-foreground mb-1">Concrete Needed</p><p className="text-2xl font-heading font-bold">{vol.toFixed(2)} cubic yards</p><p className="text-xs text-muted-foreground mt-1">{(vol * 0.7646).toFixed(2)} m³ · ~{Math.ceil(vol * 2)} bags (80lb)</p></ResultBox>}
    </div>
  );
};

const StairCalc = () => {
  const [totalRise, setTotalRise] = useState(""); const [riserH, setRiserH] = useState("7.5");
  const risers = totalRise ? Math.ceil(parseFloat(totalRise) / parseFloat(riserH)) : 0;
  const actualRiser = totalRise && risers ? parseFloat(totalRise) / risers : 0;
  const totalRun = risers > 0 ? (risers - 1) * 10 : 0;
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <div><Label className="text-xs">Total Rise (in)</Label><Input type="number" value={totalRise} onChange={e => setTotalRise(e.target.value)} placeholder="108" /><Hint text="Floor-to-floor height in inches" /></div>
        <div><Label className="text-xs">Riser Height (in)</Label><Input type="number" value={riserH} onChange={e => setRiserH(e.target.value)} placeholder="7.5" /><Hint text="IRC max: 7.75in, Ideal: 7-7.5in" /></div>
      </div>
      {risers > 0 && <ResultBox resultText={`Risers: ${risers}, Treads: ${risers-1}, Actual Riser: ${actualRiser.toFixed(2)}in, Total Run: ${totalRun}in`}><div className="grid grid-cols-2 gap-4 text-center"><div><p className="text-xs text-muted-foreground">Risers</p><p className="text-xl font-heading font-bold">{risers}</p></div><div><p className="text-xs text-muted-foreground">Treads</p><p className="text-xl font-heading font-bold">{risers - 1}</p></div><div><p className="text-xs text-muted-foreground">Actual Riser</p><p className="text-xl font-heading font-bold">{actualRiser.toFixed(2)}"</p></div><div><p className="text-xs text-muted-foreground">Total Run</p><p className="text-xl font-heading font-bold">{totalRun}"</p></div></div></ResultBox>}
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
        <div><Label className="text-xs">Rise (in)</Label><Input type="number" value={rise} onChange={e => setRise(e.target.value)} placeholder="6" /><Hint text="Low: 2-4, Medium: 5-8, Steep: 9-12" /></div>
        <div><Label className="text-xs">Run (in)</Label><Input type="number" value={run} onChange={e => setRun(e.target.value)} placeholder="12" /><Hint text="Standard run is always 12in" /></div>
      </div>
      {pitch > 0 && <ResultBox resultText={`Pitch: ${parseFloat(rise)}/12, Angle: ${angle.toFixed(1)}°, Multiplier: ${factor.toFixed(4)}`}><p className="text-2xl font-heading font-bold">{parseFloat(rise)}/12 Pitch</p><p className="text-sm text-muted-foreground">Angle: {angle.toFixed(1)}° · Multiplier: {factor.toFixed(4)}</p></ResultBox>}
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
        <div><Label className="text-xs">Wall Height (ft)</Label><Input type="number" value={h} onChange={e => setH(e.target.value)} placeholder="8" /><Hint text="Standard: 8ft, Modern: 9-10ft" /></div>
        <div><Label className="text-xs">Coats</Label><Input type="number" value={coats} onChange={e => setCoats(e.target.value)} placeholder="2" /><Hint text="1 coat for touch-up, 2 for new color" /></div>
      </div>
      {gallons > 0 && <ResultBox resultText={`Paint: ${Math.ceil(gallons)} gallons, Wall area: ${wallArea.toFixed(0)} sq ft`}><p className="text-xs text-muted-foreground mb-1">Paint Needed</p><p className="text-2xl font-heading font-bold">{Math.ceil(gallons)} gallons</p><p className="text-xs text-muted-foreground mt-1">Wall area: {wallArea.toFixed(0)} sq ft</p></ResultBox>}
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
        <div><Label className="text-xs">From</Label><Select value={from} onValueChange={setFrom}><SelectTrigger><SelectValue /></SelectTrigger><SelectContent>{units.map(u => <SelectItem key={u.v} value={u.v}>{u.l}</SelectItem>)}</SelectContent></Select></div>
        <div><Label className="text-xs">To</Label><Select value={to} onValueChange={setTo}><SelectTrigger><SelectValue /></SelectTrigger><SelectContent>{units.map(u => <SelectItem key={u.v} value={u.v}>{u.l}</SelectItem>)}</SelectContent></Select></div>
      </div>
      {result > 0 && <ResultBox resultText={`${val} ${from} = ${result.toFixed(4)} ${to}`}><p className="text-2xl font-heading font-bold">{result.toFixed(4)} {to}</p></ResultBox>}
    </div>
  );
};

const BrickCalc = () => {
  const [l, setL] = useState(""); const [h, setH] = useState("");
  const area = l && h ? parseFloat(l) * parseFloat(h) : 0;
  const bricks = area ? Math.ceil(area * 7) : 0;
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <div><Label className="text-xs">Wall Length (ft)</Label><Input type="number" value={l} onChange={e => setL(e.target.value)} placeholder="20" /></div>
        <div><Label className="text-xs">Wall Height (ft)</Label><Input type="number" value={h} onChange={e => setH(e.target.value)} placeholder="8" /><Hint text="~7 bricks per sq ft (standard size)" /></div>
      </div>
      {bricks > 0 && <ResultBox resultText={`Bricks: ${bricks.toLocaleString()}, Wall area: ${area.toFixed(0)} sq ft`}><p className="text-xs text-muted-foreground mb-1">Bricks Needed</p><p className="text-2xl font-heading font-bold">{bricks.toLocaleString()}</p><p className="text-xs text-muted-foreground mt-1">Wall area: {area.toFixed(0)} sq ft</p></ResultBox>}
    </div>
  );
};

const RebarCalc = () => {
  const [l, setL] = useState(""); const [w, setW] = useState(""); const [sp, setSp] = useState("12");
  const barsL = w && sp ? Math.ceil((parseFloat(w) * 12) / parseFloat(sp)) + 1 : 0;
  const barsW = l && sp ? Math.ceil((parseFloat(l) * 12) / parseFloat(sp)) + 1 : 0;
  const totalFt = l && w ? (barsL * parseFloat(l)) + (barsW * parseFloat(w)) : 0;
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-3">
        <div><Label className="text-xs">Length (ft)</Label><Input type="number" value={l} onChange={e => setL(e.target.value)} placeholder="20" /></div>
        <div><Label className="text-xs">Width (ft)</Label><Input type="number" value={w} onChange={e => setW(e.target.value)} placeholder="20" /></div>
        <div><Label className="text-xs">Spacing (in)</Label><Input type="number" value={sp} onChange={e => setSp(e.target.value)} placeholder="12" /><Hint text="Common: 12in, Heavy: 6in" /></div>
      </div>
      {totalFt > 0 && <ResultBox resultText={`Rebar: ${totalFt.toFixed(0)} linear ft, ${barsL + barsW} bars, ~${Math.ceil(totalFt / 20)} pcs (20ft)`}><p className="text-xs text-muted-foreground">Rebar Needed</p><p className="text-2xl font-heading font-bold">{totalFt.toFixed(0)} linear ft</p><p className="text-xs text-muted-foreground">{barsL + barsW} bars · ~{Math.ceil(totalFt / 20)} pcs (20ft)</p></ResultBox>}
    </div>
  );
};

const GravelCalc = () => {
  const [l, setL] = useState(""); const [w, setW] = useState(""); const [d, setD] = useState("4");
  const cubicYd = l && w && d ? (parseFloat(l) * parseFloat(w) * (parseFloat(d) / 12)) / 27 : 0;
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-3">
        <div><Label className="text-xs">Length (ft)</Label><Input type="number" value={l} onChange={e => setL(e.target.value)} placeholder="20" /></div>
        <div><Label className="text-xs">Width (ft)</Label><Input type="number" value={w} onChange={e => setW(e.target.value)} placeholder="10" /></div>
        <div><Label className="text-xs">Depth (in)</Label><Input type="number" value={d} onChange={e => setD(e.target.value)} placeholder="4" /><Hint text="Driveway: 4-6in, Walkway: 2-3in" /></div>
      </div>
      {cubicYd > 0 && <ResultBox resultText={`Gravel: ${cubicYd.toFixed(2)} cu yd, ~${(cubicYd * 1.4).toFixed(2)} tons`}><p className="text-xs text-muted-foreground mb-1">Material Needed</p><p className="text-2xl font-heading font-bold">{cubicYd.toFixed(2)} cubic yards</p><p className="text-xs text-muted-foreground mt-1">~{(cubicYd * 1.4).toFixed(2)} tons</p></ResultBox>}
    </div>
  );
};

const DeckBoardCalc = () => {
  const [l, setL] = useState(""); const [w, setW] = useState(""); const [bw, setBw] = useState("5.5");
  const boards = l && bw ? Math.ceil((parseFloat(l) * 12) / (parseFloat(bw) + 0.125)) : 0;
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-3">
        <div><Label className="text-xs">Deck Length (ft)</Label><Input type="number" value={l} onChange={e => setL(e.target.value)} placeholder="16" /></div>
        <div><Label className="text-xs">Deck Width (ft)</Label><Input type="number" value={w} onChange={e => setW(e.target.value)} placeholder="12" /></div>
        <div><Label className="text-xs">Board Width (in)</Label><Input type="number" value={bw} onChange={e => setBw(e.target.value)} placeholder="5.5" /><Hint text="Standard 2×6: 5.5in actual" /></div>
      </div>
      {boards > 0 && <ResultBox resultText={`Boards: ${boards}, each ${w || 0}ft long`}><p className="text-xs text-muted-foreground">Boards Needed</p><p className="text-2xl font-heading font-bold">{boards} boards</p><p className="text-xs text-muted-foreground">Each {w || 0}ft long</p></ResultBox>}
    </div>
  );
};

const DryWallCalc = () => {
  const [l, setL] = useState(""); const [w, setW] = useState(""); const [h, setH] = useState("8");
  const wallArea = l && w && h ? 2 * (parseFloat(l) + parseFloat(w)) * parseFloat(h) : 0;
  const ceilingArea = l && w ? parseFloat(l) * parseFloat(w) : 0;
  const sheets = (wallArea + ceilingArea) ? Math.ceil((wallArea + ceilingArea) / 32) : 0;
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-3">
        <div><Label className="text-xs">Room Length (ft)</Label><Input type="number" value={l} onChange={e => setL(e.target.value)} placeholder="12" /></div>
        <div><Label className="text-xs">Room Width (ft)</Label><Input type="number" value={w} onChange={e => setW(e.target.value)} placeholder="10" /></div>
        <div><Label className="text-xs">Height (ft)</Label><Input type="number" value={h} onChange={e => setH(e.target.value)} placeholder="8" /><Hint text="1/2in thick for walls, 5/8in for ceilings" /></div>
      </div>
      {sheets > 0 && <ResultBox resultText={`Drywall: ${sheets} sheets (4×8), Walls: ${wallArea.toFixed(0)} + Ceiling: ${ceilingArea.toFixed(0)} sq ft`}><p className="text-xs text-muted-foreground">Drywall Sheets (4×8)</p><p className="text-2xl font-heading font-bold">{sheets} sheets</p><p className="text-xs text-muted-foreground">Walls: {wallArea.toFixed(0)} + Ceiling: {ceilingArea.toFixed(0)} sq ft</p></ResultBox>}
    </div>
  );
};

const InsulationCalc = () => {
  const [area, setArea] = useState(""); const [rVal, setRVal] = useState("R-19");
  const rValues: Record<string, { thickness: string; bags: number; use: string }> = {
    "R-13": { thickness: '3.5"', bags: 26, use: "Interior walls" },
    "R-19": { thickness: '6.25"', bags: 18, use: "Exterior walls (2×6)" },
    "R-30": { thickness: '9.5"', bags: 12, use: "Floors, ceilings" },
    "R-38": { thickness: '12"', bags: 9, use: "Attics (mild climate)" },
    "R-49": { thickness: '15.5"', bags: 7, use: "Attics (cold climate)" },
  };
  const sqft = area ? parseFloat(area) : 0;
  const info = rValues[rVal];
  const batts = sqft ? Math.ceil(sqft / (info?.bags || 18)) : 0;
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <div><Label className="text-xs">Area (sq ft)</Label><Input type="number" value={area} onChange={e => setArea(e.target.value)} placeholder="500" /></div>
        <div><Label className="text-xs">R-Value</Label><Select value={rVal} onValueChange={setRVal}><SelectTrigger><SelectValue /></SelectTrigger><SelectContent>{Object.keys(rValues).map(r => <SelectItem key={r} value={r}>{r} — {rValues[r].use}</SelectItem>)}</SelectContent></Select><Hint text={info ? `${rVal}: ${info.use}, ${info.thickness} thick` : ""} /></div>
      </div>
      {sqft > 0 && info && <ResultBox resultText={`Insulation: ${batts} bags/rolls, ${rVal}, Thickness: ${info.thickness}`}><p className="text-xs text-muted-foreground">Insulation Needed</p><p className="text-2xl font-heading font-bold">{batts} bags/rolls</p><p className="text-xs text-muted-foreground">{rVal} · Thickness: {info.thickness} · {info.use}</p></ResultBox>}
    </div>
  );
};

const FlooringCalc = () => {
  const [l, setL] = useState(""); const [w, setW] = useState(""); const [waste, setWaste] = useState("10");
  const area = l && w ? parseFloat(l) * parseFloat(w) : 0;
  const withWaste = area ? area * (1 + parseInt(waste) / 100) : 0;
  const boxes = withWaste ? Math.ceil(withWaste / 20) : 0;
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-3">
        <div><Label className="text-xs">Length (ft)</Label><Input type="number" value={l} onChange={e => setL(e.target.value)} placeholder="15" /></div>
        <div><Label className="text-xs">Width (ft)</Label><Input type="number" value={w} onChange={e => setW(e.target.value)} placeholder="12" /></div>
        <div><Label className="text-xs">Waste %</Label><Input type="number" value={waste} onChange={e => setWaste(e.target.value)} placeholder="10" /><Hint text="Simple layout: 5-7%, Complex/diagonal: 10-15%" /></div>
      </div>
      {withWaste > 0 && <ResultBox resultText={`Flooring: ${withWaste.toFixed(0)} sq ft, ~${boxes} boxes (20 sq ft/box) incl. ${waste}% waste`}><p className="text-xs text-muted-foreground mb-1">Flooring Needed</p><p className="text-2xl font-heading font-bold">{withWaste.toFixed(0)} sq ft</p><p className="text-xs text-muted-foreground mt-1">~{boxes} boxes (20 sq ft/box) incl. {waste}% waste</p></ResultBox>}
    </div>
  );
};

const TileCalc = () => {
  const [area, setArea] = useState(""); const [tileW, setTileW] = useState("12"); const [tileH, setTileH] = useState("12");
  const sqft = area ? parseFloat(area) : 0;
  const tileSqFt = tileW && tileH ? (parseFloat(tileW) * parseFloat(tileH)) / 144 : 0;
  const tiles = sqft && tileSqFt ? Math.ceil((sqft * 1.1) / tileSqFt) : 0;
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-3">
        <div><Label className="text-xs">Area (sq ft)</Label><Input type="number" value={area} onChange={e => setArea(e.target.value)} placeholder="100" /></div>
        <div><Label className="text-xs">Tile Width (in)</Label><Input type="number" value={tileW} onChange={e => setTileW(e.target.value)} placeholder="12" /><Hint text="Common: 12×12, 12×24, 6×6" /></div>
        <div><Label className="text-xs">Tile Height (in)</Label><Input type="number" value={tileH} onChange={e => setTileH(e.target.value)} placeholder="12" /></div>
      </div>
      {tiles > 0 && <ResultBox resultText={`Tiles: ${tiles} (includes 10% waste)`}><p className="text-xs text-muted-foreground mb-1">Tiles Needed</p><p className="text-2xl font-heading font-bold">{tiles} tiles</p><p className="text-xs text-muted-foreground mt-1">Includes 10% waste allowance</p></ResultBox>}
    </div>
  );
};

const CeilingHeightCalc = () => {
  const [floors, setFloors] = useState(""); const [floorH, setFloorH] = useState("9"); const [slabT, setSlabT] = useState("8");
  const totalH = floors && floorH && slabT ? (parseInt(floors) * parseFloat(floorH)) + ((parseInt(floors) - 1) * (parseFloat(slabT) / 12)) : 0;
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-3">
        <div><Label className="text-xs">Floors</Label><Input type="number" value={floors} onChange={e => setFloors(e.target.value)} placeholder="3" /><Hint text="Residential: 1-3, Commercial: 3-10+" /></div>
        <div><Label className="text-xs">Floor-to-Floor (ft)</Label><Input type="number" value={floorH} onChange={e => setFloorH(e.target.value)} placeholder="9" /><Hint text="Residential: 9ft, Commercial: 12-14ft" /></div>
        <div><Label className="text-xs">Slab Thickness (in)</Label><Input type="number" value={slabT} onChange={e => setSlabT(e.target.value)} placeholder="8" /></div>
      </div>
      {totalH > 0 && <ResultBox resultText={`Building Height: ${totalH.toFixed(1)} ft (${(totalH * 0.3048).toFixed(2)} m)`}><p className="text-xs text-muted-foreground mb-1">Total Building Height</p><p className="text-2xl font-heading font-bold">{totalH.toFixed(1)} ft</p><p className="text-xs text-muted-foreground mt-1">{(totalH * 0.3048).toFixed(2)} m</p></ResultBox>}
    </div>
  );
};

const ElectricalLoadCalc = () => {
  const [sqft, setSqft] = useState(""); const [appliances, setAppliances] = useState("5000");
  const generalLoad = sqft ? parseFloat(sqft) * 3 : 0;
  const totalWatts = generalLoad + (appliances ? parseFloat(appliances) : 0);
  const amps = totalWatts ? totalWatts / 240 : 0;
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <div><Label className="text-xs">Floor Area (sq ft)</Label><Input type="number" value={sqft} onChange={e => setSqft(e.target.value)} placeholder="2000" /><Hint text="3 watts per sq ft general lighting load" /></div>
        <div><Label className="text-xs">Appliance Load (W)</Label><Input type="number" value={appliances} onChange={e => setAppliances(e.target.value)} placeholder="5000" /><Hint text="Kitchen: ~3000W, Dryer: ~5000W, AC: ~3500W" /></div>
      </div>
      {amps > 0 && <ResultBox resultText={`Panel: ${Math.ceil(amps / 25) * 25}A, ${amps.toFixed(0)}A calculated, ${(totalWatts / 1000).toFixed(1)} kW total`}><p className="text-xs text-muted-foreground mb-1">Service Size Needed</p><p className="text-2xl font-heading font-bold">{Math.ceil(amps / 25) * 25}A Panel</p><p className="text-xs text-muted-foreground mt-1">Calculated: {amps.toFixed(0)}A · {(totalWatts / 1000).toFixed(1)} kW total</p></ResultBox>}
    </div>
  );
};

const PlumbingFixtureCalc = () => {
  const [toilets, setToilets] = useState(""); const [sinks, setSinks] = useState(""); const [showers, setShowers] = useState(""); const [dishwashers, setDishwashers] = useState("");
  const units = (toilets ? parseInt(toilets) * 4 : 0) + (sinks ? parseInt(sinks) * 2 : 0) + (showers ? parseInt(showers) * 3 : 0) + (dishwashers ? parseInt(dishwashers) * 2 : 0);
  const pipeSize = units <= 30 ? '2"' : units <= 100 ? '3"' : units <= 500 ? '4"' : '6"';
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <div><Label className="text-xs">Toilets</Label><Input type="number" value={toilets} onChange={e => setToilets(e.target.value)} placeholder="3" /><Hint text="4 DFU each" /></div>
        <div><Label className="text-xs">Sinks</Label><Input type="number" value={sinks} onChange={e => setSinks(e.target.value)} placeholder="4" /><Hint text="2 DFU each" /></div>
        <div><Label className="text-xs">Showers/Tubs</Label><Input type="number" value={showers} onChange={e => setShowers(e.target.value)} placeholder="2" /><Hint text="3 DFU each" /></div>
        <div><Label className="text-xs">Dishwashers</Label><Input type="number" value={dishwashers} onChange={e => setDishwashers(e.target.value)} placeholder="1" /><Hint text="2 DFU each" /></div>
      </div>
      {units > 0 && <ResultBox resultText={`Drainage: ${units} DFU, Min drain pipe: ${pipeSize}`}><p className="text-xs text-muted-foreground mb-1">Drainage Fixture Units</p><p className="text-2xl font-heading font-bold">{units} DFU</p><p className="text-xs text-muted-foreground mt-1">Min. drain pipe: {pipeSize}</p></ResultBox>}
    </div>
  );
};

const HVACTonnageCalc = () => {
  const [sqft, setSqft] = useState(""); const [climate, setClimate] = useState("moderate");
  const factors: Record<string, number> = { cold: 450, moderate: 500, hot: 400 };
  const climateInfo: Record<string, string> = {
    cold: "Cold (Below 40°F avg winter) — Northern US, MN, WI, ND, ME",
    moderate: "Moderate (40-65°F avg) — Mid-Atlantic, OH, PA, NC, CO",
    hot: "Hot/Humid (Above 75°F avg summer) — FL, TX, AZ, LA, NM",
  };
  const tons = sqft ? parseFloat(sqft) / factors[climate] : 0;
  const btu = tons * 12000;
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <div><Label className="text-xs">Floor Area (sq ft)</Label><Input type="number" value={sqft} onChange={e => setSqft(e.target.value)} placeholder="2000" /><Hint text="~400-500 sq ft per ton rule of thumb" /></div>
        <div>
          <Label className="text-xs">Climate Zone</Label>
          <Select value={climate} onValueChange={setClimate}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="cold">Cold</SelectItem>
              <SelectItem value="moderate">Moderate</SelectItem>
              <SelectItem value="hot">Hot/Humid</SelectItem>
            </SelectContent>
          </Select>
          <Hint text={climateInfo[climate]} />
        </div>
      </div>
      {tons > 0 && <ResultBox resultText={`HVAC: ${tons.toFixed(1)} Tons, ${btu.toLocaleString()} BTU/hr`}><p className="text-xs text-muted-foreground mb-1">HVAC Size Needed</p><p className="text-2xl font-heading font-bold">{tons.toFixed(1)} Tons</p><p className="text-xs text-muted-foreground mt-1">{btu.toLocaleString()} BTU/hr</p></ResultBox>}
    </div>
  );
};

const SlopeGradeCalc = () => {
  const [rise, setRise] = useState(""); const [run, setRun] = useState("");
  const grade = rise && run ? (parseFloat(rise) / parseFloat(run)) * 100 : 0;
  const ratio = rise && run ? `1:${(parseFloat(run) / parseFloat(rise)).toFixed(1)}` : "";
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <div><Label className="text-xs">Rise (ft)</Label><Input type="number" value={rise} onChange={e => setRise(e.target.value)} placeholder="1" /><Hint text="ADA ramp max: 1:12 (8.3%)" /></div>
        <div><Label className="text-xs">Run (ft)</Label><Input type="number" value={run} onChange={e => setRun(e.target.value)} placeholder="50" /><Hint text="Drainage min: 1-2% grade" /></div>
      </div>
      {grade > 0 && <ResultBox resultText={`Slope: ${grade.toFixed(2)}%, Ratio: ${ratio}, Angle: ${(Math.atan(grade / 100) * 180 / Math.PI).toFixed(2)}°`}><p className="text-xs text-muted-foreground mb-1">Slope Grade</p><p className="text-2xl font-heading font-bold">{grade.toFixed(2)}%</p><p className="text-xs text-muted-foreground mt-1">Ratio: {ratio} · Angle: {(Math.atan(grade / 100) * 180 / Math.PI).toFixed(2)}°</p></ResultBox>}
    </div>
  );
};

const WindowAreaCalc = () => {
  const [floorArea, setFloorArea] = useState(""); const [ratio, setRatio] = useState("15");
  const windowArea = floorArea && ratio ? parseFloat(floorArea) * (parseFloat(ratio) / 100) : 0;
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <div><Label className="text-xs">Floor Area (sq ft)</Label><Input type="number" value={floorArea} onChange={e => setFloorArea(e.target.value)} placeholder="2000" /></div>
        <div><Label className="text-xs">Window-to-Floor %</Label><Input type="number" value={ratio} onChange={e => setRatio(e.target.value)} placeholder="15" /><Hint text="IRC min: 8%, Typical: 15-20%, Luxury: 25%+" /></div>
      </div>
      {windowArea > 0 && <ResultBox resultText={`Window Area: ${windowArea.toFixed(0)} sq ft, IRC requires min 8%`}><p className="text-xs text-muted-foreground mb-1">Required Window Area</p><p className="text-2xl font-heading font-bold">{windowArea.toFixed(0)} sq ft</p><p className="text-xs text-muted-foreground mt-1">IRC requires min 8% for natural light</p></ResultBox>}
    </div>
  );
};

const MortgageCalc = () => {
  const [price, setPrice] = useState(""); const [down, setDown] = useState("20"); const [rate, setRate] = useState("6.5"); const [years, setYears] = useState("30");
  const loanAmt = price ? parseFloat(price) * (1 - parseFloat(down) / 100) : 0;
  const monthlyRate = rate ? parseFloat(rate) / 100 / 12 : 0;
  const n = years ? parseInt(years) * 12 : 0;
  const payment = loanAmt && monthlyRate && n ? (loanAmt * monthlyRate * Math.pow(1 + monthlyRate, n)) / (Math.pow(1 + monthlyRate, n) - 1) : 0;
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <div><Label className="text-xs">Home Price ($)</Label><Input type="number" value={price} onChange={e => setPrice(e.target.value)} placeholder="350000" /></div>
        <div><Label className="text-xs">Down Payment %</Label><Input type="number" value={down} onChange={e => setDown(e.target.value)} placeholder="20" /><Hint text="Min 3.5% (FHA), 20% avoids PMI" /></div>
        <div><Label className="text-xs">Interest Rate %</Label><Input type="number" value={rate} onChange={e => setRate(e.target.value)} placeholder="6.5" /><Hint text="2024 US avg: 6.5-7.5%" /></div>
        <div><Label className="text-xs">Term (years)</Label><Input type="number" value={years} onChange={e => setYears(e.target.value)} placeholder="30" /><Hint text="15yr saves interest, 30yr lower payment" /></div>
      </div>
      {payment > 0 && <ResultBox resultText={`Monthly: $${payment.toFixed(2)}, Loan: $${loanAmt.toLocaleString()}, Total: $${(payment * n).toLocaleString(undefined, { maximumFractionDigits: 0 })}`}><p className="text-xs text-muted-foreground mb-1">Monthly Payment</p><p className="text-2xl font-heading font-bold">${payment.toFixed(2)}</p><p className="text-xs text-muted-foreground mt-1">Loan: ${loanAmt.toLocaleString()} · Total: ${(payment * n).toLocaleString(undefined, { maximumFractionDigits: 0 })}</p></ResultBox>}
    </div>
  );
};

const FenceCalc = () => {
  const [perimeter, setPerimeter] = useState(""); const [postSpacing, setPostSpacing] = useState("8"); const [gates, setGates] = useState("1");
  const fenceLen = perimeter ? parseFloat(perimeter) - (gates ? parseInt(gates) * 4 : 0) : 0;
  const posts = fenceLen > 0 && postSpacing ? Math.ceil(fenceLen / parseFloat(postSpacing)) + 1 : 0;
  const panels = posts > 1 ? posts - 1 : 0;
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-3">
        <div><Label className="text-xs">Perimeter (ft)</Label><Input type="number" value={perimeter} onChange={e => setPerimeter(e.target.value)} placeholder="200" /></div>
        <div><Label className="text-xs">Post Spacing (ft)</Label><Input type="number" value={postSpacing} onChange={e => setPostSpacing(e.target.value)} placeholder="8" /><Hint text="Wood: 6-8ft, Vinyl: 6ft, Chain: 10ft" /></div>
        <div><Label className="text-xs">Gates</Label><Input type="number" value={gates} onChange={e => setGates(e.target.value)} placeholder="1" /></div>
      </div>
      {posts > 0 && <ResultBox resultText={`Fence: ${posts} posts, ${panels} panels, ${fenceLen.toFixed(0)} ft + ${gates} gate(s)`}><p className="text-xs text-muted-foreground mb-1">Fence Materials</p><p className="text-2xl font-heading font-bold">{posts} posts · {panels} panels</p><p className="text-xs text-muted-foreground mt-1">Fence length: {fenceLen.toFixed(0)} ft + {gates} gate(s)</p></ResultBox>}
    </div>
  );
};

const LandscapeMulchCalc = () => {
  const [l, setL] = useState(""); const [w, setW] = useState(""); const [depth, setDepth] = useState("3");
  const cubicYd = l && w && depth ? (parseFloat(l) * parseFloat(w) * (parseFloat(depth) / 12)) / 27 : 0;
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-3">
        <div><Label className="text-xs">Length (ft)</Label><Input type="number" value={l} onChange={e => setL(e.target.value)} placeholder="30" /></div>
        <div><Label className="text-xs">Width (ft)</Label><Input type="number" value={w} onChange={e => setW(e.target.value)} placeholder="10" /></div>
        <div><Label className="text-xs">Depth (in)</Label><Input type="number" value={depth} onChange={e => setDepth(e.target.value)} placeholder="3" /><Hint text="Mulch: 2-3in, Topsoil: 4-6in" /></div>
      </div>
      {cubicYd > 0 && <ResultBox resultText={`Mulch/Soil: ${cubicYd.toFixed(2)} cu yd, ~${Math.ceil(cubicYd * 13.5)} bags (2 cu ft each)`}><p className="text-xs text-muted-foreground mb-1">Mulch / Soil Needed</p><p className="text-2xl font-heading font-bold">{cubicYd.toFixed(2)} cubic yards</p><p className="text-xs text-muted-foreground mt-1">~{Math.ceil(cubicYd * 13.5)} bags (2 cu ft each)</p></ResultBox>}
    </div>
  );
};

const CostPerSqftCalc = () => {
  const [totalCost, setTotalCost] = useState(""); const [sqft, setSqft] = useState("");
  const costPerSqft = totalCost && sqft ? parseFloat(totalCost) / parseFloat(sqft) : 0;
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <div><Label className="text-xs">Total Cost ($)</Label><Input type="number" value={totalCost} onChange={e => setTotalCost(e.target.value)} placeholder="250000" /></div>
        <div><Label className="text-xs">Area (sq ft)</Label><Input type="number" value={sqft} onChange={e => setSqft(e.target.value)} placeholder="2000" /><Hint text="US avg new construction: $150-$250/sq ft" /></div>
      </div>
      {costPerSqft > 0 && <ResultBox resultText={`Cost: $${costPerSqft.toFixed(2)}/sq ft`}><p className="text-xs text-muted-foreground mb-1">Cost Per Square Foot</p><p className="text-2xl font-heading font-bold">${costPerSqft.toFixed(2)}/sq ft</p></ResultBox>}
    </div>
  );
};

// ─── Sorted by US usage (most popular first), with badges ───

const tools = [
  { id: "sqft", icon: Grid3X3, title: "Square Footage Calculator", desc: "Calculate area in sq ft and sq meters from length × width.", component: SquareFootageCalc, category: "General", keywords: "area calculator, square footage, room size", badge: "Most Popular" },
  { id: "concrete", icon: Box, title: "Concrete Calculator", desc: "Estimate cubic yards of concrete for slabs, footings, and walls.", component: ConcreteCalc, category: "Materials", keywords: "concrete volume, slab calculator, cubic yards", badge: "Most Popular" },
  { id: "mortgage", icon: TrendingUp, title: "Mortgage Calculator", desc: "Calculate monthly mortgage payments, total cost, and loan amounts.", component: MortgageCalc, category: "General", keywords: "mortgage calculator, home loan, monthly payment", badge: "Most Popular" },
  { id: "paint", icon: PaintBucket, title: "Paint Calculator", desc: "Estimate gallons of paint needed for rooms and walls.", component: PaintCalc, category: "Materials", keywords: "paint estimator, wall coverage, gallons needed", badge: "Popular" },
  { id: "unit", icon: ArrowRightLeft, title: "Unit Converter", desc: "Convert between feet, meters, inches, centimeters, and more.", component: UnitConverter, category: "General", keywords: "unit conversion, feet to meters, construction converter", badge: "Popular" },
  { id: "flooring", icon: Home, title: "Flooring Calculator", desc: "Calculate flooring material with waste allowance for any room.", component: FlooringCalc, category: "Materials", keywords: "flooring estimate, hardwood, laminate, vinyl plank", badge: "Popular" },
  { id: "tile", icon: Grid3X3, title: "Tile Calculator", desc: "Estimate number of tiles needed for floors or walls.", component: TileCalc, category: "Materials", keywords: "tile calculator, ceramic, porcelain, backsplash" },
  { id: "drywall", icon: FileText, title: "Drywall Calculator", desc: "Calculate 4×8 drywall sheets for walls and ceilings.", component: DryWallCalc, category: "Materials", keywords: "drywall sheets, sheetrock, gypsum board" },
  { id: "roof", icon: Triangle, title: "Roof Pitch Calculator", desc: "Find pitch ratio, angle, and slope multiplier for roofing.", component: RoofPitchCalc, category: "Design", keywords: "roof pitch, slope angle, roofing calculator" },
  { id: "stair", icon: FolderUp, title: "Stair Calculator", desc: "Calculate riser count, tread depth, and total run per IRC code.", component: StairCalc, category: "Design", keywords: "stair design, riser calculator, tread depth, IRC code" },
  { id: "hvac", icon: Thermometer, title: "HVAC Tonnage Calculator", desc: "Estimate AC/heating tonnage by floor area and climate zone.", component: HVACTonnageCalc, category: "MEP", keywords: "HVAC sizing, BTU calculator, air conditioning, tonnage" },
  { id: "electrical", icon: Zap, title: "Electrical Load Calculator", desc: "Estimate electrical service panel size for residential projects.", component: ElectricalLoadCalc, category: "MEP", keywords: "electrical load, panel size, amps, service entrance" },
  { id: "brick", icon: Blocks, title: "Brick Calculator", desc: "Calculate number of bricks and mortar for wall construction.", component: BrickCalc, category: "Materials", keywords: "brick estimator, masonry calculator, mortar" },
  { id: "fence", icon: Ruler, title: "Fence Calculator", desc: "Estimate posts, panels, and gates for fence projects.", component: FenceCalc, category: "Design", keywords: "fence calculator, posts, panels, yard fencing" },
  { id: "gravel", icon: Weight, title: "Gravel & Fill Calculator", desc: "Calculate cubic yards and tons of gravel, sand, or fill dirt.", component: GravelCalc, category: "Materials", keywords: "gravel calculator, fill dirt, landscaping materials" },
  { id: "mulch", icon: PaintBucket, title: "Mulch & Soil Calculator", desc: "Estimate cubic yards and bags for landscaping beds.", component: LandscapeMulchCalc, category: "Materials", keywords: "mulch calculator, soil, landscaping, garden bed" },
  { id: "costpersqft", icon: Percent, title: "Cost Per Sq Ft Calculator", desc: "Calculate construction or property cost per square foot.", component: CostPerSqftCalc, category: "General", keywords: "cost per square foot, construction cost, property value" },
  { id: "rebar", icon: Layers, title: "Rebar Calculator", desc: "Estimate linear feet and number of rebar bars for slabs.", component: RebarCalc, category: "Structural", keywords: "rebar estimator, reinforcement, steel bars" },
  { id: "deck", icon: Ruler, title: "Deck Board Calculator", desc: "Estimate number of deck boards needed by dimensions.", component: DeckBoardCalc, category: "Design", keywords: "deck builder, board calculator, outdoor decking" },
  { id: "insulation", icon: Calculator, title: "Insulation Calculator", desc: "Estimate insulation bags/rolls by area and R-value.", component: InsulationCalc, category: "Materials", keywords: "insulation R-value, fiberglass, energy efficiency" },
  { id: "ceiling", icon: BarChart3, title: "Building Height Calculator", desc: "Calculate total building height from floors and slab thickness.", component: CeilingHeightCalc, category: "Structural", keywords: "building height, floor to floor, multi-story" },
  { id: "plumbing", icon: Droplets, title: "Plumbing Fixture Calculator", desc: "Calculate drainage fixture units and minimum pipe sizes.", component: PlumbingFixtureCalc, category: "MEP", keywords: "plumbing DFU, drainage, pipe sizing, fixtures" },
  { id: "slope", icon: Scale, title: "Slope & Grade Calculator", desc: "Calculate site slope percentage, ratio, and angle for grading.", component: SlopeGradeCalc, category: "Design", keywords: "slope grade, site grading, drainage slope, ADA ramp" },
  { id: "window", icon: Maximize, title: "Window Area Calculator", desc: "Determine required window area for natural light per IRC code.", component: WindowAreaCalc, category: "Design", keywords: "window area, natural light, IRC code, daylighting" },
];

const categories = ["All", "General", "Design", "Materials", "Structural", "MEP"];

const Tools = () => {
  const [activeTool, setActiveTool] = useState<string | null>(null);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = tools.filter(t => {
    if (filter !== "All" && t.category !== filter) return false;
    if (search && !t.title.toLowerCase().includes(search.toLowerCase()) && !t.keywords.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <main>
      <Helmet>
        <title>Free Construction Calculators & AEC Tools | Drafinity LLC</title>
        <meta name="description" content="All free tools for basic use for industry ease. 24+ free construction calculators: concrete, mortgage, stair, roof pitch, HVAC, electrical load, plumbing, flooring, tile, rebar, paint, drywall, insulation, fence, mulch, cost per sq ft and more." />
        <meta name="keywords" content="free construction calculator, concrete calculator, mortgage calculator, stair calculator, roof pitch calculator, HVAC calculator, electrical load calculator, plumbing calculator, flooring calculator, tile calculator, rebar calculator, paint calculator, drywall calculator, building tools, AEC tools, building design tools, fence calculator, mulch calculator, cost per square foot" />
        <link rel="canonical" href="https://drafinity.lovable.app/tools" />
        <meta property="og:title" content="Free Construction Calculators & AEC Tools | Drafinity" />
        <meta property="og:description" content="All free tools for basic use for industry ease. 24+ professional-grade calculators for designers, engineers, contractors, and homeowners." />
        <meta property="og:type" content="website" />
      </Helmet>

      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 blueprint-grid relative overflow-hidden">
        <PageHeroAnimation page="software" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs font-heading uppercase tracking-[0.2em] text-muted-foreground mb-4 block">Free Online Tools</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-3xl lg:text-6xl font-heading font-bold mb-6 max-w-3xl">
            All Free Tools for<br /><span className="text-gradient-highlight">Basic Use for Industry Ease</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-base lg:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            {tools.length} free professional-grade calculators and tools for designers, engineers, contractors, and homeowners. No signup required — instantly calculate materials, costs, and design parameters for your next project.
          </motion.p>
        </div>
      </section>

      <section className="py-12 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <Input placeholder="Search tools..." value={search} onChange={(e) => setSearch(e.target.value)} className="max-w-xs text-sm" />
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <Button key={cat} variant={filter === cat ? "default" : "outline"} size="sm" onClick={() => setFilter(cat)} className="text-xs font-heading uppercase tracking-wider">
                  {cat}
                </Button>
              ))}
            </div>
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
                  transition={{ delay: i * 0.03 }}
                  className={`bg-card border rounded-lg p-5 lg:p-6 transition-all ${isActive ? "border-foreground shadow-lg" : "border-border card-hover"}`}
                >
                  <div className="flex items-start justify-between mb-4 gap-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-foreground" />
                      </div>
                      <div>
                        <h3 className="text-sm font-heading font-bold">{tool.title}</h3>
                        <span className="text-[10px] uppercase tracking-wider text-muted-foreground">{tool.category}</span>
                      </div>
                    </div>
                    {(tool as any).badge && (
                      <Badge variant={(tool as any).badge === "Most Popular" ? "default" : "secondary"} className="text-[9px] shrink-0">
                        {(tool as any).badge === "Most Popular" ? <Star className="w-2.5 h-2.5 mr-0.5" /> : <TrendingUp className="w-2.5 h-2.5 mr-0.5" />}
                        {(tool as any).badge}
                      </Badge>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground mb-4">{tool.desc}</p>
                  {isActive ? (
                    <div className="border-t border-border pt-4">
                      <tool.component />
                      <Button variant="ghost" size="sm" onClick={() => setActiveTool(null)} className="mt-4 w-full text-xs">Close Tool</Button>
                    </div>
                  ) : (
                    <Button variant="outline" size="sm" onClick={() => setActiveTool(tool.id)} className="w-full text-xs font-heading uppercase tracking-wider">Open Calculator</Button>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Improved bottom section with interactive construction animation */}
          <div className="mt-20 lg:mt-28">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative aspect-square max-w-md mx-auto lg:mx-0 rounded-2xl border border-border overflow-hidden bg-gradient-to-br from-muted/30 via-background to-muted/10"
              >
                <svg viewBox="0 0 400 400" className="w-full h-full relative z-10">
                  {/* Blueprint grid */}
                  {Array.from({ length: 21 }).map((_, i) => (
                    <line key={`g${i}`} x1={i * 20} y1="0" x2={i * 20} y2="400" stroke="currentColor" strokeWidth="0.2" opacity="0.06" />
                  ))}
                  {Array.from({ length: 21 }).map((_, i) => (
                    <line key={`gh${i}`} x1="0" y1={i * 20} x2="400" y2={i * 20} stroke="currentColor" strokeWidth="0.2" opacity="0.06" />
                  ))}

                  {/* Floor plan - main structure */}
                  <motion.rect x="60" y="80" width="280" height="220" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.35" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 2, ease: "easeInOut" }} />
                  
                  {/* Interior walls */}
                  <motion.line x1="200" y1="80" x2="200" y2="220" stroke="currentColor" strokeWidth="1" opacity="0.25" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ delay: 0.8, duration: 1 }} />
                  <motion.line x1="60" y1="220" x2="340" y2="220" stroke="currentColor" strokeWidth="1" opacity="0.25" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ delay: 1, duration: 1 }} />
                  <motion.line x1="260" y1="220" x2="260" y2="300" stroke="currentColor" strokeWidth="1" opacity="0.25" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ delay: 1.2, duration: 0.8 }} />
                  
                  {/* Door arcs */}
                  <motion.path d="M 200 220 A 20 20 0 0 0 180 200" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.2" strokeDasharray="2 2" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ delay: 1.5, duration: 0.6 }} />
                  <motion.path d="M 260 300 A 20 20 0 0 1 280 280" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.2" strokeDasharray="2 2" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ delay: 1.7, duration: 0.6 }} />

                  {/* Room labels */}
                  <motion.text x="130" y="155" textAnchor="middle" fill="currentColor" fontSize="8" opacity="0" fontFamily="monospace" initial={{ opacity: 0 }} whileInView={{ opacity: 0.2 }} viewport={{ once: true }} transition={{ delay: 2 }}>LIVING</motion.text>
                  <motion.text x="270" y="155" textAnchor="middle" fill="currentColor" fontSize="8" opacity="0" fontFamily="monospace" initial={{ opacity: 0 }} whileInView={{ opacity: 0.2 }} viewport={{ once: true }} transition={{ delay: 2.1 }}>KITCHEN</motion.text>
                  <motion.text x="150" y="265" textAnchor="middle" fill="currentColor" fontSize="8" opacity="0" fontFamily="monospace" initial={{ opacity: 0 }} whileInView={{ opacity: 0.2 }} viewport={{ once: true }} transition={{ delay: 2.2 }}>BEDROOM</motion.text>
                  <motion.text x="300" y="265" textAnchor="middle" fill="currentColor" fontSize="8" opacity="0" fontFamily="monospace" initial={{ opacity: 0 }} whileInView={{ opacity: 0.2 }} viewport={{ once: true }} transition={{ delay: 2.3 }}>BATH</motion.text>

                  {/* Dimension lines */}
                  <motion.line x1="60" y1="325" x2="340" y2="325" stroke="currentColor" strokeWidth="0.6" opacity="0.25" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ delay: 1.8, duration: 0.8 }} />
                  <motion.line x1="60" y1="320" x2="60" y2="330" stroke="currentColor" strokeWidth="0.6" opacity="0.25" initial={{ opacity: 0 }} whileInView={{ opacity: 0.25 }} viewport={{ once: true }} transition={{ delay: 2.2 }} />
                  <motion.line x1="340" y1="320" x2="340" y2="330" stroke="currentColor" strokeWidth="0.6" opacity="0.25" initial={{ opacity: 0 }} whileInView={{ opacity: 0.25 }} viewport={{ once: true }} transition={{ delay: 2.2 }} />
                  <motion.text x="200" y="340" textAnchor="middle" fill="currentColor" fontSize="9" opacity="0" fontFamily="monospace" initial={{ opacity: 0 }} whileInView={{ opacity: 0.3 }} viewport={{ once: true }} transition={{ delay: 2.5 }}>28'-0"</motion.text>

                  {/* Side dimension */}
                  <motion.line x1="375" y1="80" x2="375" y2="300" stroke="currentColor" strokeWidth="0.6" opacity="0.25" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ delay: 2, duration: 0.8 }} />
                  <motion.line x1="370" y1="80" x2="380" y2="80" stroke="currentColor" strokeWidth="0.6" opacity="0.25" initial={{ opacity: 0 }} whileInView={{ opacity: 0.25 }} viewport={{ once: true }} transition={{ delay: 2.4 }} />
                  <motion.line x1="370" y1="300" x2="380" y2="300" stroke="currentColor" strokeWidth="0.6" opacity="0.25" initial={{ opacity: 0 }} whileInView={{ opacity: 0.25 }} viewport={{ once: true }} transition={{ delay: 2.4 }} />
                  <motion.text x="385" y="195" textAnchor="start" fill="currentColor" fontSize="9" opacity="0" fontFamily="monospace" transform="rotate(90, 385, 195)" initial={{ opacity: 0 }} whileInView={{ opacity: 0.3 }} viewport={{ once: true }} transition={{ delay: 2.6 }}>22'-0"</motion.text>

                  {/* Animated measurement cursor */}
                  <motion.circle cx="60" cy="325" r="3" fill="currentColor" opacity="0.4" initial={{ cx: 60 }} animate={{ cx: [60, 340, 60] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
                </svg>

                <div className="absolute bottom-5 left-5 right-5">
                  <div className="bg-background/80 backdrop-blur-sm border border-border rounded-lg p-3 text-center">
                    <Ruler className="w-6 h-6 text-foreground/40 mx-auto mb-1" />
                    <p className="text-[10px] font-heading uppercase tracking-widest text-muted-foreground">{tools.length}+ Free Industry Calculators</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl lg:text-3xl font-heading font-bold mb-6">Professional Construction Calculators — Built for the Industry</h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  Drafinity's free construction calculators help designers, engineers, contractors, and homeowners estimate materials, plan designs, and ensure code compliance. From concrete volume and stair dimensions to HVAC tonnage and electrical load sizing — all calculations follow industry standards including IRC, IECC, and NEC codes.
                </p>
                <h3 className="text-lg font-heading font-semibold mb-3">Why Use Our Free Tools?</h3>
                <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                  {[
                    "Instant results — no signup or download required",
                    "Based on industry-standard formulas and building codes",
                    "Contextual hints with recommended ranges and code references",
                    "Covers structural, MEP, materials, and design calculations",
                    "Mobile-friendly for use on job sites",
                    "Email results directly from any calculator",
                    "Sorted by popularity in the US construction industry",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Sparkles className="w-4 h-4 text-foreground shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Whether you're estimating concrete for a foundation, calculating HVAC tonnage for a commercial building, or figuring out mortgage payments — our tools give you instant, accurate answers based on US building codes and industry best practices.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
};

export default Tools;
