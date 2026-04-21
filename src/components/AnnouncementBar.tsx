export default function AnnouncementBar() {
  return (
    <div style={{ backgroundColor: '#1C2E10' }} className="py-2 text-sm text-center font-body">
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-white/90">
        <span className="flex items-center gap-1">
          <span className="text-yellow-400">★★★★★</span>{' '}
          <strong className="text-white">4.9 Google Rating</strong>
        </span>
        <span className="hidden sm:inline text-white/30">|</span>
        <span className="hidden sm:inline">24/7 Emergency Service</span>
        <span className="hidden sm:inline text-white/30">|</span>
        <span>Serving Louisville Since 2006 · <a href="tel:5025550174" className="text-white font-semibold hover:underline">(502) 555-0174</a></span>
      </div>
    </div>
  )
}
