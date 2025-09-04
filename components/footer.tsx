import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-16 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
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
              <Link href="/" className="block text-gray-600 hover:text-gray-900 transition-colors">
                Início
              </Link>
              <Link href="/publications" className="block text-gray-600 hover:text-gray-900 transition-colors">
                Publicações
              </Link>
              <Link href="/curriculum" className="block text-gray-600 hover:text-gray-900 transition-colors">
                Curriculum
              </Link>
              <Link href="/videos" className="block text-gray-600 hover:text-gray-900 transition-colors">
                Vídeos
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
  )
}
