import "./globals.css";
import { Poppins } from "next/font/google";
import type { Metadata } from "next";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Criação de Sites Profissionais | Mi7anda Agência de Marketing",
  description:
    "A Mi7anda Agência de Marketing cria sites modernos, rápidos e otimizados para vendas. Transforme sua presença online com landing pages, e-commerces e sites profissionais de alto desempenho.",
  keywords: [
    "Mi7anda Agência de Marketing",
    "criação de sites",
    "landing page profissional",
    "sites que vendem",
    "agência de marketing digital",
    "criação de landing page",
    "e-commerce profissional",
    "desenvolvimento web porto velho",
    "Giovanni Miranda desenvolvedor",
  ],
  openGraph: {
    title: "Mi7anda Agência de Marketing | Sites Profissionais e Estratégicos",
    description:
      "Sites modernos e otimizados para vendas. A Mi7anda Agência de Marketing transforma sua marca em autoridade digital.",
    url: "https://www.mi7anda.com.br/",
    siteName: "Mi7anda Agência de Marketing",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://www.mi7anda.com.br/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mi7anda Agência de Marketing — Criação de Sites e Landing Pages Profissionais",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mi7anda Agência de Marketing | Sites que vendem",
    description:
      "Criação de sites modernos, rápidos e otimizados para conversão. Fale com a Mi7anda Agência de Marketing.",
    images: ["https://www.mi7anda.com.br/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.mi7anda.com.br/",
  },
  metadataBase: new URL("https://www.mi7anda.com.br"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Schema Markup JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Mi7anda Agência de Marketing",
              image: "https://www.mi7anda.com.br/logo.png",
              url: "https://www.mi7anda.com.br",
              telephone: "+55 69 99978-7798",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Porto Velho",
                addressRegion: "RO",
                addressCountry: "BR",
              },
              description:
                "A Mi7anda Agência de Marketing é especializada em criação de sites profissionais, landing pages e e-commerces otimizados para conversão e SEO.",
              priceRange: "R$1000 - R$10000",
              sameAs: [
                "https://www.instagram.com/mi7anda",
                "https://www.facebook.com/mi7anda",
              ],
            }),
          }}
        />
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
