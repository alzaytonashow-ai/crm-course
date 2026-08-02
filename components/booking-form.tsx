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
    <section className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">تأكيد حجزك</h2>
          <p className="text-xs sm:text-sm text-slate-300">
            أكمل بيانات التسجيل وسنتواصل معك قريباً
          </p>
        </div>

        {submitted ? (
          <div className="bg-gradient-to-br from-cyan-500/10 to-green-500/10 rounded-lg sm:rounded-xl p-6 sm:p-8 border-2 border-cyan-500/30 text-center">
            <div className="w-14 h-14 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">✓</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-cyan-300 mb-2">شكراً لك!</h3>
            <p className="text-xs sm:text-sm text-slate-300 mb-2">
              تم استقبال بيانات حجزك. سنتواصل معك عبر WhatsApp قريباً.
            </p>
            <p className="text-xs text-slate-400">سيتم تحديث النموذج...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-lg sm:rounded-xl p-5 sm:p-8 border border-slate-700/50">
            <div className="space-y-5">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-xs sm:text-sm font-semibold text-white mb-2">
                  الاسم الكامل <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="أدخل اسمك الكامل"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-slate-600 bg-slate-900/50 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all text-sm"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-xs sm:text-sm font-semibold text-white mb-2">
                  رقم الهاتف / WhatsApp <span className="text-red-400">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="01xxxxxxxxx"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-slate-600 bg-slate-900/50 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all text-sm"
                  required
                />
              </div>

              {/* File Upload */}
              <div>
                <label htmlFor="proofFile" className="block text-xs sm:text-sm font-semibold text-white mb-2">
                  إثبات التحويل (اختياري)
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
                    className="flex items-center justify-center w-full px-4 py-6 sm:py-8 rounded-lg border-2 border-dashed border-slate-600 bg-slate-900/30 hover:bg-slate-900/50 cursor-pointer transition-colors"
                  >
                    <div className="text-center">
                      <Upload className="mx-auto mb-2 text-cyan-400" size={24} />
                      <p className="text-xs sm:text-sm font-semibold text-white">
                        {formData.proofFile ? formData.proofFile.name : 'اضغط لرفع صورة'}
                      </p>
                      <p className="text-xs text-slate-400 mt-1">صورة أو PDF</p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Terms Agreement */}
              <div className="bg-slate-900/50 rounded-lg p-3 sm:p-4 border border-slate-700">
                <p className="text-xs text-slate-400">
                  بالحجز أنت توافق على تلقي تحديثات حول الكورس عبر WhatsApp
                </p>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={!isFormValid || loading}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold text-sm sm:text-base py-3 gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                {loading ? (
                  <>
                    <span className="inline-block animate-spin">⏳</span>
                    جاري المعالجة...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    تأكيد بيانات الحجز
                  </>
                )}
              </Button>
            </div>
          </form>
        )}

        {/* Contact Alternative */}
        <div className="mt-6 text-center p-4 sm:p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-lg border border-slate-700">
          <p className="text-xs sm:text-sm text-slate-300 mb-3">تفضل التواصل المباشر؟</p>
          <a
            href="https://wa.me/201552537557?text=مرحباً، أود الاستفسار عن كورس CRM مع Joseph Ibrahim"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="w-full gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold text-xs sm:text-sm">
              اتصل بنا عبر WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
