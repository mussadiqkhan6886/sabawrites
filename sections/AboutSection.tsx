'use client'

import SectionTitle from '@/components/UserComp/SectionTitle'
import { motion } from 'framer-motion'
import React from 'react'

const AboutSection = () => {
  return (
    <section className="max-w-7xl h-[70vh] px-3 mx-auto flex items-center justify-center flex-col overflow-hidden">
      
      {/* Title */}
      <motion.div
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <SectionTitle firstWord="About" secondWord="Me" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="max-w-5xl mx-auto text-center mt-6 space-y-3"
        initial={{ y: 200 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
      >
        <p className="text-xl italic font-medium">
          Hi loves, I am Saba
        </p>

        <p>
          I write about beauty the way I experience it through endless scrolling,
          influencer reviews, TikTok type and that one day I will buy it feeling.
        </p>

        <p>
          This space is for curiosity, trends and beauty products everyone keeps
          talking about — not perfection or unrealistic routines.
        </p>
      </motion.div>

    </section>
  )
}

export default AboutSection
