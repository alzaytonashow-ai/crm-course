'use client'

import { useState, useEffect } from 'react'
import { ArrowLeft, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface PaymentInfo {
  instapay: { number: string }
  paymentLink: string
  amount: number
  originalAmount: number
  discount: number
}

export default function PricingSection() {
  const [timeLeft, setTimeLeft] = useState('00:00:00')
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo | null>(null)

  useEffect(() => {
    // Fetch payment info from API
    const fetchPaymentInfo = async () => {
      try {
        const response = await fetch('/api/payment-info')
        const data = await response.json()
        setPaymentInfo(data)
      } catch (error) {
        console.error('Failed to fetch payment info:', error)
      }
    }

    fetchPaymentInfo()

    // Countdown timer
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

  const paymentLink = paymentInfo?.paymentLink || 'https://checkouts.kashier.io/en/paymentpage?ppLink=PP-1817925704,live'

  return (
    <section id="pricing-section" className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Urgency Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-400/30 animate-pulse">
            <Zap size={14} className="text-orange-400" />
            <span className="text-xs sm:text-sm font-bold text-orange-300">عرض حصري - أول 20 متدرب فقط!</span>
          </div>
        </div>

        {/* Main Pricing Card */}
        <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-900/50 rounded-lg sm:rounded-2xl p-6 sm:p-10 border-2 border-cyan-500/30 shadow-2xl relative overflow-hidden">
          {/* Corner decoration */}
          <div className="absolute -top-16 -right-16 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">عرض خاص - احجز اليوم!</h2>
              <p className="text-xs sm:text-sm text-slate-300">السعر يتغير قريباً - ضمّن مقعدك الآن</p>
            </div>

            {/* Pricing Display */}
            <div className="flex flex-col items-center mb-8">
              <div className="flex items-baseline gap-3 mb-3">
                <span className="text-sm sm:text-base text-slate-400 line-through">
                  {paymentInfo?.originalAmount.toLocaleString('en-US')} جنيه
                </span>
              </div>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  {paymentInfo?.amount.toLocaleString('en-US') || '2,500'}
                </span>
                <span className="text-lg sm:text-xl font-bold text-slate-300">جنيه</span>
              </div>
              <div className="px-3 sm:px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30">
                <p className="text-xs sm:text-sm font-semibold text-green-300">
                  توفير {paymentInfo?.discount.toLocaleString('en-US') || '1,000'} جنيه ✓
                </p>
              </div>
            </div>

            {/* Booking Terms */}
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-r-4 border-cyan-400 rounded-lg p-4 sm:p-6 mb-8">
              <h3 className="font-bold text-white mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-cyan-500 flex items-center justify-center text-slate-900 text-xs font-bold">✓</span>
                شروط الدفع
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                <li>
                  <strong className="text-cyan-300">1,000 جنيه</strong> - عربون تأكيد الحجز
                </li>
                <li>
                  <strong className="text-cyan-300">1,500 جنيه</strong> - عند الحضور
                </li>
                <li>طرق دفع متعددة - محلية وأونلاين آمنة</li>
              </ul>
            </div>

            {/* Countdown Timer */}
            <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-lg p-4 sm:p-6 mb-8 border border-orange-400/20">
              <p className="text-xs sm:text-sm text-slate-300 text-center mb-3">العرض ينتهي في:</p>
              <div className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 font-mono">
                  {timeLeft}
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <a href={paymentLink} target="_blank" rel="noopener noreferrer" className="w-full block">
              <Button size="lg" className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-6 sm:py-3 text-base sm:text-lg gap-2">
                احجز الآن - 2,500 جنيه فقط
                <ArrowLeft size={20} />
              </Button>
            </a>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          <div className="text-center p-4 rounded-lg bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50">
            <p className="text-xl sm:text-2xl font-bold text-cyan-400 mb-1">18 ساعة</p>
            <p className="text-xs text-slate-400">تطبيق عملي</p>
          </div>
          <div className="text-center p-4 rounded-lg bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50">
            <p className="text-xl sm:text-2xl font-bold text-cyan-400 mb-1">معتمدة</p>
            <p className="text-xs text-slate-400">من Vision AI</p>
          </div>
          <div className="text-center p-4 rounded-lg bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50">
            <p className="text-xl sm:text-2xl font-bold text-cyan-400 mb-1">دعم دائم</p>
            <p className="text-xs text-slate-400">ما بعد الكورس</p>
          </div>
        </div>
      </div>
    </section>
  )
}
