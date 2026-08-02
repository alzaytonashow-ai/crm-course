import { CheckCircle2, BarChart3, Zap, Settings, Workflow, Users } from 'lucide-react'

export default function WhatYouLearn() {
  const learningItems = [
    {
      icon: Settings,
      title: 'إعداد وتخصيص أنظمة CRM',
      description: 'تعلم كيفية إعداد وتخصيص أشهر أنظمة CRM مثل HubSpot و Zoho و Salesforce بما يناسب احتياجات عملك.',
    },
    {
      icon: BarChart3,
      title: 'تصميم مسارات المبيعات',
      description: 'بناء Sales Funnels احترافية وتتبع العملاء عبر مراحل البيع المختلفة بكفاءة عالية.',
    },
    {
      icon: Zap,
      title: 'أتمتة العمليات',
      description: 'إعداد أتمتة ذكية للمتابعات التلقائية وتوفير الوقت والجهد في إدارة العملاء.',
    },
    {
      icon: Users,
      title: 'إدارة بيانات العملاء',
      description: 'تصنيف وتنظيم بيانات العملاء بطريقة تؤدي إلى أعلى معدل تحويل ممكن.',
    },
    {
      icon: Workflow,
      title: 'ورش عمل وتطبيق عملي',
      description: 'تطبيق فوري لكل ما تتعلمه أثناء الجلسات مع حالات واقعية من السوق.',
    },
    {
      icon: CheckCircle2,
      title: 'تقارير وتحليلات',
      description: 'قراءة وتفسير التقارير المهمة واستخدام البيانات لاتخاذ قرارات مبيعات ذكية.',
    },
  ]

  return (
    <section className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">ماذا ستتعلم؟</h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            برنامج شامل وعملي يغطي كل جوانب إدارة العملاء بكفاءة واحترافية
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {learningItems.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-lg sm:rounded-xl p-5 sm:p-6 border border-slate-700/50 hover:border-cyan-500/50 hover:from-slate-800 transition-all duration-300"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-3 sm:mb-4 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-colors">
                  <Icon size={24} className="text-cyan-400" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>

        {/* Bonus Section */}
        <div className="mt-10 sm:mt-14 bg-gradient-to-r from-cyan-500/10 via-blue-500/5 to-purple-500/10 rounded-lg sm:rounded-2xl p-6 sm:p-8 border border-cyan-500/20">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-400/30 mb-4">
              <Zap size={16} className="text-cyan-400" />
              <span className="text-xs sm:text-sm font-semibold text-cyan-300">مكافآت إضافية</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">بالإضافة ستحصل على:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
                <p className="text-sm sm:text-base font-bold text-cyan-400 mb-1">نماذج جاهزة</p>
                <p className="text-xs text-slate-400">للاستخدام الفوري</p>
              </div>
              <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
                <p className="text-sm sm:text-base font-bold text-cyan-400 mb-1">مجموعة دعم</p>
                <p className="text-xs text-slate-400">متابعة بعد الكورس</p>
              </div>
              <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
                <p className="text-sm sm:text-base font-bold text-cyan-400 mb-1">فيديوهات تسجيل</p>
                <p className="text-xs text-slate-400">للمراجعة أي وقت</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
