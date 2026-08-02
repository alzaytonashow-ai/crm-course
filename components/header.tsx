'use client'

import Image from 'next/image'
import { MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Header() {
  const whatsappNumber = '201552537557'
  const whatsappMessage = 'مرحباً، أود الاستفسار عن كورس إدارة علاقات العملاء (CRM) مع Joseph Ibrahim'

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-b from-slate-950 to-slate-900/95 backdrop-blur-md border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between gap-4">
        {/* Logo Section */}
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg overflow-hidden bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center ring-2 ring-cyan-500/20">
            <Image
              src="/images/crm-logo.png"
              alt="CRM"
              width={48}
              height={48}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden sm:block min-w-0">
            <h1 className="font-bold text-base sm:text-lg text-white truncate">
              كورس CRM
            </h1>
            <p className="text-xs text-slate-400 truncate">مع Joseph Ibrahim</p>
          </div>
        </div>

        {/* WhatsApp Contact Button */}
        <a
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0"
        >
          <Button className="gap-1.5 border border-cyan-500/40 hover:border-cyan-500/70 hover:bg-cyan-500/10 bg-slate-900/50 text-cyan-300 hover:text-cyan-200 text-xs sm:text-sm px-3 sm:px-4 py-2 h-auto transition-all duration-300">
            <MessageCircle size={16} />
            <span className="hidden sm:inline">تواصل معنا</span>
          </Button>
        </a>
      </div>
    </header>
  )
}
