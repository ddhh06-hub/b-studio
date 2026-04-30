import { siteConfig } from '@/lib/data'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Music, Youtube, Heart, Mail, Disc } from 'lucide-react'

function SaySingLogo({ className }: { className?: string }) {
  return (
    <div className={`inline-flex items-center font-black tracking-tight ${className}`} style={{ fontFamily: 'var(--font-sans)' }}>
      <span className="text-[#3B82F6]">S</span>
      <span className="text-[#10B981]">a</span>
      <span className="text-[#F59E0B]">y</span>
      <span className="ml-1 text-[#EF4444]">S</span>
      <span className="text-[#10B981]">i</span>
      <span className="text-[#3B82F6]">n</span>
      <span className="text-[#10B981]">g</span>
    </div>
  )
}

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* ── Hero Section ── */}
      <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-6 text-center">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_var(--color-primary)_0%,_transparent_25%),_radial-gradient(circle_at_bottom_left,_var(--color-secondary)_0%,_transparent_25%)] opacity-10" />
        
        <AnimatedSection className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-sm font-semibold text-brand-600 mb-8">
            <Music className="h-4 w-4" />
            <span>Music Studio & Storytelling</span>
          </div>
          <h1 className="text-5xl font-extrabold tracking-tight text-neutral-900 sm:text-7xl">
            {siteConfig.name}
          </h1>
          <p className="mt-8 text-xl leading-relaxed text-neutral-600 sm:text-2xl">
            우리의 일상이 노래가 되는 순간, <br className="hidden sm:block" />
            B-studio가 그 특별한 이야기를 음악으로 담아냅니다.
          </p>
          <div className="mt-12 flex flex-wrap justify-center items-center gap-4">
            <Button size="lg" className="rounded-full">
              사연 보내기
            </Button>
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-lg border border-neutral-100 p-2 leading-none">
                <div className="flex flex-col items-center justify-center font-black tracking-tighter" style={{ fontSize: '11px' }}>
                  <div className="flex gap-0.5">
                    <span className="text-[#3B82F6]">S</span>
                    <span className="text-[#10B981]">a</span>
                    <span className="text-[#F59E0B]">y</span>
                  </div>
                  <div className="flex gap-0.5 mt-0.5">
                    <span className="text-[#EF4444]">S</span>
                    <span className="text-[#10B981]">i</span>
                    <span className="text-[#3B82F6]">n</span>
                    <span className="text-[#10B981]">g</span>
                  </div>
                </div>
              </div>
              <Button variant="outline" size="lg" className="rounded-full" href="https://www.youtube.com/@SAYSING-singing">
                유튜브 채널 구경하기
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* ── About Section ── */}
      <section className="bg-neutral-50 py-24 px-6">
        <div className="mx-auto max-w-5xl">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl font-bold text-neutral-900 sm:text-4xl">음악을 사랑하는 사람들의 모임</h2>
            <p className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto">
              B-studio는 단순한 녹음실이 아닙니다. 음악에 대한 진심 어린 애정으로 모인 아티스트와 엔지니어들이 
              당신의 소중한 순간을 선율로 빚어내는 공간입니다.
            </p>
          </AnimatedSection>

          <div className="grid gap-8 sm:grid-cols-3">
            {[
              { icon: Heart, title: "진심을 담은 음악", desc: "기술적인 완벽함을 넘어 아티스트의 감정을 오롯이 전달합니다." },
              { icon: Music, title: "맞춤형 프로듀싱", desc: "사연의 분위기에 딱 맞는 장르와 선율을 찾아드립니다." },
              { icon: Mail, title: "이야기의 힘", desc: "세상 모든 사연은 노래가 될 자격이 있다고 믿습니다." }
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <Card className="h-full p-8 text-center hover:shadow-lg transition-shadow">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-100 text-brand-600 mb-6">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">{item.title}</h3>
                  <p className="text-neutral-600">{item.desc}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── YouTube Section ── */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="mx-auto max-w-5xl grid gap-16 lg:grid-cols-2 items-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 text-red-600 font-bold mb-6">
              <Youtube className="h-6 w-6" />
              <span className="text-lg">YouTube Channel</span>
            </div>
            <h2 className="text-4xl font-bold text-neutral-900 sm:text-5xl mb-8">
              say sing <br />
              <span className="text-brand-600">사연을 들려드립니다</span>
            </h2>
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              구독자분들의 소중한 사연을 한 곡의 노래로 만들어 선물합니다. 
              일상의 기쁨, 슬픔, 그리고 말로 다 전하지 못한 진심을 B-studio만의 감성으로 들어보세요.
            </p>
            <Button variant="outline" size="lg" className="rounded-full border-red-600 text-red-600 hover:bg-red-50 active:bg-red-100" href="https://www.youtube.com/@SAYSING-singing">
              채널 보러가기
            </Button>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2} className="relative">
            {/* YouTube Shorts Style Preview */}
            <div className="relative aspect-[9/16] w-full max-w-[320px] mx-auto overflow-hidden rounded-[2.5rem] bg-neutral-900 shadow-2xl border-8 border-neutral-800">
              {/* Background Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20" />
              
              {/* Glassmorphism Card (Music Player Interface) */}
              <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="w-full rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-6 flex flex-col items-center">
                  {/* Top Pill */}
                  <div className="absolute -top-4 bg-white/90 text-neutral-900 text-[10px] font-bold px-3 py-1 rounded-full shadow-sm">
                    🎵 사연: 어느 평범한 하루의 끝에서
                  </div>

                  {/* Central Visual (Vinyl) */}
                  <div className="relative mt-2 flex items-center justify-center">
                    <div className="h-40 w-40 rounded-full bg-neutral-800 border-4 border-white/10 flex items-center justify-center overflow-hidden shadow-lg">
                       <Music className="h-12 w-12 text-white/20" />
                    </div>
                    {/* Vinyl Record Icon peeking out */}
                    <div className="absolute -right-8 h-32 w-32 rounded-full bg-black border border-white/5 opacity-40 translate-x-1/2">
                      <div className="absolute inset-0 border-[10px] border-neutral-900/50 rounded-full" />
                      <Disc className="absolute inset-0 m-auto h-8 w-8 text-white/10 animate-spin-slow" />
                    </div>
                  </div>

                  {/* Lyrics/Story Area */}
                  <div className="mt-8 w-full rounded-2xl bg-white/20 backdrop-blur-sm p-4 text-center">
                    <p className="text-white text-sm font-medium leading-relaxed">
                      "지친 하루를 마치고 돌아오는 길,<br />
                      익숙한 밤공기가 나를 위로하네..."
                    </p>
                  </div>
                </div>

                {/* Sender Tag */}
                <div className="mt-4 self-end bg-white/10 backdrop-blur-md text-white text-[10px] px-3 py-1 rounded-lg border border-white/10">
                  @사연자 '익명'
                </div>
              </div>

              {/* YouTube UI elements */}
              <div className="absolute bottom-6 right-4 flex flex-col gap-4 text-white items-center">
                <div className="flex flex-col items-center gap-1 opacity-80"><Heart className="h-6 w-6" /><span className="text-[10px]">1.2k</span></div>
                <div className="flex flex-col items-center gap-1 opacity-80"><Youtube className="h-6 w-6" /><span className="text-[10px]">Share</span></div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-brand-200/30 blur-3xl" />
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-secondary-200/30 blur-3xl" />
          </AnimatedSection>
        </div>
      </section>

      {/* ── Footer / Contact ── */}
      <footer className="border-t border-neutral-200 bg-white py-12 px-6">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">{siteConfig.name}</h2>
          <p className="text-neutral-500 mb-8 max-w-md mx-auto">
            당신의 사연이 음악이 되는 곳. <br />
            비즈니스 문의나 사연 접수는 언제든 환영합니다.
          </p>
          <div className="flex justify-center gap-6 mb-12">
            <a href="#" className="text-neutral-400 hover:text-brand-600 transition-colors"><Mail className="h-6 w-6" /></a>
            <a href="https://www.youtube.com/@SAYSING-singing" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-red-600 transition-colors"><Youtube className="h-6 w-6" /></a>
          </div>
          <p className="text-sm text-neutral-400">
            {siteConfig.copyright}
          </p>
        </div>
      </footer>
    </main>
  )
}
