import React, { useState } from 'react';
import { Award, ShieldCheck, Mail, Phone, MapPin, X } from 'lucide-react';

interface FooterProps {
  onOpenModal: (source?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenModal }) => {
  const [legalModalContent, setLegalModalContent] = useState<{ title: string; text: string } | null>(null);

  const openLegal = (type: 'privacidad' | 'terminos' | 'soporte' | 'contacto') => {
    switch (type) {
      case 'privacidad':
        setLegalModalContent({
          title: 'Aviso de Privacidad',
          text: 'ikeero protege tus datos personales de acuerdo con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares. La información recopilada a través de formularios se utiliza exclusivamente para contactarte sobre tu propuesta comercial y nunca será transferida a terceros sin tu consentimiento expreso.',
        });
        break;
      case 'terminos':
        setLegalModalContent({
          title: 'Términos y Condiciones del Servicio',
          text: 'La oferta promocional de $3,499 MXN incluye: registro de dominio por 1 año, hosting de alta velocidad por 1 año, certificado SSL, hasta 3 cuentas de correo corporativo y diseño de 1 landing page optimizada para Google Ads. Las renovaciones anuales se notifican con 30 días de anticipación con total transparencia y sin penalizaciones.',
        });
        break;
      case 'soporte':
        setLegalModalContent({
          title: 'Centro de Soporte Técnico',
          text: 'Ofrecemos soporte técnico de lunes a viernes de 9:00 AM a 6:00 PM (Hora Centro de México) vía WhatsApp y correo electrónico (soporte@ikeero.com). Tiempo promedio de respuesta en menos de 2 horas hábiles.',
        });
        break;
      case 'contacto':
        onOpenModal('footer_contacto');
        break;
    }
  };

  return (
    <footer className="bg-[#ecedf7] border-t border-gray-200/60 py-12 lg:py-16 text-gray-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-gray-200">
          {/* Brand & Partner info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQYPQn-IopmMNjq4qQ284IiyqNOLlM3WgG9FZYhRwzA177hPSDM_VxtsyT-URqW1KrppB6MxmRDIdoAuKPNeoxLm_shRO-oz4AYXevBVuxDIl7x0fCu49r1Li2Fmds3SOQDCLfvB5Mz7zPeSZqGxYdcX8ONY5jxpkZhJSfSvUSx6lJFgBZeyJjcvX5HmI-0weDUOYtBgnoGdsWGFSktUHNhWSbchY_N8DNDLiivM2CpiXrRL9f9a0mCA"
                alt="ikeero logo"
                className="h-7 w-auto"
              />
              <span className="text-2xl font-extrabold text-[#4285F4] tracking-tight">
                ikeero
              </span>
            </div>

            <p className="text-sm text-gray-600 max-w-md leading-relaxed">
              Agencia de desarrollo web y estrategia digital con Especialistas Certificados Google. Creamos landing pages diseñadas específicamente para multiplicar conversiones y optimizar el presupuesto en Google Ads.
            </p>

            <div className="inline-flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-200 text-xs font-semibold text-gray-800 shadow-xs">
              <Award className="w-4 h-4 text-[#FBBC05] fill-[#FBBC05]" />
              <span>Especialistas Certificados Google en Campañas de Búsqueda y Conversión</span>
            </div>
          </div>

          {/* Quick Contact & Info */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider">
              Contacto Rápido
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-gray-600">
              <a
                href="mailto:hola@ikeero.com?subject=Consulta%20Landing%20Page%20Google%20Ads%20-%20$3,499%20MXN"
                className="flex items-center gap-2 hover:text-[#4285F4] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#4285F4] shrink-0" />
                <span>hola@ikeero.com</span>
              </a>
              <a
                href="https://wa.me/525635327271?text=Hola%20ikeero%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#34A853] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#34A853] shrink-0" />
                <span>+52 56 3532 7271 (WhatsApp)</span>
              </a>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#EA4335] shrink-0" />
                <span>Ciudad de México, México</span>
              </p>
            </div>
          </div>

          {/* Direct CTA */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider">
              Asegura tu Landing
            </h4>
            <p className="text-xs text-gray-600">
              Aprovecha la promoción anual de <strong>$3,499 MXN</strong> antes de que termine el mes.
            </p>
            <button
              onClick={() => onOpenModal('footer_cta')}
              className="w-full bg-[#4285F4] hover:bg-[#3367d6] text-white text-xs sm:text-sm font-bold py-2.5 px-4 rounded-xl shadow-xs transition-all cursor-pointer"
            >
              Reclamar Descuento
            </button>
          </div>
        </div>

        {/* Bottom copyright & legal links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} ikeero. Especialistas Certificados Google. Todos los derechos reservados.
          </p>

          <div className="flex flex-wrap gap-6 items-center">
            <button
              onClick={() => openLegal('privacidad')}
              className="hover:text-[#4285F4] transition-colors cursor-pointer"
            >
              Privacidad
            </button>
            <button
              onClick={() => openLegal('terminos')}
              className="hover:text-[#4285F4] transition-colors cursor-pointer"
            >
              Términos
            </button>
            <button
              onClick={() => openLegal('soporte')}
              className="hover:text-[#4285F4] transition-colors cursor-pointer"
            >
              Soporte
            </button>
            <button
              onClick={() => openLegal('contacto')}
              className="hover:text-[#4285F4] transition-colors cursor-pointer"
            >
              Contacto
            </button>
          </div>
        </div>
      </div>

      {/* Legal Popup */}
      {legalModalContent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl border border-gray-100 relative">
            <button
              onClick={() => setLegalModalContent(null)}
              className="absolute top-4 right-4 p-1.5 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-lg font-bold text-gray-900 mb-3">{legalModalContent.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">{legalModalContent.text}</p>
            <button
              onClick={() => setLegalModalContent(null)}
              className="w-full bg-[#4285F4] text-white font-semibold py-2.5 rounded-xl text-sm"
            >
              Entendido
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};
