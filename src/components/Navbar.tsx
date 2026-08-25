import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, ArrowRight, PhoneCall } from 'lucide-react';

interface NavbarProps {
  onOpenModal: (source?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Problemas Frecuentes', href: '#problemas' },
    { label: 'Portafolio', href: '#portafolio' },
    { label: 'Precios', href: '#precios' },
    { label: 'Preguntas', href: '#preguntas' },
  ];

  const handleSmoothNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Offer Announcement Bar */}
      <div className="bg-[#191b22] text-white py-1.5 px-4 text-xs font-medium border-b border-gray-800">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 truncate">
            <span className="bg-[#FBBC05] text-[#191b22] font-black px-2 py-0.5 rounded text-[11px] shrink-0">
              OFERTA
            </span>
            <span className="truncate text-gray-200">
              Landing Page para Google Ads: <strong className="text-white font-bold">$3,499 MXN/año</strong> — Válida hasta el <strong>30 de Septiembre</strong>
            </span>
          </div>

          <button
            onClick={() => onOpenModal('top_announcement_cta')}
            className="inline-flex items-center gap-1 text-[#FBBC05] hover:text-yellow-300 font-bold hover:underline shrink-0 text-xs cursor-pointer ml-auto"
          >
            <span>Aprovechar Oferta</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-3'
            : 'bg-[#f9f9ff]/95 backdrop-blur-sm py-3.5 border-b border-gray-200/50'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => handleSmoothNav(e, '#')}
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQYPQn-IopmMNjq4qQ284IiyqNOLlM3WgG9FZYhRwzA177hPSDM_VxtsyT-URqW1KrppB6MxmRDIdoAuKPNeoxLm_shRO-oz4AYXevBVuxDIl7x0fCu49r1Li2Fmds3SOQDCLfvB5Mz7zPeSZqGxYdcX8ONY5jxpkZhJSfSvUSx6lJFgBZeyJjcvX5HmI-0weDUOYtBgnoGdsWGFSktUHNhWSbchY_N8DNDLiivM2CpiXrRL9f9a0mCA"
              alt="ikeero logo"
              className="h-7 sm:h-8 w-auto transition-transform group-hover:scale-105"
            />
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#4285F4]">
              ikeero
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleSmoothNav(e, link.href)}
                className="text-sm font-medium text-gray-600 hover:text-[#4285F4] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#4285F4] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenModal('navbar_crece_ahora')}
              className="bg-[#4285F4] hover:bg-[#3367d6] text-white font-semibold text-sm px-5 py-2.5 rounded-lg shadow-sm hover:shadow-md transition-all active:scale-95 flex items-center gap-1.5 cursor-pointer"
            >
              <span>Aprovechar Oferta</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleSmoothNav(e, link.href)}
                className="px-3 py-2 text-base font-medium text-gray-700 hover:text-[#4285F4] hover:bg-blue-50/50 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenModal('navbar_mobile');
              }}
              className="w-full bg-[#4285F4] text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 shadow-sm"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Crece Ahora - Solicitar Oferta</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
