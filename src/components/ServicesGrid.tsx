import React from 'react';
import { Target, Zap, MessageSquareCode, BarChart3, Shield, Award, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

interface ServicesGridProps {
  onOpenModal: (source?: string) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onOpenModal }) => {
  const services = [
    {
      id: 'landing-pages',
      icon: Target,
      color: 'text-[#4285F4]',
      bgColor: 'bg-blue-50',
      badge: 'Especialidad Principal',
      badgeColor: 'bg-blue-100 text-[#0058bd]',
      title: 'Landing Pages para Google Ads',
      description:
        'Diseño y redacción persuasiva estructurada para coincidir exactamente con la intención de búsqueda de tus palabras clave en Google.',
      features: [
        'Copywriting enfocado en dolor, deseo y solución',
        'Diseño sin distracciones que guía hacia el contacto',
        'Optimización para Quality Score de Google Ads',
      ],
    },
    {
      id: 'speed-perf',
      icon: Zap,
      color: 'text-[#EA4335]',
      bgColor: 'bg-red-50',
      badge: 'Velocidad Extrema',
      badgeColor: 'bg-red-100 text-[#b51b15]',
      title: 'Carga Ultrarrápida (<1.5s)',
      description:
        'Cada segundo de retraso disminuye tus conversiones en un 20%. Desarrollamos con código limpio para puntuaciones 90+ en PageSpeed.',
      features: [
        'Imágenes optimizadas en WebP y compresión sin pérdidas',
        'Hosting de alta disponibilidad con CDN global',
        'Sin plugins pesados de WordPress que ralenticen la web',
      ],
    },
    {
      id: 'whatsapp-crm',
      icon: MessageSquareCode,
      color: 'text-[#34A853]',
      bgColor: 'bg-green-50',
      badge: 'Conversión Directa',
      badgeColor: 'bg-green-100 text-[#006b2b]',
      title: 'Integración WhatsApp & CRM',
      description:
        'Tus clientes prefieren comunicarse al instante. Integramos botones de WhatsApp preconfigurados y formularios conectados a tu correo.',
      features: [
        'Mensajes predefinidos con origen de campaña',
        'Formularios seguros anti-spam con reCAPTCHA',
        'Notificaciones instantáneas por correo electrónico',
      ],
    },
    {
      id: 'analytics-tag-manager',
      icon: BarChart3,
      color: 'text-[#FBBC05]',
      bgColor: 'bg-yellow-50',
      badge: 'Medición Real',
      badgeColor: 'bg-yellow-100 text-yellow-800',
      title: 'Analítica GA4 & Google Tag Manager',
      description:
        'Si no puedes medirlo, no puedes mejorarlo. Configuramos el seguimiento de conversiones exacto para alimentar el algoritmo de Smart Bidding.',
      features: [
        'Medición de clics en WhatsApp y llamadas',
        'Seguimiento de envíos de formularios exitosos',
        'Integración transparente con tu cuenta de Google Ads',
      ],
    },
  ];

  return (
    <section id="servicios" className="bg-[#f9f9ff] py-16 lg:py-24 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-blue-100/60 text-[#0058bd] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>Especialistas Certificados Google</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#191b22] tracking-tight">
              Ingeniería digital diseñada para vender más
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-2">
              No hacemos sitios web decorativos. Creamos herramientas comerciales de alto impacto que transforman visitantes en clientes rentables.
            </p>
          </div>

          <button
            onClick={() => onOpenModal('servicios_header')}
            className="self-start md:self-auto bg-[#4285F4] hover:bg-[#3367d6] text-white text-sm font-semibold px-6 py-3 rounded-xl transition-all shadow-sm flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <span>Consultar mi proyecto</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </motion.div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={item.id}
                className="bg-white p-7 sm:p-8 rounded-2xl border border-gray-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-2xl ${item.bgColor} flex items-center justify-center`}>
                      <Icon className={`w-7 h-7 ${item.color}`} />
                    </div>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#191b22] mb-3 group-hover:text-[#4285F4] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <ul className="space-y-2.5 pt-2 border-t border-gray-100">
                    {item.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4285F4] mt-2 shrink-0"></span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
