import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FaqItem } from '../types';

interface FaqSectionProps {
  onOpenModal: (source?: string) => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenModal }) => {
  const faqs: FaqItem[] = [
    {
      id: 'tiempo-entrega',
      question: '¿En cuánto tiempo estará lista mi landing page?',
      answer:
        'Tu landing page estará 100% lista y publicada en un plazo de 3 a 5 días hábiles después de que nos proporciones la información básica de tu negocio (fotos, textos clave o logo si ya cuentas con ellos).',
      category: 'Tiempos',
    },
    {
      id: 'que-incluye',
      question: '¿La oferta de $3,499 MXN/año realmente incluye dominio y hosting?',
      answer:
        '¡Sí! Incluye registro de dominio (.com o .mx según disponibilidad), hosting de ultra alta velocidad con certificado de seguridad SSL por 12 meses completos, correo corporativo profesional y soporte técnico continuo.',
      category: 'Inversión',
    },
    {
      id: 'google-ads-campana',
      question: '¿Ustedes también pueden gestionar mis campañas de Google Ads?',
      answer:
        'Sí. Como Especialistas Certificados Google, diseñamos la landing page optimizada para tu campaña y podemos configurar tus anuncios, palabras clave y seguimiento de conversiones en Google Tag Manager y GA4.',
      category: 'Servicios',
    },
    {
      id: 'whatsapp-leads',
      question: '¿Cómo recibiré los contactos y prospectos?',
      answer:
        'Configuramos un botón flotante de WhatsApp que abre una conversación directa con un mensaje predeterminado (ej: "Hola, vi su anuncio en Google y quiero cotizar..."), y los formularios envían los datos inmediatamente a tu correo electrónico.',
      category: 'Integración',
    },
    {
      id: 'facturacion',
      question: '¿Emiten factura fiscal (CFDI) en México?',
      answer:
        'Sí, todos nuestros precios pueden ser facturados conforme a los requisitos fiscales del SAT. Solo indícanos tus datos fiscales (Constancia de Situación Fiscal) al confirmar tu orden.',
      category: 'Facturación',
    },
    {
      id: 'garantia',
      question: '¿Qué garantía tengo si no me gusta el diseño inicial?',
      answer:
        'Trabajamos con rondas de revisión hasta que estés 100% satisfecho con la presentación visual y la redacción de tu oferta comercial antes de lanzarla en Google.',
      category: 'Garantía',
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="preguntas" className="bg-[#f9f9ff] py-16 lg:py-24 border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 text-[#4285F4] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Resolviendo tus dudas</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#191b22] tracking-tight mb-3">
            Preguntas Frecuentes
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Todo lo que necesitas saber sobre el desarrollo de tu landing page y la oferta de $3,499 MXN/año.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                key={faq.id}
                className="bg-white rounded-2xl border border-gray-200 shadow-xs overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-semibold text-gray-900 hover:text-[#4285F4] transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg">{faq.question}</span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'bg-blue-50 text-[#4285F4] rotate-180' : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="px-5 pb-6 sm:px-6 pt-0 text-gray-600 text-sm sm:text-base leading-relaxed border-t border-gray-50 overflow-hidden"
                    >
                      <p className="pt-3">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Help CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 bg-white p-6 rounded-2xl border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm text-center sm:text-left"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-full bg-green-50 text-[#34A853] flex items-center justify-center shrink-0">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-base">¿Tienes otra pregunta específica?</h4>
              <p className="text-xs sm:text-sm text-gray-500">Un especialista de ikeero te responderá por WhatsApp en menos de 5 minutos.</p>
            </div>
          </div>

          <a
            href="https://wa.me/525635327271?text=Hola%2C%20tengo%20una%20duda%20sobre%20la%20Landing%20Page%20para%20Google%20Ads"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#34A853] hover:bg-[#2e954a] text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl transition-all shadow-sm shrink-0 cursor-pointer inline-flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chatear por WhatsApp</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
