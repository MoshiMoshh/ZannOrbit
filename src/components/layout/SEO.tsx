import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
}

export function SEO({
  title = 'Zann. — Fullstack Developer',
  description = 'Fullstack developer — web cepat, automasi payment gateway, dan integrasi AI.',
  url = 'https://zannvoid.my.id',
  image = 'https://zannvoid.my.id/images/ZannEver.png',
}: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Schema.org */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Bendzanu Kamagifi",
          "alternateName": "Zann",
          "url": url,
          "jobTitle": "Fullstack Web Developer",
          "sameAs": [
            "https://github.com/MoshiMoshh",
            "https://linkedin.com/in/bendzanukamagifi"
          ]
        })}
      </script>
    </Helmet>
  );
}
