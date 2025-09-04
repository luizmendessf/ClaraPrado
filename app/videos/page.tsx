"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, Tv } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Navigation from "@/components/navigation"
import ParticlesBackground from "@/components/particles-background"

// --- DADOS DOS VÍDEOS ATUALIZADOS COM SEUS LINKS ---
const videos = [
  {
    id: 1,
    title: "SSD incentiva participação de estudantes no debate competitivo - TV Alese",
    description: "A Sociedade Sergipana de Debates (SSD) busca promover e democratizar o debate competitivo entre universitários, desenvolvendo habilidades de comunicação e raciocínio lógico.",
    thumbnail: "https://i.ytimg.com/vi/0dvs-S07Ogc/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=0dvs-S07Ogc",
    duration: "08:50",
    category: "Entrevista",
    date: "25 Ago 2023"
  },
  {
    id: 2,
    title: "Entrevista da SSD concedida à TV Sergipe",
    description: "O projeto da Sociedade Sergipana de Debates (SSD) oferece aulas online e gratuitas para desenvolver a oratória e o raciocínio lógico dos estudantes.",
    thumbnail: "https://i.ytimg.com/vi/R0XVPP8_1Aw/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=R0XVPP8_1Aw",
    duration: "06:58",
    category: "Entrevista",
    date: "18 Ago 2023"
  },
  {
    id: 3,
    title: "Entrevista para a Rádio Boca da Mata",
    description: "Ana Clara e Ana Elisa, da Sociedade Sergipana de Debates, falam sobre como os debates competitivos ajudam a desenvolver habilidades de comunicação e confiança.",
    thumbnail: "https://i.ytimg.com/vi/UYNHFLWrOd0/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=UYNHFLWrOd0",
    duration: "27:46",
    category: "Entrevista",
    date: "10 Jul 2023"
  },
  {
    id: 4,
    title: "Formação temática SSD - Oriente Médio",
    description: "Uma visão abrangente sobre o Oriente Médio, abordando o contexto histórico, político, os principais conflitos e temas recorrentes em debates competitivos.",
    thumbnail: "https://i.ytimg.com/vi/44joQNQQ0hU/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=44joQNQQ0hU",
    duration: "35:23",
    category: "Palestra",
    date: "05 Jun 2023"
  },
  {
    id: 5,
    title: "CMDLP 2025 – Rodada 7 | Debate Competitivo",
    description: "Um debate competitivo que explora a eficácia e a natureza dos movimentos políticos em comparação com os partidos políticos tradicionais.",
    thumbnail: "https://i.ytimg.com/vi/qyd2gSQzdTg/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=qyd2gSQzdTg",
    duration: "01:05:59",
    category: "Debate",
    date: "01 Maio 2023"
  }
]

export default function VideosPage() {
  const [playingVideoId, setPlayingVideoId] = useState<number | null>(null);

  const getEmbedUrl = (url: string) => {
    const videoIdMatch = url.match(/(?:v=|\/)([a-zA-Z0-9_-]{11})(?:\?|&|$)/);
    const videoId = videoIdMatch ? videoIdMatch[1] : null;
    if (!videoId) return "";
    return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  };

  return (
    <>
      <Navigation />
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow">
          {/* HERO SECTION */}
          <section className="relative pt-40 pb-20 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 via-neutral-900/70 to-white z-0"></div>
            <ParticlesBackground />
            <div className="relative z-10 container mx-auto px-6 lg:px-12">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="text-white space-y-6">
                  <div className="inline-flex items-center px-4 py-2 bg-white/10 border border-white/20 rounded-full backdrop-blur-sm">
                    <Tv className="h-4 w-4 text-white mr-2" />
                    <span className="text-sm font-medium text-white">Conteúdo Educativo</span>
                  </div>
                  <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                    Vídeos e
                    <span className="block text-gray-300">Entrevistas</span>
                  </h1>
                  <p className="text-xl text-gray-200 max-w-2xl">
                    Acompanhe entrevistas, debates e palestras sobre temas relevantes do direito brasileiro. Conteúdo educativo e esclarecedor.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <Button size="lg" className="bg-white hover:bg-gray-200 text-gray-900 font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                      <Tv className="h-5 w-5 mr-2" />
                      Ver Todos os Vídeos
                    </Button>
                    <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm">
                      Inscrever-se no Canal
                    </Button>
                  </div>
                </div>
                <div className="flex justify-center lg:justify-end">
                  <div className="relative group w-[450px] h-[550px]">
                    <div className="absolute inset-0 bg-zinc-800 rounded-2xl transform -rotate-3 transition-all duration-300 group-hover:scale-105 group-hover:-rotate-2 shadow-lg"></div>
                    <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl transform rotate-2 transition-all duration-300 group-hover:scale-105 group-hover:rotate-0">
                      <Image
                        src="/images/IMG_2142.JPG"
                        alt="Clara Prado em apresentação"
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

          {/* VIDEOS SECTION */}
          <section className="py-24 bg-gray-50 relative z-10">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Vídeos Recentes
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Explore nosso conteúdo educativo sobre direito, com entrevistas, debates e palestras que esclarecem temas importantes.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {videos.map((video) => (
                  <Card key={video.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden rounded-2xl">
                    <div className="relative aspect-video bg-gray-200 overflow-hidden">
                      {playingVideoId === video.id ? (
                        <iframe
                          src={getEmbedUrl(video.url)}
                          title={video.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full"
                        ></iframe>
                      ) : (
                        <>
                          <Image
                            src={video.thumbnail}
                            alt={video.title}
                            layout="fill"
                            objectFit="cover"
                            className="group-hover:scale-105 transition-transform duration-300"
                          />
                          <div
                            className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/40 transition-colors duration-300 cursor-pointer"
                            onClick={() => setPlayingVideoId(video.id)}
                          >
                            <div className="bg-white/90 rounded-full p-3 group-hover:scale-110 transition-transform duration-300">
                              <Play className="h-6 w-6 text-gray-900" fill="currentColor" />
                            </div>
                          </div>
                          <div className="absolute bottom-3 right-3 bg-black/80 text-white px-2 py-1 rounded text-sm font-medium">
                            {video.duration}
                          </div>
                        </>
                      )}
                    </div>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <Badge variant="secondary">{video.category}</Badge>
                          <span className="text-gray-500 text-sm">{video.date}</span>
                        </div>
                        <h3
                          className="text-lg font-semibold text-gray-900 line-clamp-2 hover:text-gray-600 transition-colors cursor-pointer"
                          onClick={() => setPlayingVideoId(video.id)}
                        >
                          {video.title}
                        </h3>
                        <p className="text-gray-600 text-sm line-clamp-3">
                          {video.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-20">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Mantenha-se Atualizado
                </h3>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  Inscreva-se em nosso canal do YouTube para receber as últimas entrevistas e debates sobre direito.
                </p>
                <Button asChild size="lg" className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <Link href="https://www.youtube.com/@tvalese" target="_blank">
                    <Tv className="h-5 w-5 mr-2" />
                    Inscrever-se no YouTube
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-gray-200 py-12 bg-gray-50 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center">
                <Link href="/">
                  <Image
                    src="/images/clara-logo.png"
                    alt="Clara Prado Advocacia"
                    width={150}
                    height={50}
                    className="h-6 w-auto"
                  />
                </Link>
              </div>
              <div className="flex items-center space-x-6">
                <Link href="/publications" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                  Publicações
                </Link>
                <Link href="/contact" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                  Contato
                </Link>
              </div>
              <p className="text-sm text-gray-500">© 2025 Clara Prado Advocacia. Todos os direitos reservados.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}