'use client'

import { useState, useEffect } from 'react'
import { ArrowLeft, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function PricingSection() {
  const [timeLeft, setTimeLeft] = useState('00:00:00')

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      const endOfDay = new Date(now)
      endOfDay.setHours(23, 59, 59, 999)

      let diff = endOfDay.getTime() - now.getTime()
      if (diff < 0) {
        diff = 24 * 60 * 60 * 1000
      }

      const hours = Math.floor(diff / (1000 * 60 * 60))
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((diff % (1000 * 60)) / 1000)

      setTimeLeft(
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
      )
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const paymentLink = 'https://checkouts.kashier.io/en/paymentpage?ppLink=PP-1817925704,live'

  return (
    <section id="pricing-section" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted to-background">
      <div className="max-w-4xl mx-auto">
        {/* Urgency Badge */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/15 border border-accent/30 animate-pulse">
            <Zap size={16} className="text-accent" />
            <span className="text-sm font-bold text-accent">عرض حصري لأول 20 متدرب فقط!</span>
          </div>
        </div>

        {/* Main Pricing Card */}
        <div className="bg-gradient-to-br from-card via-card to-primary/5 rounded-2xl sm:rounded-3xl p-8 sm:p-12 border-2 border-primary/30 shadow-2xl relative overflow-hidden">
          {/* Corner decoration */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            {/* Header */}
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">عرض خاص - احجز الآن!</h2>
              <p className="text-base sm:text-lg text-muted-foreground">السعر ينتهي قريباً - تأمين مقعدك اليوم</p>
            </div>

            {/* Pricing Display */}
            <div className="flex flex-col items-center mb-8 sm:mb-12">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-base text-muted-foreground line-through">3,500 جنيه</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl sm:text-6xl font-bold text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
                  2,500
                </span>
                <span className="text-2xl font-bold text-muted-foreground">جنيه فقط</span>
              </div>
              <div className="mt-4 px-4 py-2 rounded-full bg-accent/20 border border-accent/40">
                <p className="text-sm font-semibold text-accent">توفير 1,000 جنيه 📉</p>
              </div>
            </div>

            {/* Booking Terms */}
            <div className="bg-secondary/10 border-l-4 border-secondary rounded-lg p-6 mb-8 sm:mb-12">
              <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-white text-xs font-bold">✓</span>
                شروط الحجز
              </h3>
              <ul className="space-y-2 text-sm sm:text-base">
                <li className="text-muted-foreground">
                  <strong className="text-foreground">1,000 جنيه عربون جدية</strong> - لتأكيد حجزك الآن
                </li>
                <li className="text-muted-foreground">
                  <strong className="text-foreground">الباقي 1,500 جنيه</strong> - عند حضور أول محاضرة
                </li>
                <li className="text-muted-foreground">سهل الدفع - دعم طرق دفع محلية وأونلاين</li>
              </ul>
            </div>

            {/* Countdown Timer */}
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-6 mb-8 sm:mb-12 border border-primary/20">
              <p className="text-sm text-muted-foreground text-center mb-2">العرض ينتهي في:</p>
              <div className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text font-mono">
                  {timeLeft}
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <a href={paymentLink} target="_blank" rel="noopener noreferrer" className="w-full">
              <Button size="lg" className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white text-lg font-bold h-14 sm:h-16 gap-2">
                احجز مقعدك الآن - 2,500 جنيه فقط <ArrowLeft size={24} />
              </Button>
            </a>

            {/* Money Back Guarantee */}
            <div className="mt-6 text-center">
              <p className="text-xs sm:text-sm text-muted-foreground">
                🛡️ <strong>ضمان الرضا:</strong> إذا لم تكن مرتاحاً، استرداد كامل المبلغ بدون أسئلة
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <div className="text-center p-4 sm:p-6 rounded-lg bg-card border border-border">
            <p className="text-2xl font-bold text-primary mb-1">18 ساعة</p>
            <p className="text-xs sm:text-sm text-muted-foreground">تطبيق عملي مركز</p>
          </div>
          <div className="text-center p-4 sm:p-6 rounded-lg bg-card border border-border">
            <p className="text-2xl font-bold text-secondary mb-1">شهادة معتمدة</p>
            <p className="text-xs sm:text-sm text-muted-foreground">معترف بها</p>
          </div>
          <div className="text-center p-4 sm:p-6 rounded-lg bg-card border border-border">
            <p className="text-2xl font-bold text-accent mb-1">دعم دائم</p>
            <p className="text-xs sm:text-sm text-muted-foreground">بعد انتهاء الكورس</p>
          </div>
        </div>
      </div>
    </section>
  )
}
