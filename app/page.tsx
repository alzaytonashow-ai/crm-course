'use client'

import { useState } from 'react'
import Header from '@/components/header'
import HeroSection from '@/components/hero-section'
import KeyInfoBar from '@/components/key-info-bar'
import WhatYouLearn from '@/components/what-you-learn'
import PricingSection from '@/components/pricing-section'
import PaymentMethods from '@/components/payment-methods'
import BookingForm from '@/components/booking-form'
import FAQSection from '@/components/faq-section'
import Footer from '@/components/footer'

export default function Page() {
  const [scrolled, setScrolled] = useState(false)

  return (
    <main className="bg-background text-foreground min-h-screen">
      <Header />
      <HeroSection />
      <KeyInfoBar />
      <WhatYouLearn />
      <PricingSection />
      <PaymentMethods />
      <BookingForm />
      <FAQSection />
      <Footer />
    </main>
  )
}
