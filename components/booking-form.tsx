'use client'

import { useState } from 'react'
import { Upload, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface FormData {
  fullName: string
  phone: string
  proofFile: File | null
}

export default function BookingForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phone: '',
    proofFile: null,
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({
        ...prev,
        proofFile: e.target.files![0],
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Create a message for WhatsApp
      const message = `
مرحباً، أود تأكيد حجزي في كورس CRM:
الاسم: ${formData.fullName}
رقم الهاتف: ${formData.phone}
`.trim()

      const whatsappLink = `https://wa.me/201552537557?text=${encodeURIComponent(message)}`
      window.open(whatsappLink, '_blank')

      setSubmitted(true)
      setTimeout(() => {
        setFormData({ fullName: '', phone: '', proofFile: null })
        setSubmitted(false)
      }, 3000)
    } finally {
      setLoading(false)
    }
  }

  const isFormValid = formData.fullName && formData.phone

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">تأكيد حجزك</h2>
          <p className="text-lg text-muted-foreground">
            ملء البيانات التالية لتأكيد حجزك وتسجيلك في الكورس
          </p>
        </div>

        {submitted ? (
          <div className="bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl p-8 sm:p-12 border-2 border-accent/40 text-center">
            <div className="w-16 h-16 rounded-full bg-accent/30 flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">✓</span>
            </div>
            <h3 className="text-2xl font-bold text-accent mb-2">شكراً لك!</h3>
            <p className="text-muted-foreground mb-4">
              تم استقبال بيانات حجزك. سنتواصل معك عبر WhatsApp قريباً لتأكيد التفاصيل.
            </p>
            <p className="text-sm text-muted-foreground">سيتم إعادة تحميل النموذج الآن...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-6 sm:p-10 border-2 border-border shadow-lg">
            <div className="space-y-6">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-foreground mb-2">
                  الاسم الكامل <span className="text-accent">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="أدخل اسمك الكامل"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-muted/50 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                  رقم الهاتف / WhatsApp <span className="text-accent">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="01xxxxxxxxx"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-muted/50 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  required
                />
              </div>

              {/* File Upload */}
              <div>
                <label htmlFor="proofFile" className="block text-sm font-semibold text-foreground mb-2">
                  إرسال إثبات التحويل (اختياري)
                </label>
                <div className="relative">
                  <input
                    type="file"
                    id="proofFile"
                    name="proofFile"
                    onChange={handleFileChange}
                    accept="image/*,.pdf"
                    className="sr-only"
                  />
                  <label
                    htmlFor="proofFile"
                    className="flex items-center justify-center w-full px-4 py-8 rounded-lg border-2 border-dashed border-border bg-muted/30 hover:bg-muted/50 cursor-pointer transition-colors"
                  >
                    <div className="text-center">
                      <Upload className="mx-auto mb-2 text-primary" size={32} />
                      <p className="text-sm font-semibold text-foreground">
                        {formData.proofFile ? formData.proofFile.name : 'انقر لرفع صورة أو ملف PDF'}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">صورة الشاشة أو إيصال التحويل</p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Terms Agreement */}
              <div className="bg-muted/50 rounded-lg p-4 border border-border">
                <p className="text-xs sm:text-sm text-muted-foreground">
                  بالضغط على "تأكيد وإرسال"، أنت توافق على استقبال اتصالات متابعة عبر WhatsApp بخصوص حجزك والكورس.
                </p>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={!isFormValid || loading}
                className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-bold text-base h-12 gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                {loading ? (
                  <>
                    <span className="inline-block animate-spin">⏳</span>
                    جاري المعالجة...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    تأكيد وإرسال بيانات الحجز
                  </>
                )}
              </Button>
            </div>
          </form>
        )}

        {/* Contact Alternative */}
        <div className="mt-8 text-center p-6 bg-card rounded-lg border border-border">
          <p className="text-sm text-muted-foreground mb-3">تفضل التواصل المباشر؟</p>
          <a
            href="https://wa.me/201552537557?text=مرحباً، أود الاستفسار عن كورس إدارة علاقات العملاء CRM"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="gap-2 bg-secondary hover:bg-secondary/90 text-white font-semibold">
              تواصل معنا عبر WhatsApp الآن
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
