export default function StructuredData() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://www.loft-insulation-services-uk.com/",
    "name": "Loft Insulation Services UK",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.loft-insulation-services-uk.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Free Loft Insulation UK",
    "image": "https://www.loftinsulationservicesuk.com/images/free-loft-insulation.jpg",
    "description": "Government-backed free loft insulation service in the UK, helping homeowners save on energy bills with expert installation.",
    "brand": {
      "@type": "Brand",
      "name": "Loft Insulation Services UK"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "150",
      "reviewCount": "45"
    }
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Loft Insulation Services UK",
    "image": "https://www.loft-insulation-services-uk.com/image.png",
    "@id": "home",
    "url": "https://www.loft-insulation-services-uk.com/",
    "telephone": "+44-123-456-789",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 High Street",
      "addressLocality": "London",
      "postalCode": "SW1A 1AA",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "51.5072",
      "longitude": "-0.1276"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.facebook.com/L4RGINDIA/",
      "https://twitter.com/L4rgindia",
      "https://www.instagram.com/l4rgllc/",
      "https://www.youtube.com/c/L4RGINDIA",
      "https://in.linkedin.com/company/l4rgindia",
      "https://in.pinterest.com/L4RGINDIA/",
      "https://l4rgcompany.quora.com/",
      "https://www.loft-insulation-services-uk.com/"
    ]
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Free Loft Insulation UK",
    "description": "Government-backed free loft insulation services in the UK to help homeowners reduce energy bills and improve energy efficiency.",
    "url": "https://www.loft-insulation-services-uk.com/",
    "inLanguage": "en-GB",
    "isPartOf": {
      "@type": "WebSite",
      "url": "https://www.loft-insulation-services-uk.com/",
      "name": "Free Loft Insulation UK"
    }
  };

  const employerRatingSchema = {
    "@context": "https://schema.org/",
    "@type": "EmployerAggregateRating",
    "itemReviewed": {
      "@type": "Organization",
      "name": "Loft Insulation Services UK",
      "sameAs": "https://www.loft-insulation-services-uk.com/"
    },
    "ratingValue": "4.9",
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": "787543"
  };

  const productAudienceSchema = {
    "@context": "http://schema.org",
    "@id": "#product",
    "@type": "Product",
    "name": "Free Loft Insulation UK",
    "description": "Government-backed free loft insulation service for UK homeowners, helping reduce energy bills with expert installation.",
    "url": "https://www.loft-insulation-services-uk.com/",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "68654"
    },
    "audience": {
      "@type": "audience",
      "description": "Homeowners and property managers in the UK seeking professional loft insulation services.",
      "audienceType": "UK Homeowners aged 60-80"
    }
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "name": "Free Loft Insulation UK",
    "url": "https://www.loft-insulation-services-uk.com/",
    "image": "https://www.loft-insulation-services-uk.com/image.png",
    "author": "Mike",
    "reviewBody": "The team at Loft Insulation Services UK was fantastic. They arrived on time, completed the loft insulation quickly, and left the place clean. I've already noticed a big difference in warmth and reduced heating bills.",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "4.9"
    },
    "itemReviewed": {
      "@type": "LocalBusiness",
      "name": "Free Loft Insulation UK",
      "priceRange": "200",
      "image": "https://www.loftinsulationservicesuk.com/images/free-loft-insulation.jpg",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 High Street",
        "addressLocality": "London",
        "postalCode": "SW1A 1AA",
        "addressCountry": "GB"
      }
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who is eligible for free loft insulation in the UK?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Homeowners in the UK may qualify for free loft insulation under government energy-saving schemes if they meet certain criteria, such as low income or receiving specific benefits."
        }
      },
      {
        "@type": "Question",
        "name": "How long does loft insulation installation take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most loft insulation installations are completed within 2–4 hours, depending on the property size and existing insulation."
        }
      },
      {
        "@type": "Question",
        "name": "Will loft insulation reduce my energy bills?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, proper loft insulation can significantly reduce heat loss, helping to cut your energy bills by up to 25% annually."
        }
      },
      {
        "@type": "Question",
        "name": "How long does loft insulation last?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "High-quality loft insulation can last for more than 40 years, maintaining its effectiveness with minimal maintenance."
        }
      },
      {
        "@type": "Question",
        "name": "Is there any cost for the survey?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, we offer a free survey to assess your property and confirm your eligibility for free loft insulation."
        }
      }
    ]
  };

  const qaPageSchema = {
    "@context": "https://schema.org",
    "@type": "QAPage",
    "mainEntity": {
      "@type": "Question",
      "name": "How can I get free loft insulation in the UK?",
      "text": "I want to know the eligibility process and application steps for free loft insulation in the UK.",
      "answerCount": 1,
      "upvoteCount": 15,
      "dateCreated": "2025-08-08",
      "author": {
        "@type": "Organization",
        "name": "Free Loft Insulation UK"
      },
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can apply for free loft insulation through the UK government's ECO scheme or local council energy-saving programs. Eligibility usually depends on your income level, benefits received, or property type. A free survey will be carried out to check suitability before installation.",
        "dateCreated": "2025-08-08",
        "upvoteCount": 12,
        "url": "https://www.loft-insulation-services-uk.com/",
        "author": {
          "@type": "Person",
          "name": "Smith"
        }
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(employerRatingSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productAudienceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(reviewSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(qaPageSchema),
        }}
      />
    </>
  );
}
