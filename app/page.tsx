"use client";
import { Bodoni_Moda, Inter, Anonymous_Pro } from "next/font/google";
import content from "../data/content.json";

const display = Bodoni_Moda({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"], style: ["normal", "italic"], variable: "--font-display" });
const body = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-body" });
const mono = Anonymous_Pro({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-mono" });

const INK = "#0A0A0A";
const SIGNAL = "#DC2626";
const GOLD = "#B8862A";
const IVORY = "#FBF8F1";
const WHITE = "#FFFFFF";
const MUTED = "#737373";

const HERO_PHOTO = "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1800&q=80&auto=format&fit=crop";
const DETAIL_PHOTO = "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=1200&q=80&auto=format&fit=crop";

export default function Page() {
  const c = content as any;
  return (
    <main className={`${display.variable} ${body.variable} ${mono.variable} min-h-screen`} style={{ backgroundColor: IVORY, color: INK, fontFamily: "var(--font-body)" }}>
      <style jsx global>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        .fade-up { animation: fadeUp 0.9s ease-out both; }
        .delay-1 { animation-delay: 0.12s; }
        .delay-2 { animation-delay: 0.24s; }
        .delay-3 { animation-delay: 0.36s; }
        .display-text { font-family: var(--font-display); }
        .display-italic { font-family: var(--font-display); font-style: italic; }
        .mono-text { font-family: var(--font-mono); }
        .signal-rule { background: ${SIGNAL}; height: 2px; }
      `}</style>

      <header className="border-b" style={{ borderColor: INK, backgroundColor: IVORY }}>
        <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-baseline gap-3">
            <div className="display-text text-4xl tracking-tight font-light" style={{ color: INK }}>89</div>
            <div className="mono-text text-[10px] uppercase tracking-[0.4em]" style={{ color: SIGNAL }}>NAIL · GLENDALE</div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest">
            <a href="#about" style={{ color: INK }}>About</a>
            <a href="#menu" style={{ color: INK }}>Menu</a>
            <a href="#reviews" style={{ color: INK }}>Press</a>
            <a href="#visit" style={{ color: INK }}>Visit</a>
          </div>
          <a href={c.hero.ctaLink} className="px-5 py-2.5 text-xs uppercase tracking-[0.3em] border" style={{ borderColor: INK, color: INK }}>Reserve</a>
        </nav>
      </header>

      <section className="relative py-20 border-b" style={{ borderColor: INK }}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-6 fade-up">
            <div className="mono-text text-xs uppercase tracking-[0.5em] mb-6" style={{ color: SIGNAL }}>{c.hero.eyebrow}</div>
            <h1 className="display-text text-7xl md:text-[10rem] leading-[0.88] mb-3 font-light" style={{ color: INK }}>
              89.
            </h1>
            <h2 className="display-italic text-3xl md:text-5xl leading-[1.05] mb-8" style={{ color: SIGNAL }}>
              {c.hero.heading}
            </h2>
            <div className="signal-rule w-24 mb-8" />
            <p className="text-lg leading-relaxed max-w-md mb-10" style={{ color: INK }}>{c.hero.subheading}</p>
            <div className="flex flex-wrap items-center gap-5">
              <a href={c.hero.ctaLink} className="px-10 py-4 text-sm uppercase tracking-[0.3em] inline-flex items-center gap-3" style={{ backgroundColor: INK, color: IVORY }}>
                {c.hero.ctaText}
                <span>→</span>
              </a>
              <div className="display-italic text-xl" style={{ color: GOLD }}>walk-ins by chance.</div>
            </div>
          </div>
          <div className="md:col-span-6 fade-up delay-2">
            <div className="overflow-hidden" style={{ aspectRatio: "4/5" }}>
              <div className="w-full h-full" style={{ backgroundImage: `url("${HERO_PHOTO}")`, backgroundSize: "cover", backgroundPosition: "center", filter: "grayscale(15%) contrast(105%)" }} />
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div className="mono-text text-[10px] uppercase tracking-[0.35em]" style={{ color: MUTED }}>— Studio №89 · Glendale Ave</div>
              <div className="mono-text text-[10px] uppercase tracking-[0.35em]" style={{ color: MUTED }}>est. 2019</div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 border-b" style={{ borderColor: INK, backgroundColor: WHITE }}>
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <div className="mono-text text-xs uppercase tracking-[0.5em] mb-3" style={{ color: SIGNAL }}>// {c.about.label}</div>
            <h2 className="display-text text-5xl md:text-7xl leading-[1.0] mb-3 font-light" style={{ color: INK }}>{c.about.heading.split(".")[0]}.</h2>
            <h3 className="display-italic text-3xl mb-10" style={{ color: SIGNAL }}>{c.about.heading.split(".").slice(1).join(".").trim()}</h3>
            <div className="space-y-5 text-lg leading-relaxed" style={{ color: INK }}>
              {c.about.paragraphs.map((p: string, i: number) => <p key={i}>{p}</p>)}
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="overflow-hidden" style={{ aspectRatio: "3/4" }}>
              <div className="w-full h-full" style={{ backgroundImage: `url("${DETAIL_PHOTO}")`, backgroundSize: "cover", backgroundPosition: "center" }} />
            </div>
            <div className="mono-text text-[10px] uppercase tracking-[0.35em] mt-3" style={{ color: MUTED }}>— Studio №89 · the floor</div>
          </div>
        </div>
      </section>

      <section id="menu" className="py-24 border-b" style={{ borderColor: INK, backgroundColor: IVORY }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <div className="mono-text text-xs uppercase tracking-[0.5em] mb-3" style={{ color: SIGNAL }}>// THE MENU</div>
            <h2 className="display-text text-5xl md:text-7xl leading-[0.95] font-light" style={{ color: INK }}>
              Services <span className="display-italic" style={{ color: SIGNAL }}>fully edited.</span>
            </h2>
          </div>
          <div>
            {c.services.map((s: any, i: number) => (
              <article key={i} className="py-8 grid md:grid-cols-12 gap-6 items-baseline border-t" style={{ borderColor: INK }}>
                <div className="md:col-span-1 mono-text text-xs uppercase tracking-[0.3em]" style={{ color: SIGNAL }}>№ {String(i + 1).padStart(2, "0")}</div>
                <div className="md:col-span-4 display-text text-3xl leading-tight font-light" style={{ color: INK }}>{s.title}</div>
                <div className="md:col-span-5 text-base leading-relaxed" style={{ color: MUTED }}>{s.description}</div>
                <div className="md:col-span-2 display-italic text-2xl text-right" style={{ color: SIGNAL }}>{s.price}</div>
              </article>
            ))}
            <div className="border-t" style={{ borderColor: INK }} />
          </div>
        </div>
      </section>

      <section id="reviews" className="py-24 border-b" style={{ borderColor: INK, backgroundColor: INK }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <div className="mono-text text-xs uppercase tracking-[0.5em] mb-3" style={{ color: SIGNAL }}>// PRESS</div>
            <h2 className="display-text text-5xl md:text-7xl leading-[1.0] font-light" style={{ color: IVORY }}>
              What <span className="display-italic" style={{ color: GOLD }}>the regulars say.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {c.reviews.map((r: any, i: number) => (
              <figure key={i} className="flex flex-col h-full">
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: r.rating }).map((_, j) => <span key={j} style={{ color: SIGNAL, fontSize: 22 }}>★</span>)}
                </div>
                <blockquote className="display-italic text-2xl leading-snug mb-8 flex-grow" style={{ color: IVORY }}>"{r.text}"</blockquote>
                <figcaption className="pt-4 border-t" style={{ borderColor: SIGNAL }}>
                  <div className="display-text text-xl font-light" style={{ color: IVORY }}>{r.name}</div>
                  <div className="mono-text text-[10px] uppercase tracking-[0.35em] mt-1" style={{ color: GOLD }}>— {r.context}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="visit" className="py-24" style={{ backgroundColor: WHITE }}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="mono-text text-xs uppercase tracking-[0.5em] mb-4" style={{ color: SIGNAL }}>// FIND US</div>
            <h2 className="display-text text-6xl md:text-8xl leading-[0.9] mb-3 font-light" style={{ color: INK }}>
              Studio <span className="display-italic" style={{ color: SIGNAL }}>89.</span>
            </h2>
            <div className="signal-rule w-16 my-6" />
            <p className="text-lg leading-relaxed mb-10 max-w-md" style={{ color: INK }}>On North Glendale Avenue between Lexington and Stocker. Closed Mondays. Walk-ins welcome but appointments preferred for full sets and color work.</p>

            <dl className="space-y-5 mb-10">
              <div>
                <dt className="mono-text text-xs uppercase tracking-[0.35em] mb-1" style={{ color: SIGNAL }}>Address</dt>
                <dd className="text-xl" style={{ color: INK }}>{c.contact.address}</dd>
              </div>
              <div>
                <dt className="mono-text text-xs uppercase tracking-[0.35em] mb-1" style={{ color: SIGNAL }}>Call</dt>
                <dd className="display-italic text-3xl"><a href={`tel:${c.contact.phone.replace(/\D/g, "")}`} style={{ color: INK }}>{c.contact.phone}</a></dd>
              </div>
              <div>
                <dt className="mono-text text-xs uppercase tracking-[0.35em] mb-2" style={{ color: SIGNAL }}>Hours</dt>
                <dd>
                  <table className="text-sm" style={{ color: INK }}>
                    <tbody>
                      {Object.entries(c.contact.hours).map(([day, hours]) => (
                        <tr key={day}>
                          <td className="pr-8 py-1 font-semibold">{day}</td>
                          <td>{String(hours)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </dd>
              </div>
            </dl>
          </div>
          <div className="overflow-hidden" style={{ minHeight: 420, border: `1px solid ${INK}` }}>
            <iframe src={`https://maps.google.com/maps?output=embed&q=${encodeURIComponent(c.contact.mapEmbedQuery || c.contact.address)}`} width="100%" height="500" style={{ border: 0, filter: "grayscale(60%)" }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>

      <footer className="py-12 text-center" style={{ backgroundColor: INK, color: IVORY }}>
        <div className="display-text text-5xl mb-2 font-light">89.</div>
        <div className="display-italic text-2xl mb-4" style={{ color: GOLD }}>nail salon · glendale.</div>
        <div className="mono-text text-xs uppercase tracking-[0.4em] opacity-70">© {new Date().getFullYear()} STUDIO №89 · GLENDALE, CA</div>
      </footer>
    </main>
  );
}
