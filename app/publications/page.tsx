import Footer from "@/components/footer"
"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, ExternalLink, Calendar, MapPin } from "lucide-react"
import Image from "next/image"
import Navigation from "@/components/navigation"
import ParticlesBackground from "@/components/particles-background"

export default function PublicationsPage() {
  const publications = [
    {
      title: "Municipal Finance Manual Book",
      year: "2025",
      publisher: "University of Coimbra Press, Portugal",
      summary: "Comprehensive guide to municipal financial management and governance frameworks",
      type: "Book",
      country: "Portugal",
    },
    {
      title:
        "The Implementation of Value Added Tax: A Comparative Study between Brazil and Canada",
      year: "2024",
      publisher: "Academic Forum, BCBA – Canada",
      summary:
        "Comparative analysis of VAT implementation strategies and their economic impacts",
      type: "Academic Paper",
      country: "Canada",
    },
    {
      title: "Taxation in the Digital Age: Challenges and Perspectives in Brazil",
      year: "2024",
      publisher: "ASSAT Book – Brazil",
      summary:
        "Examination of digital taxation challenges and regulatory frameworks in Brazil",
      type: "Book Chapter",
      country: "Brazil",
    },
    {
      title:
        "E-Commerce and Data Protection in Digital Companies: The Impact of Emerging Technologies on Commerce",
      year: "2023",
      publisher: "Revista de Derecho Empresario – Argentina",
      summary:
        "Analysis of data protection regulations and their impact on digital commerce",
      type: "Journal Article",
      country: "Argentina",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <Navigation currentPage="publications" />

      {/* === HERO === */}
      <section className="relative pt-40 pb-20 flex items-center justify-center overflow-hidden">
        {/* Camada de fundo: gradiente escuro → branco para integrar com a próxima seção */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 via-neutral-900/70 to-white z-0"></div>
        <ParticlesBackground />
        
        <div className="relative z-10 container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Texto */}
            <div className="text-white space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 border border-white/20 rounded-full backdrop-blur-sm">
                <BookOpen className="h-4 w-4 text-white mr-2" />
                <span className="text-sm font-medium text-white">Academic Contributions</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Publications
                <span className="block text-gray-300">& Research</span>
              </h1>
              <p className="text-xl text-gray-200 max-w-2xl">
                Exploring international taxation, digital law, and comparative legal studies through academic
                research and publications across multiple jurisdictions.
              </p>
            </div>

            {/* Imagem com fundo de retângulo cinza, como no exemplo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative group w-[450px] h-[550px]">
                {/* O Retângulo Cinza de Fundo */}
                <div className="absolute inset-0 bg-zinc-800 rounded-2xl transform -rotate-3 transition-all duration-300 group-hover:scale-105 group-hover:-rotate-2 shadow-lg"></div>

                {/* A Imagem Principal */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl transform rotate-2 transition-all duration-300 group-hover:scale-105 group-hover:rotate-0">
                  <Image
                    src="/images/e804d39d-5d6b-4a8d-8250-1650d980dba1.jpg"
                    alt="Research presentation"
                    layout="fill"
                    objectFit="cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === Publications Grid === */}
      <section className="py-20 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid gap-8 md:gap-12">
            {publications.map((publication, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/5 to-gray-700/5 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                <Card className="relative border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden">
                  <CardContent className="p-8 lg:p-12">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8 space-y-6 lg:space-y-0">
                      <div className="flex-1 space-y-6">
                        <div className="space-y-4">
                          <div className="flex flex-wrap items-center gap-3">
                            <Badge variant="outline" className="text-gray-700 border-gray-300">
                              {publication.type}
                            </Badge>
                            <div className="flex items-center text-sm text-gray-500">
                              <Calendar className="h-4 w-4 mr-1" />
                              {publication.year}
                            </div>
                            <div className="flex items-center text-sm text-gray-500">
                              <MapPin className="h-4 w-4 mr-1" />
                              {publication.country}
                            </div>
                          </div>
                          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight group-hover:text-gray-700 transition-colors">
                            {publication.title}
                          </h3>
                          <p className="text-lg text-gray-600 font-medium">
                            {publication.publisher}
                          </p>
                          <p className="text-gray-600 leading-relaxed">
                            {publication.summary}
                          </p>
                        </div>
                      </div>
                      <div className="lg:w-auto flex lg:flex-col items-center lg:items-end space-x-4 lg:space-x-0 lg:space-y-4">
                        <div className="bg-gradient-to-br from-gray-900 to-gray-700 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                          <BookOpen className="h-8 w-8 text-white" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === CTA Section === */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-700 rounded-3xl transform rotate-1"></div>
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-700 rounded-3xl p-12 lg:p-16 text-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                    Interested in
                    <span className="block">Collaboration?</span>
                  </h2>
                  <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                    Open to research partnerships and academic collaborations in international law and digital governance.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8 py-4 rounded-2xl"
                  >
                    <ExternalLink className="h-5 w-5 mr-2" />
                    Contact Me
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-gray-900 font-semibold px-8 py-4 rounded-2xl"
                  >
                    <BookOpen className="h-5 w-5 mr-2" />
                    View Curriculum
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}