// Centralized software logo URLs using verified working transparent/logo-safe sources

export const softwareLogos: Record<string, string> = {
  "AutoCAD": "https://img.icons8.com/color/96/autocad.png",
  "ArchiCAD": "https://img.icons8.com/color/96/archicad.png",
  "DraftSight": "https://cdn.simpleicons.org/dassaultsystemes/005386",
  "MicroStation": "https://cdn.simpleicons.org/bentley/00447C",
  "Revit": "https://img.icons8.com/color/96/autodesk-revit.png",
  "Navisworks": "https://damassets.autodesk.net/content/dam/autodesk/www/product-imagery/badge-75x75/navisworks-manage-badge-75x75.png",
  "Tekla Structures": "https://cdn.simpleicons.org/trimble/0063A3",
  "Dynamo": "https://cdn.simpleicons.org/autodesk/000000",
  "SketchUp Pro": "https://cdn.simpleicons.org/sketchup/005F9E",
  "SketchUp": "https://cdn.simpleicons.org/sketchup/005F9E",
  "V-Ray": "https://img.icons8.com/color/96/3d-glasses.png",
  "Lumion": "https://img.icons8.com/color/96/layers.png",
  "Enscape": "https://img.icons8.com/color/96/virtual-reality.png",
  "3ds Max": "https://img.icons8.com/color/96/3ds-max.png",
  "Twinmotion": "https://cdn.simpleicons.org/unrealengine/0E1128",
  "Bluebeam Revu": "https://img.icons8.com/color/96/pdf-2.png",
  "Bluebeam": "https://img.icons8.com/color/96/pdf-2.png",
  "Adobe Creative Suite": "https://img.icons8.com/color/96/adobe-creative-cloud.png",
  "PlanGrid": "https://img.icons8.com/color/96/autodesk.png",
  "BIM 360": "https://img.icons8.com/color/96/autodesk.png",
  "Procore": "https://img.icons8.com/color/96/project.png",
  "Microsoft Project": "https://img.icons8.com/color/96/microsoft-project-2019.png",
  "ETABS": "https://img.icons8.com/color/96/engineering.png",
  "RISA-3D": "https://img.icons8.com/color/96/engineering.png",
  "SAP2000": "https://img.icons8.com/color/96/engineering.png",
  "Rhino": "https://cdn.simpleicons.org/rhinoceros/801010",
  "Grasshopper": "https://cdn.simpleicons.org/rhinoceros/801010",
  "Civil 3D": "https://cdn.simpleicons.org/autodesk/000000",
  "InfraWorks": "https://cdn.simpleicons.org/autodesk/000000",
  "Solidworks": "https://img.icons8.com/color/96/solidworks.png",
  "Inventor": "https://cdn.simpleicons.org/autodesk/000000",
};

export const fallbackLogo = "https://img.icons8.com/color/96/autodesk.png";

export function getSoftwareLogo(name: string): string {
  return softwareLogos[name] || fallbackLogo;
}
