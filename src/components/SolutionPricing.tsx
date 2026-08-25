import React from 'react';
import { CheckCircle2, Rocket, ShieldCheck, Sparkles, Clock, Lock, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { useCountdown } from '../hooks/useCountdown';

interface SolutionPricingProps {
  onOpenModal: (source?: string) => void;
}

export const SolutionPricing: React.FC<SolutionPricingProps> = ({ onOpenModal }) => {
  const { days, hours, minutes, seconds } = useCountdown(8, 30); // September 30
  return (
    <section id="precios" className="bg-[#eefbf1] py-16 lg:py-24 relative overflow-hidden">
      {/* Decorative background blurs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-green-200/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Solution Features */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.65 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-full text-emerald-800 text-xs sm:text-sm font-semibold shadow-xs border border-emerald-200">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>Paquete All-In-One Llave en Mano</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#191b22] tracking-tight leading-tight">
              La solución completa para tu negocio
            </h2>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-xl">
              Todo lo que necesitas para lanzar campañas rentables en Google Ads, empaquetado en una sola solución optimizada y lista para vender.
            </p>

            {/* Feature Checklist */}
            <ul className="space-y-4 pt-2">
              <li className="flex items-start gap-3.5 group">
                <div className="mt-0.5 rounded-full bg-emerald-100 p-1 text-[#34A853]">
                  <CheckCircle2 className="w-5 h-5 fill-emerald-100 text-[#34A853]" />
                </div>
                <div className="text-base text-gray-800 leading-snug">
                  <strong className="text-gray-900 font-semibold">Dominio y Hosting</strong> incluidos por un año con certificado SSL de máxima seguridad.
                </div>
              </li>

              <li className="flex items-start gap-3.5 group">
                <div className="mt-0.5 rounded-full bg-emerald-100 p-1 text-[#34A853]">
                  <CheckCircle2 className="w-5 h-5 fill-emerald-100 text-[#34A853]" />
                </div>
                <div className="text-base text-gray-800 leading-snug">
                  <strong className="text-gray-900 font-semibold">Correo Corporativo</strong> profesional (ej. contacto@tunegocio.com) para proyectar máxima confianza.
                </div>
              </li>

              <li className="flex items-start gap-3.5 group">
                <div className="mt-0.5 rounded-full bg-emerald-100 p-1 text-[#34A853]">
                  <CheckCircle2 className="w-5 h-5 fill-emerald-100 text-[#34A853]" />
                </div>
                <div className="text-base text-gray-800 leading-snug">
                  <strong className="text-gray-900 font-semibold">Diseño UX Estratégico</strong> con copywriting persuasivo enfocado 100% en conversión de clientes.
                </div>
              </li>

              <li className="flex items-start gap-3.5 group bg-white/80 p-3.5 rounded-xl border border-blue-200/80 shadow-xs">
                <div className="mt-0.5 rounded-full bg-blue-100 p-1 text-[#4285F4]">
                  <Rocket className="w-5 h-5 text-[#4285F4]" />
                </div>
                <div className="text-base text-[#0058bd] font-medium leading-snug">
                  <strong className="text-[#004494] font-bold">Diseñado específicamente para Google Ads</strong> (configuración de etiquetas de conversión GTM y GA4 listas).
                </div>
              </li>
            </ul>

            {/* Extra Benefits Pills */}
            <div className="pt-3 flex flex-wrap gap-2 text-xs text-gray-600">
              <span className="bg-white/90 border border-emerald-200/80 px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-emerald-600" /> Entrega en 3-5 días hábiles
              </span>
              <span className="bg-white/90 border border-emerald-200/80 px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Garantía de Satisfacción
              </span>
              <span className="bg-white/90 border border-emerald-200/80 px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-emerald-600" /> Factura Fiscal CFDI disponible
              </span>
            </div>
          </motion.div>

          {/* Right Column: Pricing Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="bg-white rounded-3xl p-8 sm:p-9 border-2 border-[#34A853]/40 relative shadow-2xl transition-transform hover:-translate-y-1 duration-300">
              {/* Limited Offer Badge */}
              <div className="absolute -top-3.5 right-4 sm:right-8 bg-[#EA4335] text-white px-3.5 sm:px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-md">
                Oferta hasta el 30 de Septiembre
              </div>

              {/* Header inside card */}
              <div className="text-center pt-2 mb-6">
                <span className="text-xs font-bold tracking-wider text-emerald-700 uppercase bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Plan Anual Pro Google Ads
                </span>
                
                <div className="mt-4 mb-2">
                  <p className="text-gray-400 line-through text-lg font-medium">
                    Antes $4,500 MXN
                  </p>
                  <div className="flex items-baseline justify-center gap-1.5 mt-1">
                    <span className="text-4xl sm:text-5xl font-extrabold text-[#4285F4] tracking-tight">
                      $3,499
                    </span>
                    <span className="text-base sm:text-lg font-medium text-gray-500">
                      MXN/año
                    </span>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <p className="text-xs text-emerald-700 font-semibold bg-emerald-50/80 py-1 px-2.5 rounded-md inline-block">
                    Ahorras $1,001 MXN con este paquete integral
                  </p>
                  
                  {/* Countdown pill */}
                  <div className="inline-flex items-center justify-center gap-1.5 bg-amber-50 border border-amber-200 text-amber-900 px-3 py-1 rounded-lg text-xs font-medium">
                    <Clock className="w-3.5 h-3.5 text-amber-600" />
                    <span>Oferta termina en:</span>
                    <strong className="font-bold text-amber-950 font-mono">{days} días y {hours}h</strong>
                  </div>
                </div>
              </div>

              {/* What's included in card */}
              <div className="border-t border-b border-gray-100 py-4 my-5 space-y-2.5 text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#34A853] shrink-0" />
                  <span>Landing Page 100% responsiva (Móvil + Desktop)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#34A853] shrink-0" />
                  <span>Botón flotante de WhatsApp y llamada directa</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#34A853] shrink-0" />
                  <span>Integración de Google Analytics 4 & Tag Manager</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#34A853] shrink-0" />
                  <span>Formulario conectado a tu correo o CRM</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#34A853] shrink-0" />
                  <span>Soporte técnico y mantenimiento anual</span>
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => onOpenModal('pricing_card')}
                className="w-full bg-[#34A853] hover:bg-[#2e954a] text-white text-base sm:text-lg font-extrabold px-6 py-4 rounded-xl shadow-lg hover:shadow-xl active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2 group"
              >
                <span>¡Aprovechar Oferta de $3,499 MXN!</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>

              <div className="text-center text-xs text-gray-500 mt-4 space-y-1">
                <p>Sin plazos forzosos. Sin costos ocultos.</p>
                <p className="text-emerald-700 font-medium text-[11px]">
                  ✓ Garantía de satisfacción y entrega en 3 a 5 días
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
