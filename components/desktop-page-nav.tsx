'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const orderedPages = [
  { label: 'Home', href: '/' },
  { label: 'Education', href: '/education' },
  { label: 'Experience', href: '/experience' },
  { label: 'Organization', href: '/organization' },
  { label: 'Projects', href: '/projects' },
  { label: 'Certification', href: '/certification' },
  { label: 'Contact', href: '/contact' },
]

export function DesktopPageNav() {
  const pathname = usePathname()

  // Jangan muncul di halaman links atau home
  if (pathname === '/links' || pathname === '/') return null

  // Cari index page sekarang
  const currentIndex = orderedPages.findIndex(
    (p) => p.href !== '/' && pathname.startsWith(p.href)
  )
  const idx = currentIndex >= 0 ? currentIndex : 0

  const prevPage = idx > 0 ? orderedPages[idx - 1] : null
  const nextPage = idx < orderedPages.length - 1 ? orderedPages[idx + 1] : null

  return (
    <div className="fixed top-[72px] left-1/2 -translate-x-1/2 z-30 hidden lg:flex items-center justify-between pointer-events-none w-full max-w-5xl px-4">
      {/* Back button */}
      <div className="w-32 flex justify-start">
        {prevPage && (
          <Link
            href={prevPage.href}
            className="pointer-events-auto flex items-center gap-1.5 rounded-full border border-border/50 bg-background/70 backdrop-blur-lg px-3 py-1.5 text-xs font-medium text-foreground/70 shadow-md shadow-black/5 transition-all duration-200 hover:bg-background/90 hover:text-foreground hover:border-primary/30 active:scale-95"
          >
            <ArrowLeft size={14} />
            {prevPage.label}
          </Link>
        )}
      </div>

      {/* Spacing */}
      <div className="flex-1" />

      {/* Next button */}
      <div className="w-32 flex justify-end">
        {nextPage && (
          <Link
            href={nextPage.href}
            className="pointer-events-auto flex items-center gap-1.5 rounded-full border border-border/50 bg-background/70 backdrop-blur-lg px-3 py-1.5 text-xs font-medium text-foreground/70 shadow-md shadow-black/5 transition-all duration-200 hover:bg-background/90 hover:text-foreground hover:border-primary/30 active:scale-95"
          >
            {nextPage.label}
            <ArrowRight size={14} />
          </Link>
        )}
      </div>
    </div>
  )
}