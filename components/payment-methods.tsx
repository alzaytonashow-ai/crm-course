'use client'

import { useState } from 'react'
import { Copy, CreditCard, Smartphone, Wallet } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function PaymentMethods() {
  const [copiedInstapay, setCopiedInstapay] = useState(false)

  const instapayNumber = '01552537557'
  const paymentLink = 'https://checkouts.kashier.io/en/paymentpage?ppLink=PP-1817925704,live'

  const copyToClipboard = (text: string, setcopied: (value: boolean) => void) => {
    navigator.clipboard.writeText(text)
    setcopied(true)
    setTimeout(() => setcopied(false), 2000)
  }

  return (
    <section className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 border-t border-slate-700/50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">طرق الدفع</h2>
          <p className="text-sm sm:text-base text-slate-300">اختر الطريقة المناسبة لك</p>
        </div>

        <div className="space-y-4 sm:space-y-5">
          {/* Instapay */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-lg sm:rounded-xl p-5 sm:p-6 border border-slate-700/50 hover:border-orange-500/50 transition-all">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                <Smartphone className="text-orange-400" size={20} />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white">Instapay</h3>
                <p className="text-xs sm:text-sm text-slate-400">تحويل فوري وآمن</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-lg p-4 mb-4 border border-slate-700">
              <p className="text-xs text-slate-400 mb-2">رقم الحساب:</p>
              <p className="text-lg sm:text-xl font-mono font-bold text-orange-400 mb-3 break-all">{instapayNumber}</p>
              <Button
                onClick={() => copyToClipboard(instapayNumber, setCopiedInstapay)}
                className="w-full gap-2 bg-orange-500/20 hover:bg-orange-500/30 text-orange-400 font-semibold border border-orange-500/30 text-xs sm:text-sm py-2 h-auto"
                variant="outline"
              >
                <Copy size={16} />
                {copiedInstapay ? 'تم النسخ ✓' : 'انسخ الرقم'}
              </Button>
            </div>

            <div className="bg-slate-900/50 rounded-lg p-3 border border-slate-700 text-xs text-slate-300 space-y-1">
              <p className="font-semibold text-slate-200 mb-2">الخطوات:</p>
              <p>• افتح تطبيق Instapay</p>
              <p>• تحويل أموال → الصق الرقم</p>
              <p>• أدخل 1,000 جنيه وأرسل</p>
            </div>
          </div>
        </div>

        {/* Online Payment Option */}
        <div className="mt-6 sm:mt-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg sm:rounded-xl p-5 sm:p-6 border-2 border-cyan-500/30">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
              <CreditCard className="text-cyan-400" size={20} />
            </div>
            <div className="flex-1">
              <h3 className="text-base sm:text-lg font-bold text-white mb-2">الدفع عبر الإنترنت</h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-4">
                بطاقة ائتمانية أو net banking عبر بوابة آمنة
              </p>
              <a href={paymentLink} target="_blank" rel="noopener noreferrer">
                <Button className="w-full gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold text-xs sm:text-sm py-2 h-auto">
                  <CreditCard size={16} />
                  ادفع الآن بالبطاقة
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Security Note with Professional Payment Icons */}
        <div className="mt-6 text-center p-3 sm:p-4 bg-slate-900/50 rounded-lg border border-slate-700">
          <p className="text-xs text-slate-400 mb-4">
            ✓ <strong className="text-slate-300">آمان مضمون:</strong> جميع المدفوعات محمية وآمنة 100%
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            {/* Apple Pay */}
            <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 text-white">
              <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 2c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H9zm0 2h6v16H9V4z"/>
              </svg>
            </div>
            
            {/* Mastercard */}
            <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-red-500 via-orange-500 to-red-600 text-white">
              <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="9" cy="12" r="5" opacity="0.8"/>
                <circle cx="15" cy="12" r="5" opacity="0.8"/>
              </svg>
            </div>
            
            {/* Visa */}
            <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 text-white">
              <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="currentColor">
                <rect x="3" y="5" width="18" height="14" rx="2"/>
                <text x="12" y="15" textAnchor="middle" fontSize="8" fontWeight="bold">VISA</text>
              </svg>
            </div>
            
            {/* Digital Wallet */}
            <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-slate-600 to-slate-700 text-cyan-400">
              <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 7V4H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm0 9h-4v4h-2v-4H9v-2h4v-4h2v4h4v2z" opacity="0.7"/>
                <rect x="5" y="7" width="14" height="10" fill="none" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
