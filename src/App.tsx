/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { SolutionPricing } from './components/SolutionPricing';
import { ServicesGrid } from './components/ServicesGrid';
import { Portfolio } from './components/Portfolio';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { LeadModal } from './components/LeadModal';
import { FloatingCta } from './components/FloatingCta';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState('general');

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const handleOpenModal = (source: string = 'general') => {
    setModalSource(source);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f9f9ff] text-[#191b22] font-sans antialiased selection:bg-[#4285F4] selection:text-white relative">
      {/* Scroll Progress Bar at top */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#FBBC05] origin-left z-50 pointer-events-none"
        style={{ scaleX }}
      />

      {/* Top Sticky Navigation */}
      <Navbar onOpenModal={handleOpenModal} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenModal={handleOpenModal} />

        {/* 2. Pain Points & Bottlenecks */}
        <PainPoints />

        {/* 3. Complete Solution & Pricing ($3,499 MXN/año) */}
        <SolutionPricing onOpenModal={handleOpenModal} />

        {/* 4. Services Details (Especialistas Certificados Google) */}
        <ServicesGrid onOpenModal={handleOpenModal} />

        {/* 5. Portfolio & Real Case Studies */}
        <Portfolio onOpenModal={handleOpenModal} />

        {/* 6. FAQ */}
        <FaqSection onOpenModal={handleOpenModal} />
      </main>

      {/* Footer */}
      <Footer onOpenModal={handleOpenModal} />

      {/* Lead Capture / Offer Claiming Modal */}
      <LeadModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        source={modalSource}
      />

      {/* Floating CTA & Scroll helper */}
      <FloatingCta onOpenModal={handleOpenModal} />
    </div>
  );
}

