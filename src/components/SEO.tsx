import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string;
  type?: "website" | "article" | "service";
  schema?: object | object[];
  noindex?: boolean;
}

const SITE_URL = "https://drafinity.us";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

const SEO = ({
  title,
  description,
  path = "",
  image = DEFAULT_IMAGE,
  keywords,
  type = "website",
  schema,
  noindex = false,
}: SEOProps) => {
  const url = `${SITE_URL}${path}`;
  const fullTitle = title.includes("Drafinity") ? title : `${title} | Drafinity LLC`;
  const schemas = Array.isArray(schema) ? schema : schema ? [schema] : [];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />
      {noindex ? (
        <meta name="robots" content="noindex,nofollow" />
      ) : (
        <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
      )}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Drafinity LLC" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* AI / GEO crawlers — explicitly allow */}
      <meta name="GPTBot" content="index,follow" />
      <meta name="ChatGPT-User" content="index,follow" />
      <meta name="PerplexityBot" content="index,follow" />
      <meta name="ClaudeBot" content="index,follow" />
      <meta name="Google-Extended" content="index,follow" />
      <meta name="CCBot" content="index,follow" />

      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
