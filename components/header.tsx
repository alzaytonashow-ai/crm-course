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
        {/* Logo and Instructor Badge Section */}
        <div className="flex items-center gap-2 sm:gap-4 min-w-0 flex-1">
          <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg overflow-hidden bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center ring-2 ring-cyan-500/20">
            <Image
              src="/images/crm-logo.png"
              alt="CRM"
              width={48}
              height={48}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden lg:flex items-center gap-3 flex-1 min-w-0">
            <div className="flex items-center gap-3">
              {/* Instructor Headshot */}
              <div className="w-12 h-12 rounded-lg overflow-hidden ring-2 ring-cyan-500/40 flex-shrink-0">
                <Image
                  src="/images/joseph-headshot.jpg"
                  alt="Joseph Ibrahim"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              {/* Instructor Info */}
              <div className="min-w-0 flex-1">
                <h2 className="text-sm font-bold text-white truncate">Joseph Ibrahim</h2>
                <p className="text-xs text-cyan-300 font-semibold truncate">CRM Specialist & AI Solutions</p>
                <p className="text-xs text-slate-400 truncate">معتمد من Vision AI Studio</p>
              </div>
            </div>
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
