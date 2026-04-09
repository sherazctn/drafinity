// Centralized software logo URLs - using reliable CDN sources with transparent backgrounds

export const softwareLogos: Record<string, string> = {
  "AutoCAD": "https://img.icons8.com/color/96/autocad.png",
  "ArchiCAD": "https://img.icons8.com/color/96/archicad.png",
  "DraftSight": "https://img.icons8.com/color/96/autodesk.png",
  "MicroStation": "https://img.icons8.com/color/96/bentley-systems.png",
  "Revit": "https://img.icons8.com/color/96/autodesk-revit.png",
  "Navisworks": "https://img.icons8.com/color/96/autodesk-navisworks.png",
  "Tekla Structures": "https://img.icons8.com/color/96/structural-analysis.png",
  "Dynamo": "https://img.icons8.com/color/96/autodesk.png",
  "SketchUp Pro": "https://img.icons8.com/color/96/sketchup.png",
  "SketchUp": "https://img.icons8.com/color/96/sketchup.png",
  "V-Ray": "https://img.icons8.com/color/96/rendering.png",
  "Lumion": "https://img.icons8.com/color/96/landscape.png",
  "Enscape": "https://img.icons8.com/color/96/virtual-reality.png",
  "3ds Max": "https://img.icons8.com/color/96/3ds-max.png",
  "Twinmotion": "https://img.icons8.com/color/96/unreal-engine.png",
  "Bluebeam Revu": "https://img.icons8.com/color/96/pdf-2.png",
  "Bluebeam": "https://img.icons8.com/color/96/pdf-2.png",
  "Adobe Creative Suite": "https://img.icons8.com/color/96/adobe-creative-cloud.png",
  "PlanGrid": "https://img.icons8.com/color/96/autodesk.png",
  "BIM 360": "https://img.icons8.com/color/96/autodesk.png",
  "Procore": "https://img.icons8.com/color/96/project.png",
  "Microsoft Project": "https://img.icons8.com/color/96/microsoft-project-2019.png",
  "ETABS": "https://img.icons8.com/color/96/structural-analysis.png",
  "RISA-3D": "https://img.icons8.com/color/96/blueprint.png",
  "SAP2000": "https://img.icons8.com/color/96/maintenance.png",
  "Rhino": "https://img.icons8.com/color/96/rhinoceros.png",
  "Grasshopper": "https://img.icons8.com/color/96/rhinoceros.png",
  "Civil 3D": "https://img.icons8.com/color/96/autodesk.png",
  "InfraWorks": "https://img.icons8.com/color/96/autodesk.png",
  "Solidworks": "https://img.icons8.com/color/96/solidworks.png",
  "Inventor": "https://img.icons8.com/color/96/autodesk.png",
};

export const fallbackLogo = "https://img.icons8.com/color/96/autodesk.png";

export function getSoftwareLogo(name: string): string {
  return softwareLogos[name] || fallbackLogo;
}
