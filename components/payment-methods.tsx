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

        {/* Security Note with Payment Icons */}
        <div className="mt-6 text-center p-3 sm:p-4 bg-slate-900/50 rounded-lg border border-slate-700">
          <p className="text-xs text-slate-400 mb-3">
            ✓ <strong className="text-slate-300">آمان مضمون:</strong> جميع المدفوعات محمية وآمنة 100%
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <div className="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-800 border border-slate-600">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor" className="text-gray-300">
                <path d="M19 8.5H5c-1.66 0-3 1.34-3 3v5c0 1.66 1.34 3 3 3h14c1.66 0 3-1.34 3-3v-5c0-1.66-1.34-3-3-3zm0 8h-14v-5h14v5z"/>
              </svg>
            </div>
            <div className="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-800 border border-slate-600">
              <CreditCard className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
            </div>
            <div className="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-800 border border-slate-600">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor" className="text-red-400">
                <circle cx="8" cy="12" r="6"/>
                <circle cx="16" cy="12" r="6"/>
              </svg>
            </div>
            <div className="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-800 border border-slate-600">
              <Wallet className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
