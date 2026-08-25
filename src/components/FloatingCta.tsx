import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FloatingCtaProps {
  onOpenModal: (source?: string) => void;
}

export const FloatingCta: React.FC<FloatingCtaProps> = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const phoneNumber = '525635327271';
  const displayPhone = '56 3532 7271';
  const defaultMessage = encodeURIComponent(
    '¡Hola! Me interesa la oferta de Landing Page optimizada para Google Ads de $3,499 MXN. ¿Me pueden dar más información?'
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  // Show a welcome tooltip briefly after 3 seconds to draw attention politely
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      {/* Scroll to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-white text-gray-700 shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-all hover:scale-110 active:scale-95 cursor-pointer"
            aria-label="Volver arriba"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* WhatsApp Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white text-gray-800 text-xs py-2 px-3.5 rounded-2xl shadow-xl border border-emerald-100 flex items-center gap-2 max-w-[220px]"
          >
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping shrink-0" />
            <div>
              <p className="font-bold text-gray-900 leading-tight">¿Tienes dudas?</p>
              <p className="text-[11px] text-gray-500">Escríbenos al <span className="font-semibold text-emerald-700">{displayPhone}</span></p>
            </div>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-gray-400 hover:text-gray-600 text-xs ml-1 cursor-pointer"
              aria-label="Cerrar aviso"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Floating Action Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(false)}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.96 }}
        className="group relative flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white py-3.5 px-4 sm:px-5 rounded-full shadow-2xl transition-all duration-300 cursor-pointer border-2 border-white/40"
        aria-label={`Contactar por WhatsApp al ${displayPhone}`}
      >
        {/* Pulsing notification badge */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-85"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-red-500 border-2 border-white"></span>
        </span>

        {/* WhatsApp Icon */}
        <div className="relative">
          <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 fill-white text-white" />
        </div>

        {/* Label & Phone */}
        <div className="flex flex-col text-left">
          <span className="text-xs sm:text-sm font-black tracking-wide leading-tight flex items-center gap-1.5">
            WhatsApp
            <span className="bg-white/25 text-[10px] uppercase font-bold px-1.5 py-0.2 rounded-full">Online</span>
          </span>
          <span className="text-[11px] font-medium text-emerald-100 hidden sm:inline">
            {displayPhone}
          </span>
        </div>
      </motion.a>
    </div>
  );
};
