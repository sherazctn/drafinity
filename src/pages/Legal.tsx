import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, FileText, AlertTriangle, CheckCircle, Building2, Shield } from "lucide-react";
import CTASection from "@/components/CTASection";
import PageHeroAnimation from "@/components/PageHeroAnimation";

interface StatePermitInfo {
  name: string;
  abbr: string;
  overview: string;
  authority: string;
  permitTypes: string[];
  residentialRequirements: string[];
  commercialRequirements: string[];
  documents: string[];
  fees: string;
  timeline: string;
  inspections: string[];
  codes: string[];
  specialNotes: string[];
}

const statePermitData: StatePermitInfo[] = [
  {
    name: "Alabama", abbr: "AL",
    overview: "Alabama requires building permits for most construction, renovation, and demolition projects. Requirements vary by county and municipality.",
    authority: "Alabama Building Commission (ABC)",
    permitTypes: ["Building Permit", "Electrical Permit", "Plumbing Permit", "Mechanical Permit", "Demolition Permit", "Grading Permit"],
    residentialRequirements: ["Completed permit application", "Two sets of construction plans (drawn to scale)", "Site/plot plan showing setbacks and lot lines", "Engineering calculations for structural elements", "Energy compliance documentation (IECC)", "Proof of property ownership or authorization", "Contractor license information", "Septic system permit (if applicable)", "Flood zone determination"],
    commercialRequirements: ["Stamped architectural plans by licensed architect", "Stamped structural engineering plans", "MEP (Mechanical, Electrical, Plumbing) plans", "Fire protection and life safety plans", "ADA compliance documentation", "Environmental impact assessment (if required)", "Zoning compliance verification", "Parking and traffic study (if applicable)", "Stormwater management plan"],
    documents: ["Permit application form", "Construction drawings (2 sets minimum)", "Site plan with survey", "Structural calculations", "Energy code compliance forms", "Contractor license copy", "Insurance certificates", "HOA approval (if applicable)"],
    fees: "Residential: $50–$500 based on project value. Commercial: $200–$5,000+ based on square footage and project scope.",
    timeline: "Residential: 1–4 weeks. Commercial: 4–12 weeks depending on complexity.",
    inspections: ["Foundation inspection", "Framing inspection", "Electrical rough-in", "Plumbing rough-in", "Mechanical rough-in", "Insulation inspection", "Final inspection", "Certificate of Occupancy"],
    codes: ["International Building Code (IBC) 2021", "International Residential Code (IRC) 2021", "National Electrical Code (NEC) 2020", "International Plumbing Code (IPC) 2021", "International Mechanical Code (IMC) 2021", "International Energy Conservation Code (IECC) 2021"],
    specialNotes: ["Wind design requirements for coastal areas", "Seismic design category considerations", "Flood zone regulations in coastal and river areas", "Some rural areas may not require permits for smaller structures"]
  },
  {
    name: "Alaska", abbr: "AK",
    overview: "Alaska has varying permit requirements depending on the municipality. Some remote areas may have limited or no permit requirements.",
    authority: "Department of Labor and Workforce Development — Mechanical Inspection Section",
    permitTypes: ["Building Permit", "Electrical Permit", "Plumbing Permit", "Mechanical Permit", "Fire Marshal Permit"],
    residentialRequirements: ["Building permit application", "Two sets of construction plans", "Site plan with setback dimensions", "Structural analysis for snow and wind loads", "Energy efficiency documentation", "Foundation design for permafrost conditions", "Proof of land ownership"],
    commercialRequirements: ["Licensed architect-stamped plans", "Structural engineer-stamped calculations", "MEP drawings and specifications", "Fire marshal review and approval", "ADA compliance plans", "Energy code compliance (ASHRAE 90.1)", "Environmental review documents"],
    documents: ["Permit application", "Construction plans", "Site plan", "Structural calculations (snow load critical)", "Energy compliance documentation", "Fire marshal approval (commercial)"],
    fees: "Varies by municipality. Anchorage: $50–$3,000+ based on project valuation.",
    timeline: "Residential: 2–6 weeks. Commercial: 6–16 weeks.",
    inspections: ["Foundation/footing inspection", "Framing and structural inspection", "Electrical rough-in", "Plumbing rough-in", "Mechanical inspection", "Insulation and vapor barrier", "Final inspection"],
    codes: ["International Building Code (IBC) 2018", "International Residential Code (IRC) 2018", "National Electrical Code (NEC) 2017", "Uniform Plumbing Code (UPC) 2018", "International Mechanical Code (IMC) 2018", "Alaska-specific energy code requirements"],
    specialNotes: ["Extreme snow load requirements (up to 300 psf in some areas)", "Permafrost foundation requirements", "Seismic Zone 4 in many areas — seismic design critical", "Some boroughs have no building code enforcement", "Arctic construction methods may be required"]
  },
  {
    name: "Arizona", abbr: "AZ",
    overview: "Arizona requires building permits for construction, alterations, and repairs across most jurisdictions. Requirements are enforced at the city or county level.",
    authority: "Arizona Office of the Registrar of Contractors / Local Building Departments",
    permitTypes: ["Building Permit", "Electrical Permit", "Plumbing Permit", "Mechanical Permit", "Grading Permit", "Pool Permit", "Solar Permit"],
    residentialRequirements: ["Completed permit application", "Construction plans (2 sets)", "Site/plot plan", "Structural calculations (for engineered systems)", "Energy code compliance (IECC)", "Contractor license (ROC number)", "HOA approval letter (if applicable)", "Property owner authorization"],
    commercialRequirements: ["Architect-stamped construction documents", "Structural engineer-stamped plans", "MEP plans and specifications", "Fire sprinkler/suppression plans", "ADA compliance documentation", "Landscape and irrigation plans", "Traffic impact study (if required)", "ADEQ environmental clearance"],
    documents: ["Building permit application", "Two sets of scaled plans", "Plot plan with legal description", "Structural calculations", "Energy compliance worksheets", "ROC contractor license", "Insurance certificates"],
    fees: "Residential: $75–$800. Commercial: $500–$10,000+ depending on valuation.",
    timeline: "Residential: 1–3 weeks. Commercial: 3–8 weeks.",
    inspections: ["Pre-slab/foundation", "Framing/structural", "Electrical rough-in", "Plumbing rough-in", "Mechanical rough-in", "Stucco/lath (if applicable)", "Final building inspection", "Pool barrier inspection (if applicable)"],
    codes: ["International Building Code (IBC) 2018", "International Residential Code (IRC) 2018", "National Electrical Code (NEC) 2017", "International Plumbing Code (IPC) 2018", "International Mechanical Code (IMC) 2018", "IECC 2018"],
    specialNotes: ["Extreme heat design considerations", "Monsoon and flood zone requirements in certain areas", "Expansive soil foundation requirements", "Pool barrier and safety requirements (strict in AZ)", "Solar-ready construction requirements in some jurisdictions"]
  },
  {
    name: "California", abbr: "CA",
    overview: "California has some of the most stringent building permit requirements in the nation, governed by the California Building Standards Code (Title 24).",
    authority: "California Building Standards Commission / Local Building Departments",
    permitTypes: ["Building Permit", "Electrical Permit", "Plumbing Permit", "Mechanical Permit", "Grading Permit", "Demolition Permit", "Solar/PV Permit", "ADU Permit", "Fire Permit"],
    residentialRequirements: ["Completed permit application", "3 sets of construction plans", "Title 24 Energy Compliance (CF-1R forms)", "CalGreen compliance documentation", "Structural calculations (seismic & wind)", "Soils/geotechnical report", "Plot plan with topography", "School district fee receipt", "Water/sewer availability letter", "Fire department clearance (WUI zones)"],
    commercialRequirements: ["Architect-stamped plans (required for all commercial)", "Structural engineer-stamped plans and calculations", "Complete MEP plans", "Title 24 Energy Compliance (commercial forms)", "CalGreen mandatory measures", "Disabled access compliance (CBC Chapter 11B)", "Fire and life safety plans", "Environmental review (CEQA)", "Soils report and geotechnical investigation", "Stormwater pollution prevention plan", "Traffic and parking study"],
    documents: ["Building permit application", "3 sets of plans minimum", "Title 24 energy forms", "CalGreen checklist", "Structural calculations", "Geotechnical report", "WELO compliance (landscaping)", "School fee receipt", "Utility clearances"],
    fees: "Residential: $200–$5,000. Commercial: $2,000–$50,000+ (valuation-based + plan check fees).",
    timeline: "Residential: 2–8 weeks. Commercial: 8–24+ weeks.",
    inspections: ["Grading/excavation", "Foundation/footing", "Slab pre-pour", "Framing (structural)", "Shear wall nailing", "Electrical rough-in", "Plumbing rough-in", "Mechanical rough-in", "Insulation/energy", "Drywall (fire-rated assemblies)", "Final inspection", "Final fire department inspection"],
    codes: ["California Building Code (CBC) 2022", "California Residential Code (CRC) 2022", "California Electrical Code (CEC) 2022", "California Plumbing Code (CPC) 2022", "California Mechanical Code (CMC) 2022", "California Energy Code (Title 24 Part 6) 2022", "CalGreen (Title 24 Part 11)", "California Fire Code 2022"],
    specialNotes: ["Seismic design requirements are among the strictest nationally", "Title 24 energy standards exceed federal requirements", "Solar PV required on new residential construction (2020+)", "ADU (Accessory Dwelling Unit) streamlined permitting", "Wildland-Urban Interface (WUI) fire requirements", "Coastal Commission requirements for coastal properties", "CEQA environmental review for larger projects", "Local jurisdictions may impose additional requirements"]
  },
  {
    name: "Colorado", abbr: "CO",
    overview: "Colorado requires building permits for most construction projects. Requirements are administered at the county and municipality level.",
    authority: "Colorado Division of Fire Prevention & Control / Local Building Departments",
    permitTypes: ["Building Permit", "Electrical Permit", "Plumbing Permit", "Mechanical Permit", "Grading/Excavation Permit", "Demolition Permit"],
    residentialRequirements: ["Permit application form", "2 sets of construction plans", "Site plan with setbacks", "Structural calculations (snow/wind loads)", "Energy code compliance (IECC)", "Soils report (when required)", "Radon mitigation plan", "Proof of water/sewer availability"],
    commercialRequirements: ["Architect-stamped plans", "Structural engineer-stamped documents", "MEP plans and specs", "Fire protection plans", "ADA/accessibility compliance", "Energy code compliance (IECC Commercial)", "Stormwater management plan"],
    documents: ["Application form", "Construction drawings", "Site plan", "Structural calculations", "Energy compliance forms", "Soils report", "Contractor license"],
    fees: "Residential: $100–$1,500. Commercial: $500–$15,000+ based on scope.",
    timeline: "Residential: 1–4 weeks. Commercial: 4–12 weeks.",
    inspections: ["Foundation", "Framing", "Electrical rough", "Plumbing rough", "Mechanical rough", "Insulation", "Final inspection"],
    codes: ["International Building Code (IBC) 2021", "International Residential Code (IRC) 2021", "National Electrical Code (NEC) 2020", "International Plumbing Code (IPC) 2021", "IECC 2021"],
    specialNotes: ["High altitude design considerations for HVAC", "Heavy snow load requirements in mountain areas", "Wildfire mitigation zones (WUI areas)", "Radon-resistant construction required statewide", "Some unincorporated areas have limited code enforcement"]
  },
  {
    name: "Connecticut", abbr: "CT",
    overview: "Connecticut enforces the State Building Code uniformly across all municipalities. Building permits are required for most construction activities.",
    authority: "Connecticut Department of Administrative Services — Office of the State Building Inspector",
    permitTypes: ["Building Permit", "Electrical Permit", "Plumbing Permit", "Mechanical Permit", "Demolition Permit", "Certificate of Occupancy"],
    residentialRequirements: ["Permit application", "2 sets of construction drawings", "Plot plan/site survey", "Structural details and calculations", "Energy code compliance", "Septic approval (if applicable)", "Wetlands approval (if applicable)"],
    commercialRequirements: ["Architect-stamped drawings", "PE-stamped structural plans", "MEP drawings", "Fire protection plans", "ADA compliance", "Environmental site assessment", "Zoning approval"],
    documents: ["Application form", "Plans and specifications", "Plot plan", "Structural calcs", "Energy forms", "Contractor registration"],
    fees: "Residential: $50–$500. Commercial: $200–$5,000+.",
    timeline: "Residential: 1–3 weeks. Commercial: 3–10 weeks.",
    inspections: ["Footing", "Foundation", "Framing", "Insulation", "Rough electrical/plumbing/mechanical", "Final inspection"],
    codes: ["Connecticut State Building Code (2022)", "Based on IBC/IRC 2021 with amendments", "NEC 2020", "Connecticut amendments to energy code"],
    specialNotes: ["Uniform statewide code — no local amendments allowed", "Coastal area flood regulations (FEMA zones)", "Historic district restrictions may apply", "Wetlands permits often required in addition to building permits"]
  },
  {
    name: "Florida", abbr: "FL",
    overview: "Florida has the Florida Building Code (FBC), one of the most comprehensive state codes in the US, with special emphasis on hurricane/wind resistance.",
    authority: "Florida Building Commission / Local Building Departments",
    permitTypes: ["Building Permit", "Electrical Permit", "Plumbing Permit", "Mechanical Permit", "Roofing Permit", "Pool Permit", "Impact/Hurricane Permit", "Demolition Permit"],
    residentialRequirements: ["Permit application", "2 sets of sealed plans (by FL-licensed design professional for homes >5,000 sq ft or 2+ stories)", "Site plan with setbacks and flood zone", "Wind load calculations (Form 1802)", "Energy calculations", "Product approvals for impact-rated products", "FBC compliance forms", "Termite prevention plan", "Notice of Commencement"],
    commercialRequirements: ["Florida-licensed architect-sealed plans", "PE-sealed structural engineering plans", "Complete MEP documents", "Fire protection plans", "Threshold inspection agreement (for threshold buildings)", "ADA compliance", "Environmental permits (DEP)", "Stormwater management plan", "Parking lot and drainage plans"],
    documents: ["Permit application", "Sealed plans", "Site plan/survey", "Wind load calculations", "Energy calculations", "Product approvals/NOA numbers", "Notice of Commencement", "Contractor license", "Insurance certificates"],
    fees: "Residential: $100–$2,000. Commercial: $500–$25,000+ based on project valuation.",
    timeline: "Residential: 2–6 weeks. Commercial: 6–16 weeks.",
    inspections: ["Slab/foundation", "Tie beam/lintel", "Framing", "Sheathing (roof and wall)", "Roofing (dry-in)", "Electrical rough-in", "Plumbing rough-in", "Mechanical rough-in", "Insulation", "Drywall (fire-rated)", "Final building", "Final electrical", "Final plumbing", "Final mechanical"],
    codes: ["Florida Building Code 7th Edition (2023)", "Florida Residential Code", "Florida Existing Building Code", "Florida Fuel Gas Code", "Florida Mechanical Code", "Florida Plumbing Code", "Florida Energy Conservation Code"],
    specialNotes: ["Hurricane/wind load design is critical (up to 195 mph in some areas)", "High-Velocity Hurricane Zone (HVHZ) codes for Miami-Dade and Broward", "Flood zone compliance (many areas below sea level)", "Threshold building requirements for buildings >3 stories or >50 ft", "Mandatory product approvals (Florida Product Approval or Miami-Dade NOA)", "Termite protection required statewide", "40-year building recertification (Broward/Miami-Dade)"]
  },
  {
    name: "Georgia", abbr: "GA",
    overview: "Georgia requires building permits for most construction projects. Requirements are enforced at the county/city level with state minimum standards.",
    authority: "Georgia Department of Community Affairs (DCA)",
    permitTypes: ["Building Permit", "Electrical Permit", "Plumbing Permit", "Mechanical Permit", "Grading Permit", "Demolition Permit", "Land Disturbance Permit"],
    residentialRequirements: ["Permit application", "2 sets of construction plans", "Site plan", "Structural details", "Energy code compliance (IECC)", "Soil erosion and sedimentation control plan", "Septic permit (if applicable)", "Well permit (if applicable)"],
    commercialRequirements: ["Architect-stamped plans", "PE-stamped structural documents", "MEP plans", "Fire protection plans", "ADA compliance", "Environmental review", "Land disturbance permit (>1 acre)", "Stormwater management plan"],
    documents: ["Application", "Construction plans", "Site plan", "Energy forms", "Erosion control plan", "Contractor license"],
    fees: "Residential: $50–$800. Commercial: $200–$10,000+.",
    timeline: "Residential: 1–4 weeks. Commercial: 4–12 weeks.",
    inspections: ["Foundation", "Framing", "Electrical/Plumbing/Mechanical rough-in", "Insulation", "Final"],
    codes: ["Georgia State Minimum Standard Codes", "IBC 2018 with GA amendments", "IRC 2018 with GA amendments", "NEC 2017", "IECC 2015 with GA amendments"],
    specialNotes: ["Land disturbance permits required for projects >1 acre", "EPD (Environmental Protection Division) permits for water/sewer", "Coastal Marshlands Protection Act for coastal properties", "Some counties are exempt from state minimum codes"]
  },
  {
    name: "Illinois", abbr: "IL",
    overview: "Illinois building permits are primarily administered at the local level with no mandatory statewide building code for most of the state, except Chicago which has its own Chicago Building Code.",
    authority: "Capital Development Board (state buildings only) / Local Building Departments",
    permitTypes: ["Building Permit", "Electrical Permit", "Plumbing Permit", "Mechanical Permit", "Demolition Permit", "Elevator Permit"],
    residentialRequirements: ["Permit application", "2 sets of construction plans", "Site/plot plan", "Structural details", "Energy code compliance", "Plumbing permit from IL Dept. of Public Health (outside municipalities)", "Well/septic permits (rural areas)"],
    commercialRequirements: ["Architect-sealed plans", "PE-sealed structural documents", "MEP plans and specs", "Fire protection plans", "ADA/accessibility compliance", "Environmental clearances", "Zoning verification"],
    documents: ["Application form", "Construction drawings", "Site plan", "Structural calculations", "Energy forms", "Plumbing license", "Contractor insurance"],
    fees: "Varies widely by jurisdiction. Chicago: $250–$25,000+. Suburbs: $100–$5,000.",
    timeline: "Residential: 1–4 weeks (suburbs), 4–8 weeks (Chicago). Commercial: 4–20 weeks.",
    inspections: ["Foundation", "Framing", "Rough-in inspections", "Insulation", "Final inspection"],
    codes: ["No mandatory statewide residential code", "Local jurisdictions adopt their own codes (usually IBC/IRC)", "Chicago Building Code (for Chicago)", "Illinois Plumbing Code", "Illinois Accessibility Code", "IECC (where adopted locally)"],
    specialNotes: ["No statewide building code for residential — varies by jurisdiction", "Chicago has its own unique building code (not IBC-based)", "Illinois Accessibility Code applies statewide for commercial", "Radon-resistant construction recommended", "Some rural areas have no building code enforcement"]
  },
  {
    name: "New Mexico", abbr: "NM",
    overview: "New Mexico enforces the New Mexico Building Code statewide. Permits are required for most construction, renovation, and alteration projects.",
    authority: "New Mexico Construction Industries Division (CID) / Local Building Departments",
    permitTypes: ["Building Permit", "Electrical Permit", "Plumbing Permit", "Mechanical Permit", "LP Gas Permit", "Manufactured Housing Permit"],
    residentialRequirements: ["CID permit application or local jurisdiction application", "2 sets of construction plans", "Site plan with setbacks and utilities", "Structural calculations (seismic & wind)", "Energy code compliance (IECC)", "Septic system permit (NMED — if applicable)", "Water availability letter", "Contractor license (GB-2 or GB-98)"],
    commercialRequirements: ["Architect-stamped construction documents", "PE-stamped structural plans", "Complete MEP plans", "Fire protection and sprinkler plans", "ADA/accessibility compliance", "Environmental assessment", "Zoning approval", "Stormwater management plan"],
    documents: ["CID permit application", "Construction plans (2 sets)", "Site plan", "Structural calculations", "Energy code forms", "Contractor license (NM CID)", "Insurance certificates", "Water/sewer availability"],
    fees: "Residential: $50–$600. Commercial: $200–$8,000+.",
    timeline: "Residential: 1–3 weeks. Commercial: 3–10 weeks.",
    inspections: ["Foundation/footing", "Framing/structural", "Electrical rough-in", "Plumbing rough-in", "Mechanical rough-in", "Insulation/energy", "Final inspection", "Certificate of Occupancy"],
    codes: ["New Mexico Building Code (NMBC)", "Based on IBC 2021 with NM amendments", "IRC 2021 with NM amendments", "NEC 2020", "IECC 2021 with NM amendments", "NM Earthen Building Code (for adobe construction)"],
    specialNotes: ["Seismic design considerations (moderate seismic zone)", "Adobe and earthen construction has specific code provisions", "High desert climate considerations for HVAC design", "CID has jurisdiction in areas without local building departments", "Water rights and availability can impact permit approval", "Wildfire risk areas require defensible space compliance"]
  },
  {
    name: "New York", abbr: "NY",
    overview: "New York has a Uniform Code and Energy Conservation Construction Code enforced statewide. NYC has its own comprehensive NYC Building Code.",
    authority: "NYS Department of State — Division of Building Standards and Codes / NYC Department of Buildings",
    permitTypes: ["Building Permit", "Electrical Permit", "Plumbing Permit", "Mechanical Permit", "Demolition Permit", "Alteration Permit", "New Building Permit", "Certificate of Occupancy"],
    residentialRequirements: ["Permit application (local jurisdiction or NYC DOB)", "3 sets of construction plans", "Site plan/survey", "Structural calculations", "Energy code compliance (NYS Energy Code)", "Zoning compliance", "Septic/well permits (upstate — county health dept)", "Lead paint compliance (renovations in pre-1978 buildings)"],
    commercialRequirements: ["NY-licensed architect or PE-stamped plans", "Structural engineering plans and calculations", "MEP plans and specifications", "Fire protection and life safety plans", "ADA/accessibility compliance", "Environmental review (SEQRA)", "Zoning analysis", "Special inspections schedule", "Asbestos survey (for renovations/demolitions)"],
    documents: ["Permit application", "Construction plans (3 sets)", "Survey/site plan", "Structural calculations", "Energy compliance forms", "Professional certification statements", "Insurance certificates", "Special inspection program"],
    fees: "Upstate: $100–$3,000. NYC: $250–$50,000+ (based on project type and cost).",
    timeline: "Upstate: 2–6 weeks. NYC: 4–24+ weeks (professional certification can expedite).",
    inspections: ["Foundation", "Concrete/structural", "Framing", "Progress inspections", "Electrical rough-in", "Plumbing rough-in", "Mechanical", "Fire suppression", "Energy/insulation", "Final inspection", "Special inspections (as required)"],
    codes: ["NYS Uniform Fire Prevention and Building Code", "NYS Energy Conservation Construction Code", "NYC Building Code (for NYC)", "NYC Mechanical Code", "NYC Plumbing Code", "NYC Fuel Gas Code", "NEC with NY amendments"],
    specialNotes: ["NYC has its own building code separate from NYS Uniform Code", "NYC DOB professional certification speeds up approvals", "Special inspections required for structural steel, concrete, etc.", "Asbestos survey mandatory for pre-1978 buildings in NYC", "Landmark/historic district approvals may be required", "NYC has unique zoning (FAR, sky exposure plane, etc.)", "Statewide energy code exceeds IECC requirements"]
  },
  {
    name: "North Carolina", abbr: "NC",
    overview: "North Carolina enforces the NC State Building Code statewide. Permits are required for most construction activities.",
    authority: "NC Department of Insurance — Engineering Division / Local Building Departments",
    permitTypes: ["Building Permit", "Electrical Permit", "Plumbing Permit", "Mechanical Permit", "Fire Permit", "Demolition Permit"],
    residentialRequirements: ["Permit application", "2 sets of plans", "Site plan with setbacks", "Structural calculations", "Energy code compliance (NC Energy Code)", "Well/septic permits (county health dept)", "Lien agent appointment"],
    commercialRequirements: ["Architect-sealed plans", "PE-sealed structural documents", "MEP plans", "Fire protection plans", "ADA compliance", "Environmental review", "Erosion control plan"],
    documents: ["Application", "Plans and specifications", "Site plan", "Calculations", "Energy forms", "Lien agent form", "Contractor license"],
    fees: "Residential: $75–$1,000. Commercial: $300–$12,000+.",
    timeline: "Residential: 1–4 weeks. Commercial: 4–12 weeks.",
    inspections: ["Foundation", "Framing", "Rough-in inspections", "Insulation", "Final"],
    codes: ["NC State Building Code", "Based on IBC 2018 with NC amendments", "IRC 2018 with NC amendments", "NEC 2020 with NC amendments", "NC Energy Conservation Code"],
    specialNotes: ["Hurricane/wind load requirements for coastal counties", "Flood zone compliance for eastern NC", "Lien agent required before permit issuance", "NC-specific energy code requirements"]
  },
  {
    name: "Ohio", abbr: "OH",
    overview: "Ohio has a statewide building code (Ohio Building Code) for commercial construction. Residential permits are handled at the local level.",
    authority: "Ohio Board of Building Standards / Local Building Departments",
    permitTypes: ["Building Permit", "Electrical Permit", "Plumbing Permit", "HVAC Permit", "Demolition Permit"],
    residentialRequirements: ["Permit application (local jurisdiction)", "2 sets of plans", "Site plan", "Structural details", "Energy code compliance", "Well/septic permits (county health dept)", "Zoning compliance"],
    commercialRequirements: ["Ohio-certified plans examiner review", "Architect-sealed plans", "PE-sealed structural plans", "MEP drawings", "Fire protection plans", "ADA compliance", "Ohio Industrial Compliance certification"],
    documents: ["Application", "Construction drawings", "Site plan", "Calculations", "Energy forms", "Contractor registration"],
    fees: "Residential: $50–$500. Commercial: $200–$8,000+.",
    timeline: "Residential: 1–3 weeks. Commercial: 4–12 weeks.",
    inspections: ["Foundation", "Framing", "Rough inspections", "Insulation", "Final"],
    codes: ["Ohio Building Code (commercial)", "Ohio Residential Code", "Ohio Mechanical Code", "Ohio Plumbing Code", "NEC with Ohio amendments", "IECC with Ohio amendments"],
    specialNotes: ["Residential construction code is locally adopted", "Ohio Board of Building Standards oversees commercial permits", "Certified plans examiners handle commercial plan review", "Some townships exempt from residential permitting"]
  },
  {
    name: "Pennsylvania", abbr: "PA",
    overview: "Pennsylvania enforces the Uniform Construction Code (UCC) statewide. All municipalities must administer building permits under the UCC.",
    authority: "Pennsylvania Department of Labor & Industry / Local Code Officials",
    permitTypes: ["Building Permit", "Electrical Permit", "Plumbing Permit", "Mechanical Permit", "Demolition Permit", "Use & Occupancy Permit"],
    residentialRequirements: ["UCC permit application", "2 sets of plans", "Site plan", "Structural details for engineered components", "Energy code compliance (IECC)", "Sewage system permit (on-lot systems)", "Zoning approval"],
    commercialRequirements: ["Architect-sealed plans", "PE-sealed structural plans", "MEP documents", "Fire protection plans", "ADA compliance", "Accessibility compliance (PA UCC Chapter 11)", "Environmental clearances"],
    documents: ["UCC application", "Plans and specifications", "Site plan", "Structural calculations", "Energy compliance", "Third-party inspection agreements (if applicable)"],
    fees: "Residential: $50–$800. Commercial: $200–$10,000+.",
    timeline: "Residential: 1–4 weeks. Commercial: 4–12 weeks.",
    inspections: ["Foundation", "Plumbing underground", "Framing", "Rough-in inspections", "Insulation/energy", "Final"],
    codes: ["Pennsylvania Uniform Construction Code (UCC)", "Based on IBC/IRC 2018 with PA amendments", "NEC 2017", "IECC 2018 with PA amendments"],
    specialNotes: ["UCC is mandatory statewide since 2004", "Third-party inspection agencies may be used", "Radon-resistant construction in high-risk zones", "Historic buildings may qualify for code alternatives"]
  },
  {
    name: "Texas", abbr: "TX",
    overview: "Texas has no mandatory statewide building code for residential construction. Requirements vary significantly by city and county.",
    authority: "No statewide authority — Local Building Departments",
    permitTypes: ["Building Permit", "Electrical Permit", "Plumbing Permit", "Mechanical Permit", "Demolition Permit", "Pool Permit", "Foundation Permit"],
    residentialRequirements: ["Permit application (local jurisdiction)", "2 sets of construction plans", "Site plan with setbacks", "Foundation design by PE (in many jurisdictions)", "Energy code compliance (IECC — where adopted)", "Plumbing permit through TSBPE", "Tree survey/mitigation (some cities)"],
    commercialRequirements: ["Architect-stamped plans", "PE-stamped structural engineering", "Complete MEP documents", "Fire protection plans", "ADA/TAS (Texas Accessibility Standards)", "Environmental review", "Stormwater management (TCEQ)", "Parking analysis"],
    documents: ["Application form", "Construction plans", "Site plan", "Engineering calculations", "Foundation report (geotechnical)", "Energy compliance", "State plumber license", "Contractor registration"],
    fees: "Major cities: $200–$5,000 residential, $500–$25,000+ commercial. Rural: $0–$200.",
    timeline: "Residential: 1–6 weeks. Commercial: 4–16 weeks. Some rural areas: same day.",
    inspections: ["Foundation (pre-pour and post-tension)", "Framing", "Rough-in inspections", "Insulation", "Final"],
    codes: ["No mandatory statewide residential code", "Cities adopt IBC/IRC individually", "Texas Accessibility Standards (TAS) — statewide for commercial", "TSBPE oversees statewide plumbing code", "TDLR oversees electrical and HVAC licensing", "IECC adopted by most major cities"],
    specialNotes: ["No statewide building code — requirements vary enormously", "Many rural areas and counties have NO building permits", "Texas Accessibility Standards (TAS) apply to all commercial/public buildings", "Foundation engineering critical due to expansive clay soils", "Windstorm certification required in coastal counties (TDI WPI-8)", "HOAs may have additional requirements beyond code"]
  },
  {
    name: "Virginia", abbr: "VA",
    overview: "Virginia enforces the Virginia Uniform Statewide Building Code (USBC) across all jurisdictions.",
    authority: "Virginia Department of Housing and Community Development (DHCD)",
    permitTypes: ["Building Permit", "Electrical Permit", "Plumbing Permit", "Mechanical Permit", "Fire Protection Permit", "Demolition Permit"],
    residentialRequirements: ["Permit application", "2 sets of plans", "Site plan/survey", "Structural calculations", "Energy code compliance (USBC)", "Well/septic permits (VDH)", "Erosion control plan"],
    commercialRequirements: ["Architect-sealed drawings", "PE-sealed structural plans", "MEP documents", "Fire protection plans", "ADA compliance", "Special inspection program", "Environmental review", "Stormwater management"],
    documents: ["Application", "Plans and specs", "Site plan", "Structural calcs", "Energy forms", "Special inspections agreement", "Contractor license (DPOR)"],
    fees: "Residential: $75–$1,200. Commercial: $300–$15,000+.",
    timeline: "Residential: 2–4 weeks. Commercial: 4–12 weeks.",
    inspections: ["Footing/foundation", "Framing", "Electrical rough", "Plumbing rough", "Mechanical rough", "Insulation", "Final"],
    codes: ["Virginia USBC (2021)", "Based on IBC/IRC 2018 with VA amendments", "NEC 2017", "IECC 2018 with VA amendments"],
    specialNotes: ["USBC is mandatory and uniform statewide", "Coastal flood zone requirements", "Seismic design zone considerations in western VA", "Special inspections required for certain structural systems", "DPOR contractor licensing required statewide"]
  },
  {
    name: "Washington", abbr: "WA",
    overview: "Washington enforces the Washington State Building Code statewide with limited local amendments allowed.",
    authority: "Washington State Building Code Council / Local Building Departments",
    permitTypes: ["Building Permit", "Electrical Permit", "Plumbing Permit", "Mechanical Permit", "Grading Permit", "Shoreline Permit"],
    residentialRequirements: ["Permit application", "2 sets of plans", "Site plan", "Structural calculations (seismic & snow)", "Energy code compliance (WA State Energy Code)", "Septic design (county health)", "Critical areas review (wetlands, slopes)", "Stormwater plan"],
    commercialRequirements: ["Architect-stamped plans", "PE-stamped structural plans", "MEP plans", "Fire protection plans", "ADA compliance", "SEPA environmental review", "Stormwater management", "Shoreline Management Act compliance (if applicable)"],
    documents: ["Application", "Plans and specs", "Site plan", "Structural calcs", "Energy code forms", "Stormwater report", "Critical areas assessment"],
    fees: "Residential: $100–$3,000. Commercial: $500–$20,000+.",
    timeline: "Residential: 2–6 weeks. Commercial: 6–16 weeks.",
    inspections: ["Foundation", "Framing/structural", "Electrical rough", "Plumbing rough", "Mechanical rough", "Insulation/vapor barrier", "Final"],
    codes: ["Washington State Building Code", "Based on IBC/IRC 2021 with WA amendments", "Washington State Energy Code (exceeds IECC)", "NEC 2020 with WA amendments", "WA State Ventilation and Indoor Air Quality Code"],
    specialNotes: ["Seismic Zone 3–4 in western WA — seismic design critical", "Washington State Energy Code is more stringent than IECC", "Critical areas ordinances (wetlands, steep slopes, shorelines)", "Shoreline Management Act applies to waterfront properties", "Growth Management Act requirements in urban areas", "Indoor air quality and ventilation requirements exceed national codes"]
  },
  {
    name: "Massachusetts", abbr: "MA",
    overview: "Massachusetts enforces the Massachusetts State Building Code (780 CMR) statewide. Local building departments administer permits.",
    authority: "Massachusetts Board of Building Regulations and Standards (BBRS)",
    permitTypes: ["Building Permit", "Electrical Permit", "Plumbing/Gas Permit", "Sheet Metal Permit", "Demolition Permit", "Certificate of Occupancy"],
    residentialRequirements: ["Permit application", "2 sets of construction plans", "Plot plan/survey", "Structural details", "Energy code compliance (Stretch Code or base code)", "Title V septic compliance (if applicable)", "Conservation Commission approval (wetlands)"],
    commercialRequirements: ["Architect-sealed plans", "PE-sealed structural engineering", "MEP plans and specifications", "Fire protection plans", "ADA and MAAB accessibility compliance", "Energy code compliance", "Environmental review (MEPA for larger projects)"],
    documents: ["Application form", "Plans and specifications", "Plot plan", "Energy compliance forms", "Contractor license/registration", "Workers compensation certificate"],
    fees: "Residential: $75–$1,500. Commercial: $300–$15,000+.",
    timeline: "Residential: 1–4 weeks. Commercial: 4–12 weeks.",
    inspections: ["Foundation", "Framing", "Rough-in inspections", "Insulation", "Final"],
    codes: ["780 CMR (MA State Building Code)", "Based on IBC/IRC 2015 with MA amendments", "MA Stretch Energy Code (mandatory in many communities)", "NEC 2020", "248 CMR (Plumbing Code)", "MA Architectural Access Board (MAAB) regulations"],
    specialNotes: ["Stretch Energy Code adopted by 300+ communities (exceeds base energy code)", "Massachusetts Architectural Access Board (MAAB) regulations for accessibility", "Wetlands Protection Act — Conservation Commission review", "Historic district considerations (many in MA)", "Title V septic system requirements"]
  },
  {
    name: "Michigan", abbr: "MI",
    overview: "Michigan enforces the Michigan Building Code statewide. Permits are issued by local enforcing agencies.",
    authority: "Michigan Bureau of Construction Codes / Local Building Departments",
    permitTypes: ["Building Permit", "Electrical Permit", "Plumbing Permit", "Mechanical Permit", "Demolition Permit"],
    residentialRequirements: ["Permit application", "2 sets of plans", "Site plan", "Structural details", "Energy code compliance (MI Energy Code)", "Well/septic permits (county health)", "Soil erosion permit (if >1 acre disturbance)"],
    commercialRequirements: ["Architect-sealed plans", "PE-sealed structural documents", "MEP plans", "Fire protection plans", "Barrier-free design compliance", "Environmental review", "Plan review by state-licensed plan reviewer"],
    documents: ["Application", "Construction plans", "Site plan", "Energy compliance", "Contractor license (MI licensed builder)", "Workers comp certificate"],
    fees: "Residential: $75–$1,000. Commercial: $300–$10,000+.",
    timeline: "Residential: 1–4 weeks. Commercial: 4–12 weeks.",
    inspections: ["Foundation", "Framing", "Rough-in inspections", "Insulation", "Final"],
    codes: ["Michigan Building Code", "Michigan Residential Code", "Michigan Mechanical Code", "Michigan Plumbing Code", "Michigan Electrical Code (NEC-based)", "Michigan Energy Code"],
    specialNotes: ["Licensed residential builder required for homes over $600 in work", "Barrier-free design requirements for commercial", "Snow load design important in northern MI", "Radon-resistant construction in designated zones", "Great Lakes shoreline construction regulations"]
  },
  {
    name: "Minnesota", abbr: "MN",
    overview: "Minnesota enforces the Minnesota State Building Code statewide. All municipalities with building activity must adopt and enforce it.",
    authority: "Minnesota Department of Labor and Industry / Local Building Officials",
    permitTypes: ["Building Permit", "Electrical Permit", "Plumbing Permit", "Mechanical Permit", "Fire Suppression Permit", "Demolition Permit"],
    residentialRequirements: ["Permit application", "2 sets of plans", "Site plan", "Structural calculations (snow & wind loads)", "Energy code compliance (MN Energy Code)", "Radon control system design", "Well/septic permits (county)", "Erosion control plan"],
    commercialRequirements: ["Architect-sealed plans", "PE-sealed structural plans", "MEP plans", "Fire protection plans", "ADA and MN accessibility compliance", "Energy code compliance", "Environmental review (EAW/EIS if applicable)"],
    documents: ["Application", "Construction plans", "Site plan", "Structural calculations", "Energy code compliance", "Radon system design", "Contractor license"],
    fees: "Residential: $75–$1,500. Commercial: $300–$12,000+.",
    timeline: "Residential: 1–4 weeks. Commercial: 4–12 weeks.",
    inspections: ["Foundation/footing", "Framing", "Rough-in inspections", "Insulation/energy", "Radon system", "Final"],
    codes: ["Minnesota State Building Code", "Based on IBC/IRC 2018 with MN amendments", "Minnesota Energy Code (exceeds IECC)", "NEC 2020", "MN Plumbing Code (unique to MN)", "MN Mechanical Code"],
    specialNotes: ["Heavy snow load requirements (60-100+ psf)", "Radon-resistant construction required statewide", "Minnesota Energy Code is more stringent than IECC", "Minnesota has unique plumbing code (not IPC-based)", "Frost depth: 42-60 inches depending on location", "Manufactured home installation standards"]
  },
  {
    name: "Nevada", abbr: "NV",
    overview: "Nevada building permits are administered at the county and city level. Clark County (Las Vegas) and Washoe County (Reno) have the most comprehensive requirements.",
    authority: "Local Building Departments (no statewide building code enforcement)",
    permitTypes: ["Building Permit", "Electrical Permit", "Plumbing Permit", "Mechanical Permit", "Grading Permit", "Pool Permit", "Solar Permit"],
    residentialRequirements: ["Permit application", "2 sets of plans", "Site plan/plot plan", "Structural calculations", "Energy code compliance", "Soils/geotechnical report", "Clark County: Title 30 compliance"],
    commercialRequirements: ["Architect-sealed plans", "PE-sealed structural plans", "MEP plans", "Fire protection plans", "ADA compliance", "Soils report", "Traffic study (if required)"],
    documents: ["Application", "Construction plans", "Site plan", "Structural calcs", "Energy forms", "Soils report", "Contractor license (NSCB)"],
    fees: "Residential: $100–$2,000. Commercial: $500–$15,000+.",
    timeline: "Residential: 1–4 weeks. Commercial: 4–12 weeks.",
    inspections: ["Foundation", "Framing", "Rough-in inspections", "Insulation", "Final"],
    codes: ["Local adoption of IBC/IRC", "Clark County adopts IBC 2018", "Washoe County adopts IBC 2018", "NEC as adopted locally", "IECC as adopted locally"],
    specialNotes: ["No statewide building code — locally administered", "Extreme heat design considerations for HVAC", "Expansive soil issues in Las Vegas valley", "Water conservation requirements (drought-tolerant landscaping)", "Solar-ready construction incentives", "Wind design for desert conditions"]
  },
  {
    name: "Oregon", abbr: "OR",
    overview: "Oregon enforces the Oregon Structural Specialty Code and other specialty codes statewide.",
    authority: "Oregon Building Codes Division (BCD) / Local Building Officials",
    permitTypes: ["Building Permit (Structural)", "Electrical Permit", "Plumbing Permit", "Mechanical Permit", "Manufactured Dwelling Permit"],
    residentialRequirements: ["Permit application", "2 sets of plans", "Site plan", "Structural calculations (seismic)", "Energy code compliance (OR Energy Code)", "On-site sewage permit (if applicable)", "Stormwater plan"],
    commercialRequirements: ["Architect-sealed plans", "PE-sealed structural plans", "MEP plans", "Fire and life safety plans", "ADA and OR accessibility compliance", "Energy code compliance", "Environmental review"],
    documents: ["Application", "Plans and specs", "Site plan", "Structural calcs", "Energy compliance", "Contractor license (CCB)"],
    fees: "Residential: $100–$2,000. Commercial: $500–$15,000+.",
    timeline: "Residential: 2–6 weeks. Commercial: 6–16 weeks.",
    inspections: ["Foundation/footing", "Framing/structural", "Rough-in inspections", "Insulation", "Final"],
    codes: ["Oregon Structural Specialty Code (based on IBC)", "Oregon Residential Specialty Code (based on IRC)", "Oregon Electrical Specialty Code", "Oregon Plumbing Specialty Code", "Oregon Mechanical Specialty Code", "Oregon Energy Efficiency Specialty Code (OEESC)"],
    specialNotes: ["Seismic design critical — Cascadia Subduction Zone", "Oregon Energy Code is more stringent than IECC", "Coastal erosion and tsunami zone regulations", "Stormwater management requirements", "CCB contractor licensing required statewide"]
  },
  {
    name: "Tennessee", abbr: "TN",
    overview: "Tennessee requires building permits in municipalities and certain counties. The state adopts mandatory codes for specific building types.",
    authority: "Tennessee Department of Commerce and Insurance — State Fire Marshal's Office",
    permitTypes: ["Building Permit", "Electrical Permit", "Plumbing Permit", "Mechanical Permit", "Fire Protection Permit"],
    residentialRequirements: ["Permit application", "2 sets of plans", "Site plan", "Structural details", "Energy code compliance", "Septic permit (county health dept)"],
    commercialRequirements: ["Architect-sealed plans", "PE-sealed structural plans", "MEP documents", "Fire protection plans", "ADA/accessibility compliance", "State Fire Marshal review"],
    documents: ["Application", "Construction plans", "Site plan", "Energy forms", "Contractor license (TN)"],
    fees: "Residential: $50–$500. Commercial: $200–$8,000+.",
    timeline: "Residential: 1–3 weeks. Commercial: 3–10 weeks.",
    inspections: ["Foundation", "Framing", "Rough-in inspections", "Final"],
    codes: ["IBC/IRC as adopted locally", "Tennessee amendments to national codes", "NEC as adopted", "State Fire Marshal codes for commercial"],
    specialNotes: ["Not all areas require residential permits", "State Fire Marshal reviews commercial plans in unincorporated areas", "Seismic considerations in western TN (New Madrid fault zone)", "Tornado/wind design in western and central TN"]
  },
  {
    name: "Indiana", abbr: "IN",
    overview: "Indiana enforces building codes through the Indiana Fire Prevention and Building Safety Commission for commercial buildings. Residential codes vary locally.",
    authority: "Indiana Department of Homeland Security — Fire Prevention and Building Safety Commission",
    permitTypes: ["Building Permit", "Electrical Permit", "Plumbing Permit", "HVAC Permit", "Demolition Permit"],
    residentialRequirements: ["Permit application (local)", "2 sets of plans", "Site plan", "Structural details", "Energy compliance", "Well/septic permits (county health)"],
    commercialRequirements: ["Architect-sealed plans submitted to state", "PE-sealed structural plans", "MEP plans", "Fire protection plans", "ADA compliance", "State plan review through IDHS"],
    documents: ["Application", "Construction plans", "Site plan", "Structural calcs", "Energy forms"],
    fees: "Residential: $50–$500. Commercial: $200–$10,000+.",
    timeline: "Residential: 1–3 weeks. Commercial: 4–12 weeks (state review required).",
    inspections: ["Foundation", "Framing", "Rough-in inspections", "Final"],
    codes: ["Indiana Building Code (commercial — based on IBC)", "Local residential codes vary", "675 IAC rules", "NEC as adopted", "Indiana Plumbing Code"],
    specialNotes: ["Commercial plans must be submitted to state IDHS for review", "Residential permitting varies by jurisdiction", "Some rural areas have no residential building code", "Tornado-prone — wind design considerations"]
  },
  {
    name: "Missouri", abbr: "MO",
    overview: "Missouri has no mandatory statewide building code. Requirements vary by city and county, with major cities like Kansas City and St. Louis enforcing comprehensive codes.",
    authority: "Local Building Departments (no statewide authority)",
    permitTypes: ["Building Permit", "Electrical Permit", "Plumbing Permit", "Mechanical Permit", "Demolition Permit"],
    residentialRequirements: ["Permit application (where required)", "2 sets of plans", "Site plan", "Structural details", "Energy compliance (where adopted)"],
    commercialRequirements: ["Architect-sealed plans", "PE-sealed structural plans", "MEP plans", "Fire protection plans", "ADA compliance"],
    documents: ["Application", "Construction plans", "Site plan", "Contractor license (where required)"],
    fees: "Varies widely. Major cities: $100–$5,000+. Rural: may not require permits.",
    timeline: "Varies by jurisdiction.",
    inspections: ["Foundation", "Framing", "Rough-in", "Final (where required)"],
    codes: ["No statewide building code", "Major cities adopt IBC/IRC", "Kansas City and St. Louis have specific local codes"],
    specialNotes: ["No statewide building code", "Many rural areas have no building permits", "Tornado/wind design important", "New Madrid seismic zone affects SE Missouri", "Radon risk in many areas"]
  },
  {
    name: "Maryland", abbr: "MD",
    overview: "Maryland enforces the Maryland Building Performance Standards statewide, based on the International Codes.",
    authority: "Maryland Department of Labor — Division of Labor and Industry / Local Building Officials",
    permitTypes: ["Building Permit", "Electrical Permit", "Plumbing Permit", "Mechanical Permit", "Use & Occupancy Permit", "Grading Permit"],
    residentialRequirements: ["Permit application", "2 sets of plans", "Site plan/survey", "Structural calculations", "Energy code compliance", "Sediment control plan", "Well/septic permits (county health)", "Forest conservation (if applicable)"],
    commercialRequirements: ["Architect-sealed plans", "PE-sealed structural plans", "MEP documents", "Fire protection plans", "ADA compliance", "Stormwater management", "Environmental review"],
    documents: ["Application", "Plans and specs", "Site plan", "Structural calcs", "Energy forms", "Sediment control plan", "MHIC license"],
    fees: "Residential: $75–$1,500. Commercial: $300–$15,000+.",
    timeline: "Residential: 2–6 weeks. Commercial: 4–12 weeks.",
    inspections: ["Foundation", "Framing", "Rough-in inspections", "Insulation", "Final"],
    codes: ["Maryland Building Performance Standards", "Based on IBC/IRC 2018 with MD amendments", "NEC 2017", "IECC with MD amendments"],
    specialNotes: ["Critical Area Act for Chesapeake Bay shoreline properties", "Forest conservation requirements", "Stormwater management mandatory", "MHIC contractor licensing required for residential", "Flood zone regulations in coastal areas"]
  },
  {
    name: "Utah", abbr: "UT",
    overview: "Utah enforces building codes statewide through the Utah Uniform Building Standards Act.",
    authority: "Utah Division of Occupational and Professional Licensing (DOPL)",
    permitTypes: ["Building Permit", "Electrical Permit", "Plumbing Permit", "Mechanical Permit"],
    residentialRequirements: ["Permit application", "2 sets of plans", "Site plan", "Structural calculations", "Energy code compliance (IECC)", "Soils report (if required)"],
    commercialRequirements: ["Architect-sealed plans", "PE-sealed structural plans", "MEP plans", "Fire protection plans", "ADA compliance"],
    documents: ["Application", "Plans and specs", "Site plan", "Structural calcs", "Energy forms", "Contractor license"],
    fees: "Residential: $75–$1,000. Commercial: $300–$10,000+.",
    timeline: "Residential: 1–3 weeks. Commercial: 3–10 weeks.",
    inspections: ["Foundation", "Framing", "Rough-in", "Insulation", "Final"],
    codes: ["Utah State Construction Code", "Based on IBC/IRC 2021 with UT amendments", "NEC 2020", "IECC 2021 with UT amendments"],
    specialNotes: ["Seismic design requirements (Wasatch Front zone)", "Snow load design for mountain areas", "Expansive soil considerations", "Wildland-urban interface fire requirements"]
  },
];

const Legal = () => {
  const [selectedState, setSelectedState] = useState("NM");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredStates = statePermitData.filter(s =>
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.abbr.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentState = statePermitData.find(s => s.abbr === selectedState);

  return (
    <main>
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 blueprint-grid relative overflow-hidden">
        <PageHeroAnimation page="services" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs font-heading uppercase tracking-[0.2em] text-muted-foreground mb-4 block">Legal & Compliance</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl lg:text-6xl font-heading font-bold mb-6 max-w-3xl">
            Building Permit<br /><span className="text-gradient-highlight">Requirements by State</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Comprehensive guide to building permit requirements across the United States. Select a state to view detailed permit information.
          </motion.p>
        </div>
      </section>

      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* State selector sidebar */}
            <div className="lg:w-72 shrink-0">
              <div className="sticky top-24">
                <div className="relative mb-4">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search states..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border bg-card text-sm font-heading focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div className="max-h-[60vh] overflow-y-auto space-y-1 pr-1 border border-border rounded-lg p-2 bg-card">
                  {filteredStates.map((state) => (
                    <button
                      key={state.abbr}
                      onClick={() => setSelectedState(state.abbr)}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm font-heading transition-all duration-200 flex items-center justify-between ${
                        selectedState === state.abbr
                          ? "bg-foreground text-primary-foreground"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      <span>{state.name}</span>
                      <span className="text-xs opacity-60">{state.abbr}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* State content */}
            <div className="flex-1 min-w-0">
              <AnimatePresence mode="wait">
                {currentState && (
                  <motion.div
                    key={currentState.abbr}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-8"
                  >
                    {/* Header */}
                    <div className="border-b border-border pb-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-4xl font-heading font-bold">{currentState.abbr}</span>
                        <div>
                          <h2 className="text-2xl lg:text-3xl font-heading font-bold">{currentState.name}</h2>
                          <p className="text-sm text-muted-foreground">{currentState.authority}</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{currentState.overview}</p>
                    </div>

                    {/* Permit Types */}
                    <div>
                      <h3 className="text-lg font-heading font-bold mb-4 flex items-center gap-2">
                        <FileText className="w-5 h-5" /> Permit Types Required
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {currentState.permitTypes.map((type) => (
                          <span key={type} className="text-xs font-heading uppercase tracking-wider bg-muted border border-border rounded-full px-3 py-1.5">{type}</span>
                        ))}
                      </div>
                    </div>

                    {/* Requirements Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div className="bg-card border border-border rounded-lg p-6">
                        <h3 className="text-base font-heading font-bold mb-4 flex items-center gap-2">
                          <Building2 className="w-4 h-4" /> Residential Requirements
                        </h3>
                        <ul className="space-y-2">
                          {currentState.residentialRequirements.map((req, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                              <CheckCircle className="w-3.5 h-3.5 text-foreground mt-0.5 shrink-0" />
                              <span className="text-muted-foreground">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-card border border-border rounded-lg p-6">
                        <h3 className="text-base font-heading font-bold mb-4 flex items-center gap-2">
                          <Building2 className="w-4 h-4" /> Commercial Requirements
                        </h3>
                        <ul className="space-y-2">
                          {currentState.commercialRequirements.map((req, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                              <CheckCircle className="w-3.5 h-3.5 text-foreground mt-0.5 shrink-0" />
                              <span className="text-muted-foreground">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Documents Required */}
                    <div className="bg-card border border-border rounded-lg p-6">
                      <h3 className="text-base font-heading font-bold mb-4 flex items-center gap-2">
                        <FileText className="w-4 h-4" /> Documents Required
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {currentState.documents.map((doc, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-3.5 h-3.5 text-foreground shrink-0" />
                            <span className="text-muted-foreground">{doc}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Fees & Timeline */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-muted/50 border border-border rounded-lg p-6">
                        <h3 className="text-base font-heading font-bold mb-2">Estimated Fees</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{currentState.fees}</p>
                      </div>
                      <div className="bg-muted/50 border border-border rounded-lg p-6">
                        <h3 className="text-base font-heading font-bold mb-2">Typical Timeline</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{currentState.timeline}</p>
                      </div>
                    </div>

                    {/* Inspections */}
                    <div className="bg-card border border-border rounded-lg p-6">
                      <h3 className="text-base font-heading font-bold mb-4 flex items-center gap-2">
                        <Shield className="w-4 h-4" /> Required Inspections
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                        {currentState.inspections.map((inspection, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm bg-muted/30 rounded-md px-3 py-2">
                            <span className="w-5 h-5 rounded-full bg-foreground text-primary-foreground text-[10px] flex items-center justify-center font-bold shrink-0">{i + 1}</span>
                            <span className="text-muted-foreground">{inspection}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Building Codes */}
                    <div className="bg-card border border-border rounded-lg p-6">
                      <h3 className="text-base font-heading font-bold mb-4">Applicable Building Codes</h3>
                      <ul className="space-y-2">
                        {currentState.codes.map((code, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-foreground font-bold">•</span> {code}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Special Notes */}
                    {currentState.specialNotes.length > 0 && (
                      <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-6">
                        <h3 className="text-base font-heading font-bold mb-4 flex items-center gap-2 text-destructive">
                          <AlertTriangle className="w-4 h-4" /> Important Notes & Special Requirements
                        </h3>
                        <ul className="space-y-2">
                          {currentState.specialNotes.map((note, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                              <AlertTriangle className="w-3.5 h-3.5 text-destructive mt-0.5 shrink-0" />
                              {note}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Disclaimer */}
                    <div className="border-t border-border pt-6">
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        <strong>Disclaimer:</strong> This information is provided as a general guide and may not reflect the most current requirements. Building codes and permit requirements change frequently and vary by local jurisdiction. Always verify requirements with your local building department before beginning any construction project. Drafinity LLC is not responsible for any inaccuracies or changes in local requirements. Contact us for professional assistance with your specific project.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
};

export default Legal;
