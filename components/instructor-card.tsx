'use client'

import Image from 'next/image'
import { Star } from 'lucide-react'

export default function InstructorCard() {
  return (
    <section className="px-4 py-12 sm:px-6 md:py-16 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
            مدربك في هذا الكورس
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            متخصص في أنظمة إدارة العملاء والذكاء الاصطناعي
          </p>
        </div>

        {/* Instructor Card */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-700/50 overflow-hidden">
          {/* Decorative background */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl -z-10"></div>

          {/* Instructor Info */}
          <div className="flex flex-col items-center text-center">
            {/* Instructor Image Placeholder */}
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 mb-6 rounded-full overflow-hidden ring-4 ring-cyan-500/30 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
              <div className="text-4xl sm:text-5xl text-cyan-400">JI</div>
            </div>

            {/* Instructor Name */}
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
              Joseph Ibrahim
            </h3>

            {/* Credentials */}
            <p className="text-sm text-cyan-300 font-semibold mb-4">
              CRM Specialist & AI Solutions Architect
            </p>

            {/* Rating */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-sm text-slate-300">(98 تقييم إيجابي)</span>
            </div>

            {/* Certification Badge */}
            <div className="mb-6 w-full">
              <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-lg p-4 border border-blue-500/30">
                <p className="text-xs sm:text-sm text-slate-200 mb-3 font-semibold">
                  معتمد من:
                </p>
                <div className="flex justify-center mb-3">
                  <Image
                    src="/images/vision-ai-studio.jpg"
                    alt="Vision AI Studio"
                    width={160}
                    height={60}
                    className="h-12 object-contain"
                  />
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  شهادة معتمدة من Vision AI Studio لحلول الذكاء الاصطناعي للمؤسسات والشركات والأتمتة
                </p>
              </div>
            </div>

            {/* Bio */}
            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              لديه أكثر من 8 سنوات خبرة في تطبيق أنظمة CRM وحلول الذكاء الاصطناعي في الشركات الكبرى. تخصص في بناء العمليات الآلية وتحسين علاقات العملاء بكفاءة عالية.
            </p>

            {/* Expertise List */}
            <div className="grid grid-cols-2 gap-3 w-full text-xs text-slate-300">
              <div className="bg-slate-700/50 rounded-lg p-3 text-center">
                <div className="text-cyan-400 font-bold mb-1">+500</div>
                <div>متدرب معهم</div>
              </div>
              <div className="bg-slate-700/50 rounded-lg p-3 text-center">
                <div className="text-cyan-400 font-bold mb-1">98%</div>
                <div>معدل الرضا</div>
              </div>
              <div className="bg-slate-700/50 rounded-lg p-3 text-center">
                <div className="text-cyan-400 font-bold mb-1">+50</div>
                <div>شركة مدربة</div>
              </div>
              <div className="bg-slate-700/50 rounded-lg p-3 text-center">
                <div className="text-cyan-400 font-bold mb-1">Live</div>
                <div>تطبيقات واقعية</div>
              </div>
            </div>
          </div>

          {/* CTA at bottom */}
          <div className="mt-8 pt-6 border-t border-slate-700/50">
            <p className="text-xs text-slate-400 text-center mb-3">
              سيقوم Joseph بتطبيق حالات واقعية مباشرة مع المتدربين
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
