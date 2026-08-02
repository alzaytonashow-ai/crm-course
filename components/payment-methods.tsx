'use client'

import { useState } from 'react'
import { Copy, CreditCard, Smartphone } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function PaymentMethods() {
  const [copiedVodafone, setCopiedVodafone] = useState(false)
  const [copiedInstapay, setCopiedInstapay] = useState(false)

  const vodafoneNumber = '201552537557'
  const instapayNumber = '201552537557'
  const paymentLink = 'https://checkouts.kashier.io/en/paymentpage?ppLink=PP-1817925704,live'

  const copyToClipboard = (text: string, setcopied: (value: boolean) => void) => {
    navigator.clipboard.writeText(text)
    setcopied(true)
    setTimeout(() => setcopied(false), 2000)
  }

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-background border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">طرق الدفع المتاحة</h2>
          <p className="text-lg text-muted-foreground">اختر الطريقة التي تناسبك</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Vodafone Cash */}
          <div className="bg-gradient-to-br from-red-50 to-card rounded-xl p-6 sm:p-8 border-2 border-red-200 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center">
                <Smartphone className="text-red-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Vodafone Cash</h3>
                <p className="text-sm text-muted-foreground">التحويل المباشر</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 mb-4 border border-red-100">
              <p className="text-xs text-muted-foreground mb-2">رقم المحفظة</p>
              <p className="text-2xl font-mono font-bold text-foreground mb-3">{vodafoneNumber}</p>
              <Button
                onClick={() => copyToClipboard(vodafoneNumber, setCopiedVodafone)}
                className="w-full gap-2 bg-red-100 hover:bg-red-200 text-red-700 font-semibold"
                variant="outline"
              >
                <Copy size={18} />
                {copiedVodafone ? 'تم النسخ ✓' : 'انسخ الرقم'}
              </Button>
            </div>

            <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
              <p className="text-xs font-semibold text-amber-900 mb-2">خطوات الدفع:</p>
              <ol className="text-xs text-amber-800 space-y-1 list-decimal list-inside">
                <li>اختر تحويل أموال</li>
                <li>الصق الرقم المحفوظ</li>
                <li>أدخل المبلغ 1,000 جنيه</li>
                <li>أرسل أكمل الدفع</li>
              </ol>
            </div>
          </div>

          {/* Instapay */}
          <div className="bg-gradient-to-br from-orange-50 to-card rounded-xl p-6 sm:p-8 border-2 border-orange-200 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center">
                <Smartphone className="text-orange-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Instapay</h3>
                <p className="text-sm text-muted-foreground">التحويل الفوري</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 mb-4 border border-orange-100">
              <p className="text-xs text-muted-foreground mb-2">رقم الحساب</p>
              <p className="text-2xl font-mono font-bold text-foreground mb-3">{instapayNumber}</p>
              <Button
                onClick={() => copyToClipboard(instapayNumber, setCopiedInstapay)}
                className="w-full gap-2 bg-orange-100 hover:bg-orange-200 text-orange-700 font-semibold"
                variant="outline"
              >
                <Copy size={18} />
                {copiedInstapay ? 'تم النسخ ✓' : 'انسخ الرقم'}
              </Button>
            </div>

            <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
              <p className="text-xs font-semibold text-amber-900 mb-2">خطوات الدفع:</p>
              <ol className="text-xs text-amber-800 space-y-1 list-decimal list-inside">
                <li>افتح تطبيق Instapay</li>
                <li>اختر تحويل أموال</li>
                <li>الصق الرقم المحفوظ</li>
                <li>أدخل 1,000 جنيه وأرسل</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Online Payment Option */}
        <div className="mt-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6 sm:p-8 border-2 border-primary/30">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
              <CreditCard className="text-primary" size={24} />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-foreground mb-2">الدفع عبر الإنترنت</h3>
              <p className="text-sm text-muted-foreground mb-4">
                ادفع ببطاقتك الائتمانية أو حسابك البنكي بشكل آمن عبر البوابة المشفرة
              </p>
              <a href={paymentLink} target="_blank" rel="noopener noreferrer">
                <Button className="gap-2 bg-primary hover:bg-primary/90 text-white font-semibold">
                  <CreditCard size={18} />
                  ادفع باستخدام البطاقة أو النت بنكنج
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Security Note */}
        <div className="mt-8 text-center p-4 bg-muted/50 rounded-lg border border-border">
          <p className="text-xs sm:text-sm text-muted-foreground">
            🔒 <strong>آمان الدفع:</strong> جميع عمليات الدفع محمية وآمنة بنسبة 100%
          </p>
        </div>
      </div>
    </section>
  )
}
