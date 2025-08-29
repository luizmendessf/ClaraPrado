import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Publicações e Conquistas",
  description:
    "Explore as publicações acadêmicas, prêmios e projetos de liderança de Clara Prado. Pesquisa jurídica de excelência e reconhecimento nacional e internacional.",
  openGraph: {
    title: "Publicações e Conquistas | Clara Prado Advocacia",
    description:
      "Publicações acadêmicas, prêmios e projetos de liderança que demonstram excelência jurídica e impacto social.",
    images: ["/images/clara-presentation.jpg"],
  },
}

export default function ContentPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/">
                <Image
                  src="/images/clara-logo.png"
                  alt="Clara Prado Advocacia"
                  width={180}
                  height={60}
                  className="h-8 w-auto"
                />
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/#about" className="text-foreground hover:text-muted-foreground transition-colors">
                Sobre
              </Link>
              <Link href="/#experience" className="text-foreground hover:text-muted-foreground transition-colors">
                Experiência
              </Link>
              <Link
                href="/content"
                className="text-foreground hover:text-muted-foreground transition-colors font-medium"
              >
                Conteúdo
              </Link>
              <Link href="/contact" className="text-foreground hover:text-muted-foreground transition-colors">
                Contato
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground text-balance">
                  Publicações e Conquistas
                </h1>
                <p className="text-xl lg:text-2xl text-muted-foreground text-balance">
                  Pesquisa acadêmica, liderança e reconhecimento nacional
                </p>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Explore minha produção acadêmica, projetos de liderança e conquistas que demonstram meu compromisso com
                a excelência jurídica e o impacto social.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] relative overflow-hidden rounded-lg">
                <Image
                  src="/images/clara-presentation.jpg"
                  alt="Clara Prado apresentando"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">Publicações Acadêmicas</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Pesquisas e artigos publicados em instituições de prestígio nacional e internacional
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-border">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <CardTitle className="text-xl text-balance">Manual de Finanças Municipais</CardTitle>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">2025</Badge>
                      <Badge variant="outline">Portugal</Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">University of Coimbra Press</p>
                <p className="text-muted-foreground leading-relaxed">
                  Obra abrangente sobre gestão financeira municipal, publicada pela prestigiosa editora da Universidade
                  de Coimbra.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <CardTitle className="text-xl text-balance">
                      A Implementação do Imposto sobre Valor Agregado: Estudo Comparativo Brasil-Canadá
                    </CardTitle>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">2024</Badge>
                      <Badge variant="outline">Canadá</Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">Academic Forum, BCBA</p>
                <p className="text-muted-foreground leading-relaxed">
                  Análise comparativa dos sistemas tributários brasileiro e canadense, publicada pela Brazil Canada Bar
                  Association.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <CardTitle className="text-xl text-balance">
                      Tributação na Era Digital: Desafios e Perspectivas no Brasil
                    </CardTitle>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">2024</Badge>
                      <Badge variant="outline">Brasil</Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">ASSAT Book</p>
                <p className="text-muted-foreground leading-relaxed">
                  Estudo sobre os impactos da digitalização no sistema tributário brasileiro e suas implicações futuras.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <CardTitle className="text-xl text-balance">
                      E-Commerce e Proteção de Dados: O Impacto das Tecnologias Emergentes
                    </CardTitle>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">2023</Badge>
                      <Badge variant="outline">Argentina</Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">Revista de Derecho Empresario</p>
                <p className="text-muted-foreground leading-relaxed">
                  Análise do impacto das tecnologias emergentes no comércio eletrônico e proteção de dados pessoais.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
              Prêmios e Reconhecimentos
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Conquistas que refletem excelência acadêmica e liderança nacional
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border">
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">Melhor Debatedor Novato Mundial</h3>
                  <p className="text-sm text-muted-foreground">Categoria Português - 2025</p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Reconhecimento internacional pela excelência em debates jurídicos em língua portuguesa.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">Vice-Campeã Nacional</h3>
                  <p className="text-sm text-muted-foreground">Campeonato Brasileiro de Debates - 2024</p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Segunda colocação na categoria novato do principal campeonato de debates do país.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">1º Lugar - Artigos Científicos</h3>
                  <p className="text-sm text-muted-foreground">Universidade de Coimbra - 2024</p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Primeiro lugar no concurso de artigos científicos da prestigiosa Faculdade de Direito de Coimbra.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">1º Lugar - Pesquisa Empírica</h3>
                  <p className="text-sm text-muted-foreground">XIII EPED - CAPES - 2024</p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Primeiro lugar na apresentação de artigo científico no XIII Encontro de Pesquisa Empírica em Direito.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">London Leadership Award</h3>
                  <p className="text-sm text-muted-foreground">WIFA - 2020</p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Reconhecimento internacional por liderança e potencial em competição londrina.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">GPA 4.0</h3>
                  <p className="text-sm text-muted-foreground">Excelência Acadêmica</p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Nota máxima mantida durante todo o curso de Direito, demonstrando consistência e dedicação.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Projects Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">Projetos de Liderança</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Iniciativas que impactaram milhares de estudantes e profissionais do direito
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-balance">Guia Jurídico</CardTitle>
                <p className="text-muted-foreground">Fundadora & Presidente | Junho 2025 – Presente</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Maior Plataforma do Brasil</Badge>
                  <Badge variant="outline">1000+ Estudantes</Badge>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Criação e desenvolvimento da maior plataforma online do Brasil para estudantes e profissionais de
                  direito, impactando a vida de mais de 1000 estudantes ao fornecer oportunidades jurídicas e aplicar
                  gestão de projetos e estratégia de mercado.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-balance">Sociedade Sergipana de Debates</CardTitle>
                <p className="text-muted-foreground">Fundadora & Presidente | Junho 2024 – Presente</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Primeira de Sergipe</Badge>
                  <Badge variant="outline">250+ Membros</Badge>
                  <Badge variant="outline">500+ Impactados</Badge>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Estabelecimento da primeira sociedade de debates do estado - a maior do Brasil apesar de ser do menor
                  estado do país - crescendo para mais de 250 membros e impactando a vida de mais de 500 estudantes em
                  apenas uma semana.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
              Interessado em Colaboração ou Consultoria?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Entre em contato para discutir oportunidades de pesquisa, palestras, consultoria jurídica ou projetos
              colaborativos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Entre em Contato</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/">Voltar ao Início</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
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
              <Link href="/content" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Conteúdo
              </Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contato
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">© 2025 Clara Prado Advocacia. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
