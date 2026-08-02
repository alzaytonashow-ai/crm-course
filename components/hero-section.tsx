'use client'

import { ArrowLeft, Flame, Clock, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function HeroSection() {
  const scrollToPricing = () => {
    const element = document.getElementById('pricing-section')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const paymentLink = 'https://checkouts.kashier.io/en/paymentpage?ppLink=PP-1817925704,live'

  return (
    <section className="relative py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-400/30 animate-pulse">
            <Flame size={16} className="text-orange-400" />
            <span className="text-xs sm:text-sm font-semibold text-orange-300">ورشة عمل حضورية - أماكن محدودة</span>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-6 text-white leading-tight">
          احترف إدارة علاقات العملاء
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">(CRM)</span>
          <br />
          <span className="text-orange-300">وضاعف مبيعاتك بأتمتة ذكية</span>
        </h1>

        {/* Subheadline */}
        <p className="text-sm sm:text-base md:text-lg text-center text-slate-300 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
          كورس عملي 100% لتطبيق أنظمة CRM الاحترافية، بناء فانل مبيعات، وأتمتة خدمة العملاء. تدريب مباشر من متخصصين بخبرة عملية فعلية.
        </p>

        {/* Quick Stats Mobile-First */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-8 sm:mb-10">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-slate-700/50 text-center">
            <div className="flex justify-center mb-1 sm:mb-2">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
            </div>
            <p className="text-lg sm:text-2xl font-bold text-white">18</p>
            <p className="text-xs sm:text-sm text-slate-400">ساعة عملي</p>
          </div>
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-slate-700/50 text-center">
            <div className="flex justify-center mb-1 sm:mb-2">
              <Users className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
            </div>
            <p className="text-lg sm:text-2xl font-bold text-white">10</p>
            <p className="text-xs sm:text-sm text-slate-400">أشخاص فقط</p>
          </div>
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-slate-700/50 text-center">
            <div className="flex justify-center mb-1 sm:mb-2">
              <Flame className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400" />
            </div>
            <p className="text-lg sm:text-2xl font-bold text-white">100%</p>
            <p className="text-xs sm:text-sm text-slate-400">تطبيقي</p>
          </div>
        </div>

        {/* Instructor Preview Card - Optimized for Mobile */}
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-lg sm:rounded-2xl p-4 sm:p-6 border border-slate-700/50 mb-8 sm:mb-10 backdrop-blur">
          <div className="flex gap-3 sm:gap-4 items-start sm:items-center">
            <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl overflow-hidden ring-2 ring-cyan-500/30 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
              <span className="text-xl sm:text-3xl font-bold text-cyan-400">JI</span>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-base sm:text-lg font-bold text-white">Joseph Ibrahim</h3>
              <p className="text-xs sm:text-sm text-cyan-300 font-semibold">CRM Specialist & AI Solutions</p>
              <p className="text-xs text-slate-400 mt-1">معتمد من Vision AI Studio</p>
            </div>
          </div>
        </div>

        {/* Main CTA Buttons */}
        <div className="flex flex-col gap-3 sm:gap-4">
          <a href={paymentLink} target="_blank" rel="noopener noreferrer" className="w-full">
            <Button
              size="lg"
              className="w-full gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-6 sm:py-3 text-base sm:text-lg"
            >
              احجز مقعدك الآن
              <ArrowLeft size={20} />
            </Button>
          </a>
          <Button
            variant="outline"
            size="lg"
            onClick={scrollToPricing}
            className="w-full text-base sm:text-lg font-semibold py-6 sm:py-3 border-slate-600 text-slate-200 hover:bg-slate-800"
          >
            شاهد التفاصيل الكاملة
          </Button>
        </div>
      </div>
    </section>
  )
}
