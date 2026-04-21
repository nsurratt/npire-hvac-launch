import Link from 'next/link'

interface HeroProps {
  badge: string
  headline: string
  subheadline: string
  ctaText: string
  ctaHref: string
  secondaryCtaText?: string
  secondaryCtaHref?: string
}

export default function Hero({ badge, headline, subheadline, ctaText, ctaHref, secondaryCtaText, secondaryCtaHref }: HeroProps) {
  return (
    <section className="relative min-h-[88vh] flex items-center" role="banner">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://picsum.photos/seed/hometown-hvac-comfort/1600/900')" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-32">
        <div className="max-w-2xl">
          <span className="inline-block bg-brand-accent/90 text-white rounded-full px-4 py-1.5 text-sm font-body font-semibold mb-6">
            {badge}
          </span>
          <h1
            className="font-heading font-bold text-white leading-tight mb-6"
            style={{ fontSize: 'clamp(32px, 5vw, 52px)' }}
          >
            {headline}
          </h1>
          <p className="text-white/85 text-lg mb-8 leading-relaxed max-w-xl font-body">
            {subheadline}
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <Link
              href={ctaHref}
              className="inline-block bg-brand-accent hover:bg-brand-accent-hover text-white font-body font-semibold px-8 py-4 rounded-full transition-colors text-base"
            >
              {ctaText}
            </Link>
            {secondaryCtaText && secondaryCtaHref && (
              <a
                href={secondaryCtaHref}
                className="inline-block border-2 border-white/70 hover:border-white text-white font-body font-semibold px-8 py-4 rounded-full transition-colors text-base"
              >
                {secondaryCtaText}
              </a>
            )}
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm text-white/90 font-body text-sm font-medium px-4 py-2 rounded-full">
              <span className="text-yellow-400 text-xs">★★★★★</span>
              4.9 · 203 Google Reviews
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm text-white/90 font-body text-sm font-medium px-4 py-2 rounded-full">
              <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0117.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              100% Satisfaction Guarantee
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
