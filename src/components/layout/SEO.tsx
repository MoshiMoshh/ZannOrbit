import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
}

export function SEO({
  title = 'Zann. — Premium Full Stack Developer',
  description = 'I build modern, fast and scalable websites with premium user experiences.',
  url = 'https://zannvoid.my.id', // ASUMSI domain
  image = 'https://zann.dev/og-image.jpg',
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
          "name": "Zann",
          "url": url,
          "jobTitle": "Full Stack Web Developer",
          "sameAs": [
            "https://github.com/zannvoid",
            "https://linkedin.com/in/Bendzanu Kamagifi"
          ]
        })}
      </script>
    </Helmet>
  );
}
