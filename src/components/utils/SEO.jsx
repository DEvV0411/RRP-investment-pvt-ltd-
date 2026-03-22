import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, name = "RRP Investments Private Limited", type = "website" }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={name} />
      
      {/* Twitter */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
