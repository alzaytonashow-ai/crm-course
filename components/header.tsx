import { MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Header() {
  const whatsappNumber = '201552537557'
  const whatsappMessage = 'مرحباً، أود الاستفسار عن كورس إدارة علاقات العملاء (CRM)'

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo Placeholder */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">CRM</span>
          </div>
          <div className="hidden sm:block">
            <h1 className="font-bold text-lg text-primary">أكاديمية CRM</h1>
            <p className="text-xs text-muted-foreground">تدريب احترافي</p>
          </div>
        </div>

        {/* WhatsApp Contact Button */}
        <a
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="gap-2 bg-secondary hover:bg-secondary/90 text-white">
            <MessageCircle size={18} />
            <span className="hidden sm:inline">تواصل معنا</span>
            <span className="sm:hidden">اتصل</span>
          </Button>
        </a>
      </div>
    </header>
  )
}
