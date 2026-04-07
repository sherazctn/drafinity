// Centralized software logo URLs - using CDN sources with transparent backgrounds
// All logos are sourced from reliable CDNs

export const softwareLogos: Record<string, string> = {
  "AutoCAD": "https://cdn.worldvectorlogo.com/logos/autocad-2021.svg",
  "ArchiCAD": "https://cdn.worldvectorlogo.com/logos/archicad.svg",
  "DraftSight": "https://cdn.worldvectorlogo.com/logos/draftsight.svg",
  "MicroStation": "https://cdn.worldvectorlogo.com/logos/bentley-2.svg",
  "Revit": "https://cdn.worldvectorlogo.com/logos/autodesk-revit.svg",
  "Navisworks": "https://cdn.worldvectorlogo.com/logos/navisworks.svg",
  "Tekla Structures": "https://cdn.worldvectorlogo.com/logos/tekla-1.svg",
  "Dynamo": "https://cdn.worldvectorlogo.com/logos/autodesk-1.svg",
  "SketchUp Pro": "https://cdn.worldvectorlogo.com/logos/sketchup-2.svg",
  "SketchUp": "https://cdn.worldvectorlogo.com/logos/sketchup-2.svg",
  "V-Ray": "https://cdn.worldvectorlogo.com/logos/v-ray-5.svg",
  "Lumion": "https://cdn.worldvectorlogo.com/logos/lumion-1.svg",
  "Enscape": "https://cdn.worldvectorlogo.com/logos/enscape-1.svg",
  "3ds Max": "https://cdn.worldvectorlogo.com/logos/autodesk-3ds-max-1.svg",
  "Twinmotion": "https://cdn.worldvectorlogo.com/logos/twinmotion-1.svg",
  "Bluebeam Revu": "https://cdn.worldvectorlogo.com/logos/bluebeam-1.svg",
  "Bluebeam": "https://cdn.worldvectorlogo.com/logos/bluebeam-1.svg",
  "Adobe Creative Suite": "https://cdn.worldvectorlogo.com/logos/adobe-creative-cloud-cc.svg",
  "PlanGrid": "https://cdn.worldvectorlogo.com/logos/autodesk-1.svg",
  "BIM 360": "https://cdn.worldvectorlogo.com/logos/autodesk-1.svg",
  "Procore": "https://cdn.worldvectorlogo.com/logos/procore-1.svg",
  "Microsoft Project": "https://cdn.worldvectorlogo.com/logos/microsoft-project-2019.svg",
  "ETABS": "https://cdn.worldvectorlogo.com/logos/csi-1.svg",
  "RISA-3D": "https://cdn.worldvectorlogo.com/logos/risa-1.svg",
  "SAP2000": "https://cdn.worldvectorlogo.com/logos/csi-1.svg",
  "Rhino": "https://cdn.worldvectorlogo.com/logos/rhinoceros-1.svg",
  "Grasshopper": "https://cdn.worldvectorlogo.com/logos/rhinoceros-1.svg",
  "Civil 3D": "https://cdn.worldvectorlogo.com/logos/autodesk-1.svg",
  "InfraWorks": "https://cdn.worldvectorlogo.com/logos/autodesk-1.svg",
  "Solidworks": "https://cdn.worldvectorlogo.com/logos/solidworks-2.svg",
  "Inventor": "https://cdn.worldvectorlogo.com/logos/autodesk-1.svg",
};

// Fallback icon for unknown software
export const fallbackLogo = "https://cdn.worldvectorlogo.com/logos/autodesk-1.svg";

export function getSoftwareLogo(name: string): string {
  return softwareLogos[name] || fallbackLogo;
}
