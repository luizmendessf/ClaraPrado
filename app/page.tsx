"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import Link from "next/link"
import { Scale, Award, Users, BookOpen, Phone, Mail, MapPin, Star, Trophy, GraduationCap, Building } from "lucide-react"
import ParticlesBackground from "@/components/particles-background"

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white relative">
      <ParticlesBackground />
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-lg border-b border-gray-200/60 shadow-lg" 
          : "bg-transparent backdrop-blur-sm"
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Image
                src="/images/clara-logo.png"
                alt="Clara Prado Advocacia"
                width={180}
                height={60}
                className={`h-10 w-auto transition-all duration-300 rounded-lg ${"bg-transparent"}`}
              />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#about" className={`transition-all duration-300 font-medium ${
                isScrolled ? "text-gray-700 hover:text-gray-900" : "text-white hover:text-gray-200"
              }`}>
                Sobre
              </Link>
              <Link href="#achievements" className={`transition-all duration-300 font-medium ${
                isScrolled ? "text-gray-700 hover:text-gray-900" : "text-white hover:text-gray-200"
              }`}>
                Conquistas
              </Link>
              <Link href="#contact" className={`transition-all duration-300 font-medium ${
                isScrolled ? "text-gray-700 hover:text-gray-900" : "text-white hover:text-gray-200"
              }`}>
                Contato
              </Link>
            </div>
            <Button className={`transition-all duration-300 rounded-full px-6 ${
              isScrolled 
                ? "bg-gray-900 hover:bg-gray-800 text-white" 
                : "bg-white hover:bg-gray-100 text-gray-900"
            }`}>
              Fale Conosco
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Full Screen Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/clara-outdoor.jpg"
            alt="Clara Prado"
            fill
            className="object-cover"
            priority
          />
          {/* Gradient Overlay - darker on left, lighter on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
        </div>
        
        {/* Content */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
          <div className="max-w-2xl">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                  Excelência
                  <span className="block text-gray-200">Jurídica</span>
                </h1>
                <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed">
                  Dedicação e resultados comprovados com mais de 4 anos transformando desafios jurídicos em soluções eficazes
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                  Entre em Contato
                </Button>
                <Button variant="outline" size="lg" className="border-white text-black bg-white/90 hover:bg-white hover:text-gray-900 px-8 py-4 text-lg rounded-full transition-all duration-300">
                  Saiba Mais
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gray-900 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gray-700 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div className="space-y-8">
                <div className="inline-flex items-center px-4 py-2 bg-gray-900/5 border border-gray-200 rounded-full">
                  <Scale className="h-4 w-4 text-gray-700 mr-2" />
                  <span className="text-sm font-medium text-gray-700">Sobre Clara Prado</span>
                </div>
                <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Advocacia com
                  <span className="block bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
                    Propósito
                  </span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed font-light">
                  Com mais de 4 anos de experiência, Clara Prado se dedica a oferecer soluções jurídicas 
                  inovadoras e eficazes. Sua abordagem combina conhecimento técnico aprofundado com 
                  atendimento humanizado, garantindo que cada cliente receba a atenção e dedicação que merece.
                </p>
              </div>
              
              <div className="grid gap-8">
                <div className="group flex items-start space-x-6 p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200/50 hover:shadow-xl hover:border-gray-300/50 transition-all duration-500">
                  <div className="bg-gradient-to-br from-gray-900 to-gray-700 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    <Scale className="h-7 w-7 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-900">Expertise Multidisciplinar</h3>
                    <p className="text-gray-600 leading-relaxed">Conhecimento aprofundado em múltiplas áreas do direito com foco em resultados</p>
                  </div>
                </div>
                
                <div className="group flex items-start space-x-6 p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200/50 hover:shadow-xl hover:border-gray-300/50 transition-all duration-500">
                  <div className="bg-gradient-to-br from-gray-900 to-gray-700 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    <Award className="h-7 w-7 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-900">Resultados Comprovados</h3>
                    <p className="text-gray-600 leading-relaxed">Histórico de sucesso em casos complexos com soluções estratégicas</p>
                  </div>
                </div>
                
                <div className="group flex items-start space-x-6 p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200/50 hover:shadow-xl hover:border-gray-300/50 transition-all duration-500">
                  <div className="bg-gradient-to-br from-gray-900 to-gray-700 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    <Users className="h-7 w-7 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-900">Atendimento Personalizado</h3>
                    <p className="text-gray-600 leading-relaxed">Dedicação exclusiva a cada cliente com acompanhamento integral</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative h-[600px] group">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 to-transparent rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                <Image
                  src="/images/clara-presentation.jpg"
                  alt="Clara Prado apresentando"
                  fill
                  className="object-cover rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-3xl"></div>
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">4+</div>
                  <div className="text-sm text-gray-600 font-medium">Anos de Experiência</div>
                </div>
              </div>
              
              <div className="absolute -top-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">100+</div>
                  <div className="text-sm text-gray-600 font-medium">Casos Resolvidos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-32 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-6 mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-gray-900/5 border border-gray-200 rounded-full">
              <Trophy className="h-4 w-4 text-gray-700 mr-2" />
              <span className="text-sm font-medium text-gray-700">Conquistas e Reconhecimento</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Trajetória de
              <span className="block bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
                Excelência
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Uma carreira marcada por conquistas acadêmicas e profissionais que refletem dedicação e competência
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Achievement Cards */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/5 to-gray-700/5 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
              <Card className="relative border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden">
                <CardContent className="p-8 text-center space-y-6">
                  <div className="bg-gradient-to-br from-gray-900 to-gray-700 p-6 rounded-2xl mx-auto w-fit group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="h-10 w-10 text-white" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-gray-900">Formação Acadêmica</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Graduação em Direito com especialização em áreas estratégicas do direito empresarial
                    </p>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <Badge variant="outline" className="text-gray-700 border-gray-300">
                      Excelência Acadêmica
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/5 to-gray-700/5 rounded-3xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300"></div>
              <Card className="relative border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden">
                <CardContent className="p-8 text-center space-y-6">
                  <div className="bg-gradient-to-br from-gray-900 to-gray-700 p-6 rounded-2xl mx-auto w-fit group-hover:scale-110 transition-transform duration-300">
                    <Building className="h-10 w-10 text-white" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-gray-900">Experiência Profissional</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Mais de 4 anos atuando em casos complexos com resultados consistentes e reconhecidos
                    </p>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <Badge variant="outline" className="text-gray-700 border-gray-300">
                      Resultados Comprovados
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="group relative md:col-span-2 lg:col-span-1">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/5 to-gray-700/5 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
              <Card className="relative border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden">
                <CardContent className="p-8 text-center space-y-6">
                  <div className="bg-gradient-to-br from-gray-900 to-gray-700 p-6 rounded-2xl mx-auto w-fit group-hover:scale-110 transition-transform duration-300">
                    <Star className="h-10 w-10 text-white" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-gray-900">Reconhecimento</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Reconhecida pela qualidade do atendimento e pela eficiência na resolução de casos
                    </p>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <Badge variant="outline" className="text-gray-700 border-gray-300">
                      Excelência Profissional
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Stats Section */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center space-y-2">
              <div className="text-4xl lg:text-5xl font-bold text-gray-900">4+</div>
              <div className="text-gray-600 font-medium">Anos de Experiência</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl lg:text-5xl font-bold text-gray-900">100+</div>
              <div className="text-gray-600 font-medium">Casos Resolvidos</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl lg:text-5xl font-bold text-gray-900">95%</div>
              <div className="text-gray-600 font-medium">Taxa de Sucesso</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl lg:text-5xl font-bold text-gray-900">24h</div>
              <div className="text-gray-600 font-medium">Tempo de Resposta</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-10 w-72 h-72 bg-gray-900 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-gray-700 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-6 mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-gray-900/5 border border-gray-200 rounded-full">
              <Phone className="h-4 w-4 text-gray-700 mr-2" />
              <span className="text-sm font-medium text-gray-700">Entre em Contato</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Vamos Conversar
              <span className="block bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
                Sobre Seu Caso
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Estou aqui para ajudar você a encontrar as melhores soluções jurídicas. Entre em contato e vamos discutir como posso auxiliar em seu caso.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Informações de Contato</h3>
                <p className="text-gray-600 leading-relaxed">
                  Disponível para atendimento personalizado e consultas. Respondo rapidamente a todas as mensagens.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200/50">
                  <div className="bg-gradient-to-br from-gray-900 to-gray-700 p-3 rounded-xl">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-semibold text-gray-900">Telefone</h4>
                    <p className="text-gray-600">(11) 99999-9999</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200/50">
                  <div className="bg-gradient-to-br from-gray-900 to-gray-700 p-3 rounded-xl">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">contato@claraprado.adv.br</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200/50">
                  <div className="bg-gradient-to-br from-gray-900 to-gray-700 p-3 rounded-xl">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-semibold text-gray-900">Localização</h4>
                    <p className="text-gray-600">São Paulo, SP</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/5 to-transparent rounded-3xl transform rotate-1"></div>
              <Card className="relative border-0 shadow-2xl bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden">
                <CardContent className="p-10">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8">Envie uma Mensagem</h3>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Nome Completo</label>
                      <Input 
                        placeholder="Seu nome completo" 
                        className="border-gray-300 focus:border-gray-500 rounded-xl h-12 bg-white/50" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Email</label>
                      <Input 
                        placeholder="seu@email.com" 
                        type="email" 
                        className="border-gray-300 focus:border-gray-500 rounded-xl h-12 bg-white/50" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Telefone</label>
                      <Input 
                        placeholder="(11) 99999-9999" 
                        type="tel" 
                        className="border-gray-300 focus:border-gray-500 rounded-xl h-12 bg-white/50" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Mensagem</label>
                      <Textarea 
                        placeholder="Descreva seu caso ou dúvida..." 
                        rows={5} 
                        className="border-gray-300 focus:border-gray-500 rounded-xl bg-white/50" 
                      />
                    </div>
                    <Button className="w-full bg-gradient-to-r from-gray-900 to-gray-700 hover:from-gray-800 hover:to-gray-600 text-white py-4 rounded-xl text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
                      Enviar Mensagem
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-16 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Logo and Description */}
            <div className="space-y-6">
              <Image
                src="/images/clara-logo.png"
                alt="Clara Prado Advocacia"
                width={180}
                height={60}
                className="h-12 w-auto"
              />
              <p className="text-gray-600 leading-relaxed">
                Advocacia especializada com foco em resultados e atendimento personalizado. 
                Transformando desafios jurídicos em soluções eficazes.
              </p>
              <div className="flex space-x-4">
                <div className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors cursor-pointer">
                  <Phone className="h-5 w-5 text-gray-600" />
                </div>
                <div className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors cursor-pointer">
                  <Mail className="h-5 w-5 text-gray-600" />
                </div>
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-bold text-gray-900">Links Rápidos</h4>
              <div className="space-y-3">
                <Link href="#about" className="block text-gray-600 hover:text-gray-900 transition-colors">
                  Sobre Clara Prado
                </Link>
                <Link href="#achievements" className="block text-gray-600 hover:text-gray-900 transition-colors">
                  Conquistas
                </Link>
                <Link href="#contact" className="block text-gray-600 hover:text-gray-900 transition-colors">
                  Contato
                </Link>
                <Link href="/content" className="block text-gray-600 hover:text-gray-900 transition-colors">
                  Conteúdo
                </Link>
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-lg font-bold text-gray-900">Contato</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-gray-600" />
                  <span className="text-gray-600">(11) 99999-9999</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-gray-600" />
                  <span className="text-gray-600">contato@claraprado.adv.br</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-gray-600" />
                  <span className="text-gray-600">São Paulo, SP</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-500 text-sm">
                © 2025 Clara Prado Advocacia. Todos os direitos reservados.
              </p>
              <div className="flex items-center space-x-6">
                <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
                  Política de Privacidade
                </Link>
                <Link href="/terms" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
                  Termos de Uso
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
