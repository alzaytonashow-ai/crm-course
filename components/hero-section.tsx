import { ArrowLeft, Badge, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function HeroSection() {
  const scrollToPricing = () => {
    const element = document.getElementById('pricing-section')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const paymentLink = 'https://checkouts.kashier.io/en/paymentpage?ppLink=PP-1817925704,live'

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted to-background">
      <div className="max-w-6xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30">
            <Zap size={16} className="text-accent" />
            <span className="text-sm font-medium text-accent">ورشة عمل حضورية - الأماكن محدودة جداً</span>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 sm:mb-6 text-foreground leading-tight">
          احترف إدارة علاقات العملاء <span className="text-primary">(CRM)</span>
          <br />
          <span className="text-accent">وضاعف مبيعاتك وتدفق عملائك</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-center text-muted-foreground mb-10 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
          كورس عملي 100% لتطبيق أشهر أنظمة الـ CRM، بناء مسارات المبيعات، وأتمتة خدمة العملاء بنفسك. تدريب مكثف من متخصصين بتطبيق فعلي.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mb-12">
          {/* Instructor Info Card */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-2xl p-6 sm:p-8 border border-border shadow-lg">
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                {/* Instructor Image Placeholder */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-xl bg-gradient-to-br from-primary to-secondary overflow-hidden">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/762513305_2456318684893010_7038184639347102897_n-cGjl08aCQIlHhqdR32a7WjFT0N2jC0.jpg"
                      alt="المدرب"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">المدرب المتخصص</h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4">
                    خبراء معتمدون في أنظمة CRM مع سنوات من التطبيق العملي والنجاح في زيادة مبيعات الشركات المختلفة.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">HubSpot معتمد</span>
                    <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-medium">Salesforce متخصص</span>
                    <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">Zoho خبير</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="space-y-4">
            <div className="bg-primary/10 rounded-xl p-6 border border-primary/20">
              <p className="text-3xl font-bold text-primary mb-1">18</p>
              <p className="text-sm text-muted-foreground">ساعة تطبيق عملي مركز</p>
            </div>
            <div className="bg-secondary/10 rounded-xl p-6 border border-secondary/20">
              <p className="text-3xl font-bold text-secondary mb-1">10</p>
              <p className="text-sm text-muted-foreground">أفراد كحد أقصى لكل مجموعة</p>
            </div>
            <div className="bg-accent/10 rounded-xl p-6 border border-accent/20">
              <p className="text-3xl font-bold text-accent mb-1">100%</p>
              <p className="text-sm text-muted-foreground">عملي وتطبيقي</p>
            </div>
          </div>
        </div>

        {/* Main CTA Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={paymentLink} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="w-full sm:w-auto gap-2 bg-primary hover:bg-primary/90 text-white text-base font-semibold px-8">
              احجز مقعدك الآن <ArrowLeft size={20} />
            </Button>
          </a>
          <Button
            variant="outline"
            size="lg"
            onClick={scrollToPricing}
            className="w-full sm:w-auto text-base font-semibold"
          >
            عرض التفاصيل والسعر
          </Button>
        </div>
      </div>
    </section>
  )
}
