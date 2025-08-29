import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import Link from "next/link"
import { Scale, Award, Users, BookOpen, Phone, Mail, MapPin, Star } from "lucide-react"
import type { Metadata } from "next"
import ParticlesBackground from "@/components/particles-background"
export const metadata: Metadata = {
  title: "Clara Prado | Advocacia de Excelência",
  description:
    "Clara Prado - Advocacia especializada com excelência e dedicação. Expertise jurídica de alto nível com mais de 4 anos de experiência em assessoria jurídica.",
  openGraph: {
    title: "Clara Prado | Advocacia de Excelência",
    description:
      "Advocacia especializada com excelência e dedicação. Expertise jurídica de alto nível.",
    images: ["/images/clara-presentation.jpg"],
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 relative">
      <ParticlesBackground />
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Image
                src="/images/clara-logo.png"
                alt="Clara Prado Advocacia"
                width={200}
                height={70}
                className="h-10 w-auto"
              />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#about" className="text-slate-700 hover:text-amber-600 transition-all duration-300 font-medium">
                Sobre
              </Link>
              <Link href="#expertise" className="text-slate-700 hover:text-amber-600 transition-all duration-300 font-medium">
                Expertise
              </Link>
              <Link href="#achievements" className="text-slate-700 hover:text-amber-600 transition-all duration-300 font-medium">
                Conquistas
              </Link>
              <Link href="#contact" className="text-slate-700 hover:text-amber-600 transition-all duration-300 font-medium">
                Contato
              </Link>
              <Button className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                Consulta Jurídica
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-amber-50 border border-amber-200 rounded-full">
                  <Scale className="w-4 h-4 text-amber-600 mr-2" />
                  <span className="text-amber-800 text-sm font-medium">Advocacia de Excelência</span>
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                  Clara Prado
                  <span className="block text-4xl lg:text-5xl text-amber-600 mt-2">Advocacia</span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
                  Expertise jurídica de alto nível com dedicação excepcional. Mais de 4 anos de experiência 
                  oferecendo soluções jurídicas estratégicas e personalizadas.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                  Agendar Consulta
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 rounded-full transition-all duration-300">
                  Conhecer Expertise
                </Button>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-900">4+</div>
                  <div className="text-sm text-slate-600">Anos de Experiência</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-900">100%</div>
                  <div className="text-sm text-slate-600">Dedicação</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-900">★★★★★</div>
                  <div className="text-sm text-slate-600">Excelência</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/images/clara-presentation.jpg"
                  alt="Clara Prado"
                  width={600}
                  height={700}
                  className="rounded-2xl shadow-2xl object-cover w-full h-[600px]"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-full h-full bg-gradient-to-br from-amber-200 to-amber-300 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <Image
                src="/images/clara-courtroom.jpg"
                alt="Clara Prado no tribunal"
                width={600}
                height={500}
                className="rounded-2xl shadow-xl object-cover w-full h-[500px]"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-slate-200">
                <div className="flex items-center space-x-3">
                  <Award className="w-8 h-8 text-amber-600" />
                  <div>
                    <div className="font-bold text-slate-900">Nota Máxima</div>
                    <div className="text-sm text-slate-600">Estudante de Direito</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-slate-900">
                  Excelência em 
                  <span className="text-amber-600">Advocacia</span>
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Com uma trajetória acadêmica exemplar e mais de 4 anos de experiência prática, 
                  Clara Prado combina conhecimento teórico sólido com expertise prática para 
                  oferecer soluções jurídicas de alto nível.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Especializada em assessoria jurídica estratégica, Clara se destaca pela 
                  dedicação excepcional aos clientes e pela busca constante da excelência 
                  em cada caso.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-slate-50 p-6 rounded-xl">
                  <Users className="w-8 h-8 text-amber-600 mb-3" />
                  <h3 className="font-bold text-slate-900 mb-2">Atendimento Personalizado</h3>
                  <p className="text-sm text-slate-600">Cada cliente recebe atenção dedicada e soluções customizadas</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl">
                  <BookOpen className="w-8 h-8 text-amber-600 mb-3" />
                  <h3 className="font-bold text-slate-900 mb-2">Conhecimento Profundo</h3>
                  <p className="text-sm text-slate-600">Formação acadêmica de excelência e atualização constante</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Áreas de <span className="text-amber-600">Expertise</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Especialização focada em áreas estratégicas do direito, oferecendo 
              soluções jurídicas abrangentes e de alta qualidade.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Scale className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Direito Trabalhista</h3>
                <p className="text-slate-600">Assessoria completa em relações trabalhistas e direitos dos trabalhadores</p>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Pesquisa Jurídica</h3>
                <p className="text-slate-600">Análise aprofundada e pesquisa especializada para casos complexos</p>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Consultoria Jurídica</h3>
                <p className="text-slate-600">Orientação estratégica e consultoria especializada para empresas e pessoas físicas</p>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Análise de Casos</h3>
                <p className="text-slate-600">Avaliação detalhada e estratégica de casos jurídicos complexos</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-slate-900">
                  Conquistas e <span className="text-amber-600">Reconhecimento</span>
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Uma trajetória marcada pela excelência acadêmica e profissional, 
                  com reconhecimento em tribunais de destaque e resultados excepcionais.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Nota Máxima Acadêmica</h3>
                    <p className="text-slate-600">Desempenho excepcional durante toda a formação em Direito, demonstrando dedicação e excelência acadêmica.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">4+ Anos de Experiência</h3>
                    <p className="text-slate-600">Sólida experiência em assessoria jurídica com atuação em tribunais de destaque e casos de alta complexidade.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Reconhecimento Profissional</h3>
                    <p className="text-slate-600">Reconhecida pela dedicação excepcional e resultados consistentes na advocacia especializada.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/clara-outdoor.jpg"
                alt="Clara Prado"
                width={600}
                height={600}
                className="rounded-2xl shadow-xl object-cover w-full h-[600px]"
              />
              <div className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-white">
                  Entre em <span className="text-amber-400">Contato</span>
                </h2>
                <p className="text-xl text-slate-300 leading-relaxed">
                  Pronta para oferecer a assessoria jurídica que você precisa. 
                  Entre em contato para uma consulta personalizada.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Telefone</h3>
                    <p className="text-slate-300">(11) 99999-9999</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Email</h3>
                    <p className="text-slate-300">contato@claraprado.adv.br</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Localização</h3>
                    <p className="text-slate-300">São Paulo, SP</p>
                  </div>
                </div>
              </div>
            </div>
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Solicite uma Consulta</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <Input 
                      placeholder="Nome" 
                      className="bg-white/10 border-white/20 text-white placeholder:text-slate-300"
                    />
                    <Input 
                      placeholder="Sobrenome" 
                      className="bg-white/10 border-white/20 text-white placeholder:text-slate-300"
                    />
                  </div>
                  <Input 
                    type="email" 
                    placeholder="Email" 
                    className="bg-white/10 border-white/20 text-white placeholder:text-slate-300"
                  />
                  <Input 
                    placeholder="Telefone" 
                    className="bg-white/10 border-white/20 text-white placeholder:text-slate-300"
                  />
                  <Textarea 
                    placeholder="Descreva sua necessidade jurídica" 
                    rows={4}
                    className="bg-white/10 border-white/20 text-white placeholder:text-slate-300"
                  />
                  <Button className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                    Enviar Solicitação
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex items-center">
              <Image
                src="/images/clara-logo.png"
                alt="Clara Prado Advocacia"
                width={180}
                height={60}
                className="h-8 w-auto"
              />
            </div>
            <div className="flex items-center space-x-8">
              <Link href="/content" className="text-slate-400 hover:text-amber-400 transition-colors font-medium">
                Conteúdo
              </Link>
              <Link href="#contact" className="text-slate-400 hover:text-amber-400 transition-colors font-medium">
                Contato
              </Link>
              <Link href="#about" className="text-slate-400 hover:text-amber-400 transition-colors font-medium">
                Sobre
              </Link>
            </div>
            <p className="text-slate-400 text-sm">© 2025 Clara Prado Advocacia. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
