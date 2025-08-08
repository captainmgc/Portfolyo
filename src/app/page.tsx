import OrbitCanvas from '@/components/OrbitCanvas'
import { PlanetsOrbits } from '@/components/Planet'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <OrbitCanvas />

      <section className="relative z-10 container mx-auto px-6 py-16 md:py-24 animate-fade-zoom-in">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-4xl md:text-6xl tracking-tight">Mikail Güven</h1>
          <p className="mt-2 text-lg md:text-xl text-mutedText">Full Stack Developer & Cyber Security Enthusiast</p>
          <p className="mt-4 text-sm md:text-base text-mutedText">Modern web teknolojileri ile estetik ve güvenli çözümler üretiyorum.</p>

          <div className="mt-6 flex items-center justify-center gap-3">
            <Link href="#contact" className="px-4 py-2 rounded-md bg-primary/20 hover:bg-primary/30 ring-1 ring-white/10">İletişime geç</Link>
            <a href="/cv.pdf" download className="px-4 py-2 rounded-md bg-white/10 hover:bg-white/20 ring-1 ring-white/10">CV indir</a>
          </div>
        </div>

        <div className="mt-16">
          <PlanetsOrbits />
        </div>
      </section>

      <section id="contact" className="relative z-10 container mx-auto px-6 pb-24 max-w-3xl">
        <h2 className="font-display text-2xl mt-24 mb-4">İletişim</h2>
        <ContactForm />
      </section>

      <noscript>
        <div className="fixed bottom-2 left-2 text-xs bg-black/50 p-2 rounded">JS devre dışı. Temel içerik ve iletişim bilgileri görünür.</div>
      </noscript>
    </main>
  )
}

function ContactForm() {
  return (
    <form method="post" action="/api/contact" className="grid gap-3" aria-labelledby="contact-title">
      <input type="text" name="hp_field" className="hidden" tabIndex={-1} aria-hidden defaultValue="" />
      <label className="grid gap-1">
        <span className="text-sm text-mutedText">Ad Soyad</span>
        <input required name="name" className="px-3 py-2 rounded bg-white/5 ring-1 ring-white/10" />
      </label>
      <label className="grid gap-1">
        <span className="text-sm text-mutedText">E-posta</span>
        <input required type="email" name="email" className="px-3 py-2 rounded bg-white/5 ring-1 ring-white/10" />
      </label>
      <label className="grid gap-1">
        <span className="text-sm text-mutedText">Mesaj</span>
        <textarea required name="message" rows={5} className="px-3 py-2 rounded bg-white/5 ring-1 ring-white/10" />
      </label>
      <div className="flex justify-end">
        <button className="px-4 py-2 rounded-md bg-primary/20 hover:bg-primary/30 ring-1 ring-white/10">Gönder</button>
      </div>
    </form>
  )
}