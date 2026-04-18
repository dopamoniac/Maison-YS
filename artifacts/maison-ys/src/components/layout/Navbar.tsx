import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logoImage from "@assets/logo_fin_1776545929744.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Collection", path: "/collection" },
    { name: "La Maison", path: "/maison" },
    { name: "Cadeaux", path: "/gifting" },
    { name: "Contact", path: "/contact" },
  ];

  const isHome = location === "/";
  const navbarBg = isScrolled || !isHome ? "bg-obsidian/95 backdrop-blur-md border-b border-white/10" : "bg-transparent";
  const textColor = "text-stone";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navbarBg}`}>
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-3 cursor-pointer group">
            <img
              src={logoImage}
              alt="Maison YS Logo"
              className="h-10 w-auto object-contain transition-transform duration-700 group-hover:scale-105"
            />
            <span className={`font-serif tracking-[0.2em] text-lg uppercase ${textColor}`}>
              Maison YS
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.path} href={link.path}>
              <span className={`text-sm tracking-widest uppercase transition-colors duration-300 hover:text-gold cursor-pointer ${
                location === link.path ? "text-gold" : textColor
              }`}>
                {link.name}
              </span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-stone hover:text-gold transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed inset-0 top-20 bg-obsidian z-40 flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path}>
                <span
                  className={`text-2xl font-serif tracking-widest uppercase transition-colors duration-300 hover:text-gold cursor-pointer ${
                    location === link.path ? "text-gold" : "text-stone"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
