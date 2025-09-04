"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  
  const getCurrentPage = () => {
    if (pathname === "/") return "home"
    if (pathname === "/publications") return "publications"
    if (pathname === "/curriculum") return "curriculum"
    if (pathname === "/videos") return "videos"
    return ""
  }
  
  const currentPage = getCurrentPage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
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
            <Link href="/" className={`transition-all duration-300 font-medium ${
              isScrolled ? "text-gray-700 hover:text-gray-900" : "text-white hover:text-gray-200"
            } ${currentPage === "home" ? "font-bold" : ""}`}>
              Home
            </Link>
            <Link href="/publications" className={`transition-all duration-300 font-medium ${
              isScrolled ? "text-gray-700 hover:text-gray-900" : "text-white hover:text-gray-200"
            } ${currentPage === "publications" ? "font-bold" : ""}`}>
              Publications
            </Link>
            <Link href="/curriculum" className={`transition-all duration-300 font-medium ${
              isScrolled ? "text-gray-700 hover:text-gray-900" : "text-white hover:text-gray-200"
            } ${currentPage === "curriculum" ? "font-bold" : ""}`}>
              Curriculum
            </Link>
            <Link href="/videos" className={`transition-all duration-300 font-medium ${
              isScrolled ? "text-gray-700 hover:text-gray-900" : "text-white hover:text-gray-200"
            } ${currentPage === "videos" ? "font-bold" : ""}`}>
              Videos
            </Link>
          </div>
          <Link href="#contact">
          <Button className={`transition-all duration-300 rounded-full px-6 ${
            isScrolled 
              ? "bg-gray-900 hover:bg-gray-800 text-white" 
              : "bg-white hover:bg-gray-100 text-gray-900"
          }`}>
            Contact
          </Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}
