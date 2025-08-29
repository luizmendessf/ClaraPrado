"use client"

import { useEffect } from "react"

export default function ScrollNavbar() {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar")
      const navLinks = document.querySelectorAll(".nav-link")
      const navButton = document.querySelector(".nav-button")
      
      if (window.scrollY > 50) {
        navbar?.classList.remove("bg-transparent")
        navbar?.classList.add("bg-white/95", "backdrop-blur-md", "border-b", "border-slate-200/50", "shadow-sm")
        navLinks.forEach(link => {
          link.classList.remove("text-white", "hover:text-slate-200")
          link.classList.add("text-slate-700", "hover:text-slate-900")
        })
        if (navButton) {
          navButton.classList.remove("bg-white/20", "text-white", "hover:bg-white/30", "border-white/30")
          navButton.classList.add("bg-slate-900", "text-white", "hover:bg-slate-800", "border-slate-900")
        }
      } else {
        navbar?.classList.add("bg-transparent")
        navbar?.classList.remove("bg-white/95", "backdrop-blur-md", "border-b", "border-slate-200/50", "shadow-sm")
        navLinks.forEach(link => {
          link.classList.add("text-white", "hover:text-slate-200")
          link.classList.remove("text-slate-700", "hover:text-slate-900")
        })
        if (navButton) {
          navButton.classList.add("bg-white/20", "text-white", "hover:bg-white/30", "border-white/30")
          navButton.classList.remove("bg-slate-900", "text-white", "hover:bg-slate-800", "border-slate-900")
        }
      }
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return null
}
