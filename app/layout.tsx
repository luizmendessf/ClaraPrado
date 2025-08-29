import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "Clara Prado Advocacia | Assessoria Jurídica Especializada",
  description:
    "Assessoria jurídica especializada com Clara Prado. Advogada com nota máxima (4.0) e mais de 4 anos de experiência em tribunais de destaque. Especializada em direito trabalhista, pesquisa jurídica e gestão de projetos.",
  keywords: [
    "Clara Prado",
    "Advocacia",
    "Assessoria Jurídica",
    "Direito Trabalhista",
    "Pesquisa Jurídica",
    "Aracaju",
    "Sergipe",
    "Advogada",
    "Consultoria Jurídica",
    "Direito Digital",
    "Tributação",
  ],
  authors: [{ name: "Clara Prado" }],
  creator: "Clara Prado",
  publisher: "Clara Prado Advocacia",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://claraprado.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Clara Prado Advocacia | Assessoria Jurídica Especializada",
    description:
      "Assessoria jurídica especializada com Clara Prado. Mais de 4 anos de experiência em tribunais de destaque.",
    url: "https://claraprado.com",
    siteName: "Clara Prado Advocacia",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/clara-courtroom.jpg",
        width: 1200,
        height: 630,
        alt: "Clara Prado - Advocacia Especializada",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clara Prado Advocacia | Assessoria Jurídica Especializada",
    description:
      "Assessoria jurídica especializada com Clara Prado. Mais de 4 anos de experiência em tribunais de destaque.",
    images: ["/images/clara-courtroom.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>{children}</body>
    </html>
  )
}
