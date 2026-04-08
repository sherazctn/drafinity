// Centralized software logo URLs - using reliable CDN sources with transparent backgrounds

export const softwareLogos: Record<string, string> = {
  // CAD & Drafting
  "AutoCAD": "https://img.icons8.com/color/96/autocad.png",
  "ArchiCAD": "https://img.icons8.com/color/96/archicad.png",
  "DraftSight": "https://companieslogo.com/img/orig/dasault-systemes_BIG.D-0a4e3e36.png",
  "MicroStation": "https://img.icons8.com/color/96/bentley-systems.png",

  // BIM & Modeling
  "Revit": "https://img.icons8.com/color/96/autodesk-revit.png",
  "Navisworks": "https://damassets.autodesk.net/content/dam/autodesk/www/product-imagery/badge-75x75/navisworks-manage-badge-75x75.png",
  "Tekla Structures": "https://img.icons8.com/color/96/trimble.png",
  "Dynamo": "https://img.icons8.com/color/96/autodesk.png",

  // 3D Visualization
  "SketchUp Pro": "https://img.icons8.com/color/96/sketchup.png",
  "SketchUp": "https://img.icons8.com/color/96/sketchup.png",
  "V-Ray": "https://img.icons8.com/color/96/chaos-group.png",
  "Lumion": "https://upload.wikimedia.org/wikipedia/en/thumb/7/76/Lumion_logo.png/150px-Lumion_logo.png",
  "Enscape": "https://img.icons8.com/color/96/chaos-group.png",
  "3ds Max": "https://img.icons8.com/color/96/3ds-max.png",
  "Twinmotion": "https://img.icons8.com/color/96/unreal-engine.png",

  // Documentation & Review
  "Bluebeam Revu": "https://img.icons8.com/color/96/pdf-2.png",
  "Bluebeam": "https://img.icons8.com/color/96/pdf-2.png",
  "Adobe Creative Suite": "https://img.icons8.com/color/96/adobe-creative-cloud.png",
  "PlanGrid": "https://img.icons8.com/color/96/autodesk.png",

  // Project Management
  "BIM 360": "https://img.icons8.com/color/96/autodesk.png",
  "Procore": "https://img.icons8.com/color/96/project.png",
  "Microsoft Project": "https://img.icons8.com/color/96/microsoft-project-2019.png",

  // Structural
  "ETABS": "https://img.icons8.com/color/96/structural.png",
  "RISA-3D": "https://img.icons8.com/color/96/structural.png",
  "SAP2000": "https://img.icons8.com/color/96/structural.png",

  // Advanced
  "Rhino": "https://img.icons8.com/color/96/rhinoceros.png",
  "Grasshopper": "https://img.icons8.com/color/96/rhinoceros.png",
  "Civil 3D": "https://img.icons8.com/color/96/autodesk.png",
  "InfraWorks": "https://img.icons8.com/color/96/autodesk.png",
  "Solidworks": "https://img.icons8.com/color/96/solidworks.png",
  "Inventor": "https://img.icons8.com/color/96/autodesk.png",
};

// Fallback icon
export const fallbackLogo = "https://img.icons8.com/color/96/autodesk.png";

export function getSoftwareLogo(name: string): string {
  return softwareLogos[name] || fallbackLogo;
}
