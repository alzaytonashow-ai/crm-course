'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'هل الكورس مناسب للمبتدئين؟',
    answer:
      'نعم، الكورس مصمم ليكون مناسباً لجميع المستويات. سواء كنت مبتدئاً تماماً أو لديك خبرة سابقة، ستجد محتوى قيم. المدرب سيبدأ من الأساسيات ثم ينتقل للمستويات المتقدمة بشكل تدريجي.',
  },
  {
    question: 'ما هي الأجهزة والمتطلبات اللازمة؟',
    answer:
      'كل ما تحتاجه هو جهاز لابتوب أو كمبيوتر مع متصفح ويب حديث واتصال إنترنت جيد. يفضل أن تحضر دفتر ملاحظات وقلم للتدوين. المدرب سيوفر جميع الملفات والموارد المطلوبة.',
  },
  {
    question: 'كيف أضمن الاستفادة القصوى والتطبيق العملي؟',
    answer:
      'الكورس يركز على التطبيق العملي 100%. كل ساعة تشمل جزء نظري قصير ثم تطبيق مباشر. ستعمل على حالات واقعية من السوق، وستترك الكورس بخبرة عملية مباشرة وليس معلومات نظرية فقط.',
  },
  {
    question: 'هل ستحصل على شهادة؟',
    answer:
      'نعم، ستحصل على شهادة معتمدة من Vision AI Studio تثبت إتمامك للكورس بنجاح. الشهادة معترف بها وتساعدك في تطوير مسارك الوظيفي.',
  },
  {
    question: 'ماذا إذا فاتتني جلسة؟',
    answer:
      'لا تقلق، سيتم تسجيل جميع الجلسات وستحصل على فيديوهات التسجيل لمراجعتها. ستتمكن من الوصول لجميع المواد والملفات أيضاً.',
  },
  {
    question: 'هل هناك دعم بعد انتهاء الكورس؟',
    answer:
      'بالتأكيد! ستنضم لمجموعة WhatsApp خاصة للمتدربين حيث يمكنك طرح أسئلة والحصول على دعم من المدرب والمتدربين الآخرين لمدة 3 أشهر بعد انتهاء الكورس.',
  },
  {
    question: 'هل يمكنني استرجاع المبلغ إذا لم أكن راضياً؟',
    answer:
      'نعم، نحن واثقون من جودة الكورس. إذا لم تكن مرتاحاً بعد الجلسة الأولى، يمكنك استرجاع كامل المبلغ بدون أسئلة. رضاك هو أولويتنا.',
  },
  {
    question: 'هل الكورس معادل لشهادات عالمية؟',
    answer:
      'الشهادة من أكاديمية CRM معترف بها محلياً وإقليمياً. كما أن المعايير التي يتم التدريب عليها معايير عالمية متبعة في أفضل الشركات.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 border-t border-slate-700/50">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">الأسئلة الشائعة</h2>
          <p className="text-xs sm:text-sm text-slate-300">
            إجابات على أكثر الأسئلة من المتدربين
          </p>
        </div>

        <div className="space-y-2 sm:space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-lg border border-slate-700/50 overflow-hidden hover:border-cyan-500/30 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 flex items-start justify-between hover:bg-slate-800/50 transition-colors text-right"
              >
                <ChevronDown
                  size={18}
                  className={`flex-shrink-0 text-cyan-400 transition-transform duration-300 mt-1 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
                <h3 className="text-sm sm:text-base font-semibold text-white flex-1 pr-3">{faq.question}</h3>
              </button>

              {openIndex === index && (
                <div className="px-4 sm:px-6 pb-3 sm:pb-4 border-t border-slate-700 bg-slate-900/30">
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still have questions? */}
        <div className="mt-10 text-center p-5 sm:p-8 rounded-lg bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20">
          <h3 className="text-base sm:text-lg font-bold text-white mb-2">أسئلة أخرى؟</h3>
          <p className="text-xs sm:text-sm text-slate-300 mb-4">
            تواصل معنا مباشرة عبر WhatsApp
          </p>
          <a
            href="https://wa.me/201552537557?text=مرحباً، لدي سؤال حول كورس CRM مع Joseph Ibrahim"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 sm:px-6 py-2 rounded-lg bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold transition-colors gap-2 text-xs sm:text-sm"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-3.055 2.01-4.966 5.17-4.966 8.85 0 1.995.505 3.952 1.464 5.694l-1.557 5.697 5.849-1.542c1.640.923 3.997 1.679 5.674 1.679 5.207 0 9.44-4.232 9.44-9.44 0-2.234-.775-4.331-2.235-6.07-1.47-1.738-3.52-2.738-5.635-2.738z" />
            </svg>
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
