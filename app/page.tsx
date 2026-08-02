'use client'

import Header from '@/components/header'
import HeroSection from '@/components/hero-section'
import KeyInfoBar from '@/components/key-info-bar'
import WhatYouLearn from '@/components/what-you-learn'
import InstructorCard from '@/components/instructor-card'
import PricingSection from '@/components/pricing-section'
import PaymentMethods from '@/components/payment-methods'
import BookingForm from '@/components/booking-form'
import FAQSection from '@/components/faq-section'
import Footer from '@/components/footer'

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Header />
      <HeroSection />
      <KeyInfoBar />
      <WhatYouLearn />
      <InstructorCard />
      <PricingSection />
      <PaymentMethods />
      <BookingForm />
      <FAQSection />
      <Footer />
    </main>
  )
}
