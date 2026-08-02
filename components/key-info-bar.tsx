import { MapPin, Calendar, Trophy, Users, CheckCircle } from 'lucide-react'

export default function KeyInfoBar() {
  const infoItems = [
    {
      icon: MapPin,
      title: 'المكان',
      value: 'القاهرة',
      description: 'موقع متميز وسهل الوصول',
    },
    {
      icon: Calendar,
      title: 'المدة',
      value: '18 ساعة',
      description: 'تطبيق عملي مركز',
    },
    {
      icon: Trophy,
      title: 'الشهادة',
      value: 'معتمدة',
      description: 'من Vision AI Studio',
    },
    {
      icon: Users,
      title: 'العدد',
      value: 'حد أقصى 10',
      description: 'مجموعات صغيرة',
    },
  ]

  return (
    <section className="py-6 sm:py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/5 via-transparent to-blue-500/5 border-y border-slate-700/50">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3">
          {infoItems.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-3 sm:p-4 rounded-lg bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-slate-700/30 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-2">
                  <Icon size={20} className="text-cyan-400" />
                </div>
                <p className="text-xs text-slate-400 mb-1 font-medium">{item.title}</p>
                <p className="text-sm sm:text-base font-bold text-white mb-0.5">{item.value}</p>
                <p className="text-xs text-slate-500">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
