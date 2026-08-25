import React from 'react';
import { Award, CheckCircle, ArrowRight, TrendingUp, Zap, ShieldCheck, Calendar, MousePointer, Activity, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import { useCountdown } from '../hooks/useCountdown';
import googleAdsDashboardImg from '../assets/images/google_ads_dashboard_1787617281991.jpg';

interface HeroProps {
  onOpenModal: (source?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  const { days, hours, minutes, seconds } = useCountdown(8, 30); // September 30
  return (
    <section className="bg-[#4285F4] pt-24 pb-16 lg:pt-28 lg:pb-20 text-white relative overflow-hidden">
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-white blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#FBBC05] blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Copy & Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start gap-5 sm:gap-6"
          >
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-1.5 bg-[#FBBC05] text-[#191b22] px-3.5 py-1 rounded-full text-xs font-bold shadow-sm">
                <Calendar className="w-3.5 h-3.5 text-[#191b22]" />
                <span>Oferta válida hasta el 30 de septiembre</span>
              </div>

              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/25 shadow-sm text-xs sm:text-sm font-semibold tracking-wide text-white">
                <Award className="w-3.5 h-3.5 text-[#FBBC05] fill-[#FBBC05]" />
                <span>Especialistas Certificados Google</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.15] text-white">
              ¿Cansado de tirar dinero en{' '}
              <span className="text-[#FBBC05] underline decoration-white/30 decoration-wavy decoration-1 underline-offset-4">
                Google Ads
              </span>
              ?
            </h1>

            {/* Subheading & Countdown Timer */}
            <div className="space-y-3 max-w-xl">
              <p className="text-base sm:text-lg md:text-xl text-blue-50 leading-relaxed font-normal">
                Creamos landing pages diseñadas específicamente para convertir clics en clientes reales. Oferta exclusiva:{' '}
                <strong className="text-white font-bold bg-white/20 px-2 py-0.5 rounded">
                  Solo $3,499 MXN/año
                </strong>
                .
              </p>

              {/* Days remaining countdown widget */}
              <div className="bg-white/10 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl border border-white/20 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#FBBC05] text-[#191b22] flex items-center justify-center font-bold shrink-0 shadow-sm">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-blue-100">La oferta de $3,499 termina en:</p>
                    <p className="text-xs font-bold text-yellow-300">30 de Septiembre a las 23:59 hrs</p>
                  </div>
                </div>

                {/* Counter boxes */}
                <div className="flex items-center gap-1.5 self-center sm:self-auto font-mono">
                  <div className="bg-black/40 border border-white/10 px-2.5 py-1 rounded-lg text-center min-w-[44px]">
                    <span className="block text-base sm:text-lg font-black text-white">{days}</span>
                    <span className="text-[10px] text-blue-200 uppercase font-sans font-semibold">Días</span>
                  </div>
                  <span className="text-yellow-300 font-bold">:</span>
                  <div className="bg-black/40 border border-white/10 px-2 py-1 rounded-lg text-center min-w-[40px]">
                    <span className="block text-base sm:text-lg font-black text-white">{hours.toString().padStart(2, '0')}</span>
                    <span className="text-[10px] text-blue-200 uppercase font-sans font-semibold">Horas</span>
                  </div>
                  <span className="text-yellow-300 font-bold">:</span>
                  <div className="bg-black/40 border border-white/10 px-2 py-1 rounded-lg text-center min-w-[40px]">
                    <span className="block text-base sm:text-lg font-black text-white">{minutes.toString().padStart(2, '0')}</span>
                    <span className="text-[10px] text-blue-200 uppercase font-sans font-semibold">Min</span>
                  </div>
                  <span className="text-yellow-300 font-bold">:</span>
                  <div className="bg-black/40 border border-white/10 px-2 py-1 rounded-lg text-center min-w-[40px]">
                    <span className="block text-base sm:text-lg font-black text-yellow-300">{seconds.toString().padStart(2, '0')}</span>
                    <span className="text-[10px] text-blue-200 uppercase font-sans font-semibold">Seg</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action Button & Guarantee */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                onClick={() => onOpenModal('hero_button')}
                className="bg-[#FBBC05] hover:bg-[#f59e0b] text-[#191b22] font-black text-base sm:text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>¡Aprovechar Oferta de $3,499 MXN!</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>

              <div className="flex items-center justify-center gap-2 text-blue-100 text-sm font-medium py-1">
                <CheckCircle className="w-5 h-5 text-[#34A853] fill-[#34A853] shrink-0" />
                <span>Resultados Garantizados</span>
              </div>
            </div>

            {/* Key Quick Value Highlights */}
            <div className="pt-4 border-t border-white/20 grid grid-cols-3 gap-3 sm:gap-6 w-full max-w-lg">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#FBBC05] shrink-0" />
                <span className="text-xs text-blue-100 font-medium">Carga en &lt;1.2s</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-[#34A853] shrink-0" />
                <span className="text-xs text-blue-100 font-medium">3x más leads</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-white shrink-0" />
                <span className="text-xs text-blue-100 font-medium">100% Garantizado</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Google Ads Environment Dashboard Visual & Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-5 relative"
          >
            {/* Ambient animated colorful glow in Google colors */}
            <motion.div
              animate={{
                scale: [1, 1.08, 0.98, 1],
                opacity: [0.35, 0.55, 0.35],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -inset-2 bg-gradient-to-r from-[#4285F4] via-[#EA4335] via-[#FBBC05] to-[#34A853] rounded-3xl blur-2xl pointer-events-none"
            />

            {/* Continuous floating/bobbing & 3D tilt perspective wrapper */}
            <motion.div
              animate={{
                y: [0, -10, 0, 8, 0],
                rotateZ: [0, 0.6, 0, -0.6, 0],
                rotateX: [0, 2, 0, -2, 0],
                rotateY: [0, -2, 0, 2, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/25 bg-slate-900 group"
            >
              {/* Subtle animated scanline/shimmer light reflection passing through */}
              <motion.div
                animate={{
                  x: ['-100%', '200%'],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: 'easeInOut',
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-12 z-20 pointer-events-none"
              />

              <motion.img
                src={googleAdsDashboardImg}
                alt="Panel y Analítica de Google Ads con altas conversiones y retorno de inversión"
                className="w-full h-auto object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
                loading="eager"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/30 pointer-events-none z-10"></div>

              {/* Floating Top Badge: Live Google Ads Status */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute top-4 left-4 z-20 bg-slate-900/85 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 shadow-lg flex items-center gap-2 text-white text-xs font-semibold"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#34A853] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#34A853]"></span>
                </span>
                <span className="text-gray-200">Google Ads</span>
                <span className="text-emerald-400 font-bold">• 100% Calidad</span>
              </motion.div>

              {/* Floating Top-Right Badge: Live CTR Tracker */}
              <motion.div
                animate={{
                  y: [0, -6, 0],
                  scale: [1, 1.03, 1],
                }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-4 right-4 z-20 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/40 shadow-md flex items-center gap-1.5 text-[#191b22] text-xs font-bold"
              >
                <Activity className="w-3.5 h-3.5 text-[#4285F4]" />
                <span className="text-[#0058bd]">+450% Leads</span>
              </motion.div>

              {/* Floating Bottom Conversion Badge */}
              <motion.div
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
                className="absolute bottom-4 left-4 right-4 z-20 bg-white/95 backdrop-blur-md p-3.5 rounded-xl shadow-xl border border-white/50 flex items-center justify-between text-[#191b22]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-extrabold text-xs shadow-xs">
                    9.8/10
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <p className="text-xs font-bold text-gray-900 leading-tight">Nivel de Calidad Google</p>
                      <span className="bg-[#FBBC05]/20 text-[#926000] text-[10px] font-bold px-1.5 py-0.2 rounded">TOP</span>
                    </div>
                    <p className="text-[11px] text-gray-500 flex items-center gap-1 mt-0.5">
                      <MousePointer className="w-3 h-3 text-[#4285F4]" /> Clics convertidos sin fuga de dinero
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-xs font-black text-[#34A853] bg-green-50 px-2.5 py-1 rounded-md border border-green-200 shadow-2xs">
                    +340% ROAS
                  </span>
                  <span className="text-[10px] text-gray-400 mt-0.5">Costo x Lead ↓ 60%</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
