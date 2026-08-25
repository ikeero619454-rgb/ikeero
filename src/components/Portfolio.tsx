import React, { useState } from 'react';
import { TrendingUp, ArrowUpRight, CheckCircle, ExternalLink, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CaseStudy } from '../types';

interface PortfolioProps {
  onOpenModal: (source?: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onOpenModal }) => {
  const caseStudies: CaseStudy[] = [
    {
      id: 'dental-care',
      client: 'Clínica Dental Sonrisas Pro',
      category: 'Salud & Odontología',
      headline: 'Aumento de 23 a 84 citas mensuales reduciendo el costo por paciente en 42%',
      metrics: [
        { label: 'Tasa de Conversión', value: '7.8% (antes 1.4%)', positive: true },
        { label: 'Costo por Lead', value: '$85 MXN (antes $148)', positive: true },
        { label: 'Retorno de Inversión', value: '5.2x ROAS', positive: true },
      ],
      beforeConversion: '1.4%',
      afterConversion: '7.8%',
      roas: '5.2x',
      testimonial:
        'Teníamos 2 años con una página en WordPress y gastábamos mucho en Google Ads sin ver resultados. Con la landing page de ikeero, el teléfono empezó a sonar desde la primera semana.',
      author: 'Dr. Alejandro Morales',
      role: 'Director Médico',
    },
    {
      id: 'solar-energy',
      client: 'SolarTech México',
      category: 'Energías Renovables & B2B',
      headline: 'Generación de 140+ cotizaciones de paneles solares residenciales por mes',
      metrics: [
        { label: 'Tasa de Conversión', value: '6.4% (antes 1.8%)', positive: true },
        { label: 'Velocidad de Carga', value: '0.9 segundos', positive: true },
        { label: 'Citas Calificadas', value: '+260%', positive: true },
      ],
      beforeConversion: '1.8%',
      afterConversion: '6.4%',
      roas: '6.8x',
      testimonial:
        'La estructura y la calculadora rápida de ahorro solar que diseñaron para nuestra landing multiplicó nuestras llamadas por WhatsApp de inmediato.',
      author: 'Ing. Mariana Valdés',
      role: 'Gerente Comercial',
    },
    {
      id: 'legal-services',
      client: 'Bufete Jurídico & Asociados',
      category: 'Servicios Legales & Asesoría',
      headline: 'De 8 a 47 consultas de derecho laboral por mes con el mismo presupuesto publicitario',
      metrics: [
        { label: 'Costo por Contacto', value: '-55% ahorro', positive: true },
        { label: 'Calidad de Lead', value: '92% calificados', positive: true },
        { label: 'Conversión Móvil', value: '8.1%', positive: true },
      ],
      beforeConversion: '1.2%',
      afterConversion: '8.1%',
      roas: '4.9x',
      testimonial:
        'Pensábamos que nuestro problema era la campaña de Google, pero era nuestra página web. El cambio fue del cielo a la tierra.',
      author: 'Lic. Roberto Garza',
      role: 'Socio Fundador',
    },
  ];

  const [selectedCase, setSelectedCase] = useState<CaseStudy>(caseStudies[0]);

  return (
    <section id="portafolio" className="bg-white py-16 lg:py-24 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-[#006b2b] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Casos de Éxito Reales</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#191b22] tracking-tight mb-3">
            Resultados medibles en diversos sectores
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Descubre cómo empresas en México aumentaron drásticamente sus ventas cambiando su web genérica por una landing page de alta conversión ikeero.
          </p>
        </motion.div>

        {/* Case Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
          {caseStudies.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedCase(item)}
              className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedCase.id === item.id
                  ? 'bg-[#4285F4] text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {item.client}
            </button>
          ))}
        </div>

        {/* Active Case Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCase.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="bg-[#f9f9ff] rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-level-1"
          >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Data & Story */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#4285F4] bg-blue-50 px-3 py-1 rounded-full">
                  {selectedCase.category}
                </span>
                <span className="text-xs text-gray-400">•</span>
                <span className="text-xs font-medium text-gray-500">Google Ads Optimizado</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#191b22] leading-snug">
                {selectedCase.headline}
              </h3>

              {/* Metrics Highlights */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                {selectedCase.metrics.map((m, i) => (
                  <div key={i} className="bg-white p-3.5 rounded-xl border border-gray-200/70 shadow-xs">
                    <p className="text-[11px] text-gray-500 font-medium mb-1">{m.label}</p>
                    <p className="text-sm sm:text-base font-bold text-[#34A853]">{m.value}</p>
                  </div>
                ))}
              </div>

              {/* Testimonial Quote */}
              <div className="bg-white p-5 rounded-2xl border-l-4 border-[#4285F4] shadow-xs">
                <div className="flex items-center gap-1 text-[#FBBC05] mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#FBBC05]" />
                  ))}
                </div>
                <p className="text-sm text-gray-700 italic mb-3 leading-relaxed">
                  "{selectedCase.testimonial}"
                </p>
                <div>
                  <p className="text-xs font-bold text-gray-900">{selectedCase.author}</p>
                  <p className="text-[11px] text-gray-500">{selectedCase.role} - {selectedCase.client}</p>
                </div>
              </div>
            </div>

            {/* Right: Conversion Jump Graphic */}
            <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
              <h4 className="text-sm font-bold text-gray-800 mb-4 pb-2 border-b border-gray-100 flex items-center justify-between">
                <span>Evolución de Conversión</span>
                <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                  +450% Mejora
                </span>
              </h4>

              <div className="space-y-5 my-4">
                <div>
                  <div className="flex justify-between text-xs font-medium text-gray-600 mb-1.5">
                    <span>Sitio Web Anterior</span>
                    <span className="font-bold text-red-600">{selectedCase.beforeConversion}</span>
                  </div>
                  <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden">
                    <div className="bg-red-400 h-full rounded-full w-[18%]"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-medium text-gray-600 mb-1.5">
                    <span>Landing Page ikeero</span>
                    <span className="font-bold text-emerald-600">{selectedCase.afterConversion}</span>
                  </div>
                  <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden">
                    <div className="bg-[#34A853] h-full rounded-full w-[85%]"></div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-xl text-center mt-2">
                <p className="text-xs text-[#0058bd] font-medium mb-2">
                  ¿Quieres resultados similares para tu negocio?
                </p>
                <button
                  onClick={() => onOpenModal(`case_${selectedCase.id}`)}
                  className="w-full bg-[#4285F4] hover:bg-[#3367d6] text-white text-xs sm:text-sm font-bold py-2.5 px-4 rounded-lg transition-all shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Replicar esta estrategia</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  </section>
  );
};
