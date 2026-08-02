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
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">ماذا ستتعلم؟</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            برنامج شامل يغطي كل جوانب إدارة العملاء الاحترافية والعملية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {learningItems.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="group bg-card rounded-xl p-6 sm:p-8 border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-secondary/30 transition-colors">
                  <Icon size={28} className="text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>

        {/* Bonus Section */}
        <div className="mt-12 sm:mt-16 bg-gradient-to-r from-accent/10 via-primary/5 to-secondary/10 rounded-2xl p-8 sm:p-12 border border-accent/20">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/40 mb-4">
              <Zap size={16} className="text-accent" />
              <span className="text-sm font-semibold text-accent">مكافآت إضافية</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">ستحصل على</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="text-center">
                <p className="text-lg font-bold text-primary mb-1">نماذج وقوالب</p>
                <p className="text-sm text-muted-foreground">جاهزة للاستخدام مباشرة</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold text-secondary mb-1">مجموعة دعم</p>
                <p className="text-sm text-muted-foreground">للمتابعة بعد انتهاء الكورس</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold text-accent mb-1">فيديوهات تسجيل</p>
                <p className="text-sm text-muted-foreground">للمراجعة في أي وقت</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
