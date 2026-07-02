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
    "Drafinity LLC provides professional drafting support, BIM modeling, 3D rendering, and building documentation support for residential, commercial, and industrial projects across the United States.",
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
  description:
    "Drafinity LLC offers CAD drafting support, BIM modeling, 3D visualization, rendering, and construction documentation support. Service availability depends on project requirements and applicable local rules.",
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
  areaServed: { "@type": "Country", name: "United States" },
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
    name: "Drafting & Documentation Support Services",
    itemListElement: [
      "2D Drafting Support","3D Rendering & Visualization","BIM Modeling (Revit)",
      "Structural Drafting Support","MEP Drafting Support","Site Plans","Construction Documents",
      "Licensed Review Coordination Support","Permit Expediting","Material Estimation",
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
    "Professional drafting support, 3D design, BIM modeling, and building documentation support for projects across the United States.",
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
    a: "Drafinity LLC offers 2D drafting support, 3D rendering, BIM modeling (Revit), structural drafting support, MEP drafting support, site plans, construction documentation support, licensed review coordination support, permit expediting, material estimation, and interior visualization.",
  },
  {
    q: "Does Drafinity sign, seal, or stamp plans?",
    a: "No. Drafinity does not independently sign, seal, stamp, or approve regulated plans. If a project requires licensed review or approval, the client works with the appropriate licensed professional. We can assist with preparing and organizing documentation for that review.",
  },
  {
    q: "How fast can Drafinity deliver a quote?",
    a: "We deliver detailed, free quotes within 24 hours of receiving your project requirements.",
  },
  {
    q: "How long has Drafinity been in business?",
    a: "Drafinity LLC has been delivering professional drafting support and building documentation services since 2015, completing 500+ projects with 100% client satisfaction.",
  },
  {
    q: "What software does Drafinity use?",
    a: "We use AutoCAD, Revit, ArchiCAD, SketchUp, 3ds Max, V-Ray, Lumion, Enscape, BIM 360, Navisworks, ETABS, SAP2000, RISA-3D, STAAD.Pro, Civil 3D, and MicroStation.",
  },
  {
    q: "Where is Drafinity located?",
    a: "Drafinity LLC is headquartered at 1209 Mountain Road Pl NE, Albuquerque, NM 87110, and provides remote drafting and documentation support to clients across the United States.",
  },
];
