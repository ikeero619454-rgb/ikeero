import React, { useState } from 'react';
import { Clock, AlertTriangle, MousePointerClick, CheckCircle2, XCircle } from 'lucide-react';
import { motion } from 'motion/react';

export const PainPoints: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'comparison' | 'cards'>('cards');

  const painCards = [
    {
      id: 'carga-lenta',
      icon: Clock,
      iconColor: 'text-[#EA4335]',
      bgColor: 'bg-red-50',
      hoverBorder: 'hover:border-[#EA4335]',
      hoverText: 'group-hover:text-[#EA4335]',
      title: 'Carga Lenta',
      description:
        'El 53% de los usuarios abandona una página si tarda más de 3 segundos en cargar. Estás perdiendo clientes antes de que vean tu oferta.',
      stat: '53% de abandono',
    },
    {
      id: 'diseno-confuso',
      icon: AlertTriangle,
      iconColor: 'text-[#FBBC05]',
      bgColor: 'bg-yellow-50',
      hoverBorder: 'hover:border-[#FBBC05]',
      hoverText: 'group-hover:text-amber-600',
      title: 'Diseño Confuso',
      description:
        'Un diseño no optimizado para móviles o difícil de navegar frustra al usuario, enviándolo directamente a la competencia.',
      stat: '70% tráfico es móvil',
    },
    {
      id: 'sin-cta',
      icon: MousePointerClick,
      iconColor: 'text-[#4285F4]',
      bgColor: 'bg-blue-50',
      hoverBorder: 'hover:border-[#4285F4]',
      hoverText: 'group-hover:text-[#4285F4]',
      title: 'Sin Llamados a la Acción',
      description:
        'Si el visitante no sabe qué hacer a continuación, no hará nada. Falta de botones claros significa falta de conversiones.',
      stat: '-80% en conversiones',
    },
  ];

  return (
    <section id="problemas" className="bg-[#f2f3fd] py-16 lg:py-24 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#191b22] tracking-tight mb-4">
            ¿Tu sitio web espanta a tus clientes?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Los clics no sirven de nada si tu página web no está preparada para recibir visitas y convertirlas en ventas reales.
          </p>
        </motion.div>

        {/* 3 Main Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {painCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                key={card.id}
                className={`bg-white p-7 sm:p-8 rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 group ${card.hoverBorder}`}
              >
                <div
                  className={`w-14 h-14 rounded-2xl ${card.bgColor} flex items-center justify-center mb-6 transition-transform group-hover:scale-110`}
                >
                  <IconComponent className={`w-7 h-7 ${card.iconColor}`} />
                </div>
                <h3
                  className={`text-xl font-bold text-[#191b22] mb-3 transition-colors ${card.hoverText}`}
                >
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                  {card.description}
                </p>
                <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-gray-500">
                  <span>Impacto directo:</span>
                  <span className="text-red-600 bg-red-50 px-2 py-0.5 rounded font-medium">
                    {card.stat}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Interactive Comparison Box: Sitio Antiguo vs ikeero Landing */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-gray-100">
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Comparativa de Rendimiento en Campañas de Anuncios
              </h3>
              <p className="text-xs sm:text-sm text-gray-500">
                Por qué el 90% de los anunciantes pierden presupuesto enviando tráfico a una web genérica
              </p>
            </div>
            <div className="inline-flex rounded-lg bg-gray-100 p-1 self-start sm:self-auto">
              <button
                onClick={() => setActiveTab('cards')}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                  activeTab === 'cards'
                    ? 'bg-white text-gray-900 shadow-xs'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Resumen Rápido
              </button>
              <button
                onClick={() => setActiveTab('comparison')}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                  activeTab === 'comparison'
                    ? 'bg-[#4285F4] text-white shadow-xs'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Ver Tabla Completa
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Sitio Web Convencional */}
            <div className="rounded-xl border border-red-200 bg-red-50/40 p-5">
              <div className="flex items-center gap-2 mb-4">
                <XCircle className="w-5 h-5 text-red-500" />
                <h4 className="font-bold text-red-950 text-base">Sitio Web Tradicional / Genérico</h4>
              </div>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">•</span>
                  <span>Carga pesada (4 a 8 segundos) con exceso de plugins y scripts innecesarios.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">•</span>
                  <span>Múltiples menús, enlaces a redes sociales y distracciones que provocan fuga de clics.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">•</span>
                  <span>Tasa de conversión típica de <strong>1.0% a 1.8%</strong> (98 personas se van sin contactar).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">•</span>
                  <span>Google Ads califica la página con bajo Nivel de Calidad (Quality Score), encareciendo cada clic.</span>
                </li>
              </ul>
            </div>

            {/* Landing Page ikeero */}
            <div className="rounded-xl border border-emerald-200 bg-emerald-50/40 p-5">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <h4 className="font-bold text-emerald-950 text-base">Landing Page Específica ikeero</h4>
              </div>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Carga ultrarrápida (&lt;1.2 segundos), 95+ en Google PageSpeed Insights.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Un único objetivo de conversión: llamada directa, WhatsApp o formulario sin fugas.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Tasa de conversión promedio de <strong>4.5% a 8.2%</strong> (3x a 5x más prospectos).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Máximo Nivel de Calidad en Google Ads: pagas <strong>hasta un 30% menos por clic</strong>.</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
