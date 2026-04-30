import { Helmet } from "react-helmet-async";

interface PageSEOProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
  type?: "website" | "article" | "profile";
  noindex?: boolean;
  keywords?: string;
}

const SITE_NAME = "Leo Senderovsky";
const BASE_URL = "https://leosenderovsky.com.ar";
const DEFAULT_OG_IMAGE = `${BASE_URL}/assets/img/og-social-preview.webp`; // 1200x630px
const DEFAULT_IMAGE_WIDTH = 1200;
const DEFAULT_IMAGE_HEIGHT = 630;

export function PageSEO({
  title,
  description,
  path = "/",
  image = DEFAULT_OG_IMAGE,
  imageWidth = DEFAULT_IMAGE_WIDTH,
  imageHeight = DEFAULT_IMAGE_HEIGHT,
  type = "website",
  noindex = false,
  keywords,
}: PageSEOProps) {
  const canonical = `${BASE_URL}${path}`;
  const fullTitle = `${title} | ${SITE_NAME}`;

  return (
    <Helmet>
      {/* ── Base ── */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonical} />
      <meta name="language" content="es" />
      <meta
        name="robots"
        content={
          noindex
            ? "noindex, nofollow"
            : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        }
      />

      {/* ── Autor y geo ── */}
      <meta name="author" content="Leo Aquiba Senderovsky" />
      <meta name="geo.region" content="AR-C" />
      <meta name="geo.placename" content="Buenos Aires, Argentina" />
      <meta name="ICBM" content="-34.6037, -58.3816" />

      {/* ── Open Graph ── */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content={String(imageWidth)} />
      <meta property="og:image:height" content={String(imageHeight)} />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:locale" content="es_AR" />
      <meta property="og:site_name" content={SITE_NAME} />

      {/* ── Twitter Card ── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@leosenderovsky" />
      <meta name="twitter:creator" content="@leosenderovsky" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={fullTitle} />
    </Helmet>
  );
}
