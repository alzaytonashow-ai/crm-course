import { MessageCircle, Phone, Mail } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const whatsappNumber = '201552537557'
  const whatsappLink = `https://wa.me/${whatsappNumber}`

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-700/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-4 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0">
                <Image
                  src="/images/icon.png"
                  alt="CRM Course Logo"
                  width={36}
                  height={36}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-bold text-sm sm:text-base text-white">كورس CRM</h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              تدريب عملي احترافي في أنظمة إدارة العملاء لتحقيق نتائج فعلية وزيادة المبيعات.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-foreground mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              <li>
                <a href="#pricing-section" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  الأسعار والعروض
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  البرنامج الدراسي
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  الشهادات
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  المتطلبات
                </a>
              </li>
            </ul>
          </div>

          {/* Course Info */}
          <div>
            <h4 className="font-bold text-foreground mb-4">معلومات الكورس</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>📍 <strong>المكان:</strong> القاهرة - العباسية / مدينة نصر / مصر الجديدة</li>
              <li>⏱️ <strong>المدة:</strong> 18 ساعة عملي</li>
              <li>👥 <strong>العدد:</strong> 10 متدربين كحد أقصى</li>
              <li>📜 <strong>الشهادة:</strong> معتمدة</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-foreground mb-4">تواصل معنا</h4>
            <div className="space-y-3">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:text-cyan-300 transition-colors group"
              >
                <MessageCircle size={18} className="text-green-400 group-hover:text-green-300 transition-colors" />
                <span className="text-cyan-300">+201552537557</span>
              </a>
              <a
                href="tel:+201552537557"
                className="flex items-center gap-2 text-sm hover:text-cyan-300 transition-colors group"
              >
                <Phone size={18} className="text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                <span className="text-cyan-300">+201552537557</span>
              </a>
              <a
                href="mailto:crm-course@aistudio-vision.com"
                className="flex items-center gap-2 text-sm hover:text-blue-300 transition-colors group"
              >
                <Mail size={18} className="text-blue-400 group-hover:text-blue-300 transition-colors" />
                <span className="text-blue-300">crm-course@aistudio-vision.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} أكاديمية CRM. جميع الحقوق محفوظة.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-foreground transition-colors">
              سياسة الخصوصية
            </a>
            <span>•</span>
            <a href="#" className="hover:text-foreground transition-colors">
              شروط الاستخدام
            </a>
            <span>•</span>
            <a href="#" className="hover:text-foreground transition-colors">
              تواصل معنا
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
