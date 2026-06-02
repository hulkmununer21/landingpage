import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import Services from '@/components/sections/Services'
import WhatWeDo from '@/components/sections/Tracking'
import CTA from '@/components/sections/CTA'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <Services />
      <WhatWeDo />
      <CTA />
      <Footer />
    </main>
  )
}
