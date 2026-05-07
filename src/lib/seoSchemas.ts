// Centralized JSON-LD schemas for SEO + GEO (Generative Engine Optimization)

const SITE_URL = "https://drafinity.us";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Drafinity LLC",
  alternateName: "Drafinity",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/og-image.jpg`,
  description:
    "USA-certified architectural drafting, 3D rendering, BIM modeling, structural drafting, and plan stamping firm serving all 50 states since 2015.",
  foundingDate: "2015",
  email: "info@drafinity.us",
  telephone: "+1-917-728-1625",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1209 Mountain Road Pl NE",
    addressLocality: "Albuquerque",
    addressRegion: "NM",
    postalCode: "87110",
    addressCountry: "US",
  },
  sameAs: [
    "https://www.facebook.com/drafinity",
    "https://www.instagram.com/drafinity",
    "https://www.linkedin.com/company/drafinity",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+1-917-728-1625",
      email: "info@drafinity.us",
      contactType: "customer service",
      areaServed: "US",
      availableLanguage: ["English"],
    },
  ],
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": `${SITE_URL}/#localbusiness`,
  name: "Drafinity LLC",
  image: `${SITE_URL}/og-image.jpg`,
  url: SITE_URL,
  telephone: "+1-917-728-1625",
  email: "info@drafinity.us",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1209 Mountain Road Pl NE",
    addressLocality: "Albuquerque",
    addressRegion: "NM",
    postalCode: "87110",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 35.0973,
    longitude: -106.6231,
  },
  areaServed: [
    { "@type": "Country", name: "United States" },
    ...[
      "Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware",
      "Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky",
      "Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi",
      "Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico",
      "New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania",
      "Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont",
      "Virginia","Washington","West Virginia","Wisconsin","Wyoming",
    ].map((s) => ({ "@type": "State", name: s })),
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "10:00",
      closes: "16:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "237",
    bestRating: "5",
    worstRating: "1",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Drafting & Design Services",
    itemListElement: [
      "2D Architectural Drafting","3D Rendering & Visualization","BIM Modeling (Revit)",
      "Structural Drafting","MEP Drafting","Site Plans","Construction Documents",
      "Plan Stamping (All 50 States)","Permit Expediting","Material Estimation",
      "Interior Design Visualization","As-Built Drawings",
    ].map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s },
    })),
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Drafinity LLC",
  description:
    "Permit-ready drafting, 3D design, BIM, and plan stamping in all 50 US states.",
  publisher: { "@id": `${SITE_URL}/#organization` },
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/services?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export const breadcrumbSchema = (
  items: { name: string; path: string }[]
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: `${SITE_URL}${item.path}`,
  })),
});

export const serviceSchema = (params: {
  name: string;
  description: string;
  path: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: params.name,
  description: params.description,
  url: `${SITE_URL}${params.path}`,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: { "@type": "Country", name: "United States" },
  serviceType: params.name,
});

export const faqSchema = (faqs: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

export const homeFAQs = [
  {
    q: "What services does Drafinity LLC offer?",
    a: "Drafinity LLC offers 2D architectural drafting, 3D rendering, BIM modeling (Revit), structural drafting, MEP drafting, site plans, construction documents, plan stamping in all 50 US states, permit expediting, material estimation, and interior visualization.",
  },
  {
    q: "Is Drafinity licensed in all 50 states?",
    a: "Yes. Drafinity partners with licensed architects and Professional Engineers (PEs) in all 50 US states to provide stamped, permit-ready drawings.",
  },
  {
    q: "How fast can Drafinity deliver a quote?",
    a: "We deliver detailed, free quotes within 24 hours of receiving your project requirements.",
  },
  {
    q: "How long has Drafinity been in business?",
    a: "Drafinity LLC has been delivering certified drafting and plan stamping services since 2015, completing 500+ projects with 100% client satisfaction.",
  },
  {
    q: "What software does Drafinity use?",
    a: "We use AutoCAD, Revit, ArchiCAD, SketchUp, 3ds Max, V-Ray, Lumion, Enscape, BIM 360, Navisworks, ETABS, SAP2000, RISA-3D, STAAD.Pro, Civil 3D, and MicroStation.",
  },
  {
    q: "Where is Drafinity located?",
    a: "Drafinity LLC is headquartered at 1209 Mountain Road Pl NE, Albuquerque, NM 87110, and serves clients across all 50 US states.",
  },
];
