import { Helmet } from 'react-helmet-async';

interface PageSEOProps {
  title: string;
  description: string;
  path?: string;
}

export function PageSEO({ title, description, path = '/' }: PageSEOProps) {
  const canonical = `https://leosenderovsky.com.ar${path}`;

  return (
    <Helmet>
      <title>{title} | Leo Senderovsky</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={`${title} | Leo Senderovsky`} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content="/assets/img/social-preview.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${title} | Leo Senderovsky`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="/assets/img/social-preview.jpg" />
    </Helmet>
  );
}
