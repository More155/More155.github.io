import { useEffect, useState } from "react"
import type { JSX } from "react"
import logo from "../favicon.png"
import { Link, useLocation } from "react-router-dom"

type SectionId = "home" | "about" | "skills"  | "selected-work" | "projects" | "contact" | "pet-projects"

const sections: { id: SectionId; label: string }[] = [
  { id: "about", label: "About Me" },
  { id: "skills", label: "Skills" },
  { id: "selected-work", label: "Selected Work" },
  { id: "pet-projects", label: "Pet Projects" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact 💌" },
]

export default function Navbar(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [scrolled, setScrolled] = useState<boolean>(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen((prev) => !prev)
  const closeMenu = () => setIsOpen(false)

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-indigo-600 flex items-center" onClick={closeMenu}>
          <img src={logo} alt="Logo" className="h-10" />
        </Link>

        <div className="hidden md:flex md:items-center md:gap-8">
          {sections.map((section) => (
            <Link
              key={section.id}
              to={`/${section.id}`}
              className={`font-medium transition-colors ${
                location.pathname === `/${section.id}`
                  ? "text-indigo-600"
                  : "text-gray-700 hover:text-indigo-600"
              }`}
              onClick={closeMenu}
            >
              {section.label}
            </Link>
          ))}
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white shadow-lg px-4 py-6 flex flex-col gap-5">
          {sections.map((section) => (
            <Link
              key={section.id}
              to={`/${section.id}`}
              className={`font-medium transition-colors ${
                location.pathname === `/${section.id}`
                  ? "text-indigo-600"
                  : "text-gray-700 hover:text-indigo-600"
              }`}
              onClick={closeMenu}
            >
              {section.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
