interface StructuredDataProps {
  type?: "LocalBusiness" | "Organization";
  name?: string;
  phone?: string;
  email?: string;
  address?: {
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry?: string;
  };
  url?: string;
}

const StructuredData = ({
  type = "LocalBusiness",
  name = "ServicePro",
  phone = "+1234567890",
  email = "info@servicepro.com",
  address = {
    streetAddress: "123 Main Street",
    addressLocality: "Your City",
    addressRegion: "ST",
    postalCode: "12345",
    addressCountry: "US",
  },
  url = "https://yourdomain.com",
}: StructuredDataProps) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": type,
    name: name,
    telephone: phone,
    email: email,
    address: {
      "@type": "PostalAddress",
      streetAddress: address.streetAddress,
      addressLocality: address.addressLocality,
      addressRegion: address.addressRegion,
      postalCode: address.postalCode,
      addressCountry: address.addressCountry,
    },
    url: url,
    priceRange: "$$",
    image: `${url}/og-image.jpg`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default StructuredData;
