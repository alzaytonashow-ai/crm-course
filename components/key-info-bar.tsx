import { MapPin, Clock, Award, Users } from 'lucide-react'

export default function KeyInfoBar() {
  const infoItems = [
    {
      icon: MapPin,
      title: 'المكان',
      value: 'القاهرة - مصر',
      description: 'موقع متميز وسهل الوصول',
    },
    {
      icon: Clock,
      title: 'المدة التدريبية',
      value: '18 ساعة',
      description: 'تطبيق عملي مركز',
    },
    {
      icon: Award,
      title: 'الشهادة',
      value: 'معتمدة',
      description: 'شهادة إتمام معتمدة',
    },
    {
      icon: Users,
      title: 'العدد',
      value: 'حد أقصى 10',
      description: 'مجموعات صغيرة للتطبيق الفردي',
    },
  ]

  return (
    <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 border-y border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {infoItems.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-4 sm:p-6 rounded-lg bg-card/50 border border-border/50 hover:border-border hover:bg-card/80 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <Icon size={24} className="text-primary" />
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground mb-1">{item.title}</p>
                <p className="text-lg sm:text-xl font-bold text-foreground mb-1">{item.value}</p>
                <p className="text-xs text-muted-foreground">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
