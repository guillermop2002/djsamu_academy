import Particles from "@/components/Particles"
import ScrollReveal from "@/components/ScrollReveal"
import Registration from "@/components/Registration"
import PositionCards from "@/components/PositionCards"

const schedule = [
  { time: "10:00", end: "11:00", label: "Presentación y calentamiento", main: false, hours: "1h" },
  { time: "11:00", end: "13:00", label: "Tecnificación", main: true, hours: "2h" },
  { time: "13:00", end: "15:00", label: "Comida (opcional) + Piscina", main: false, hours: "2h" },
  { time: "16:00", end: "17:00", label: "Preparación física y dinámicas", main: false, hours: "1h" },
  { time: "17:00", end: "19:00", label: "Tecnificación", main: true, hours: "2h" },
  { time: "19:00", end: "20:00", label: "Competición, premios y cierre", main: false, hours: "1h" },
]

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Top accent line */}
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-red-600 z-[60]" />

      {/* Header */}
      <header className="fixed top-[2px] left-0 right-0 z-50 backdrop-blur-md bg-[#0a0a0a]/70 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="#" className="text-sm font-bold tracking-[0.15em]">
            DJSAMU <span className="text-red-600">ACADEMY</span>
          </a>
          <a
            href="#inscripcion"
            className="text-[10px] sm:text-xs bg-red-600 hover:bg-red-500 text-white py-2 px-4 sm:px-6 font-bold tracking-wider transition-colors"
          >
            INSCRÍBETE
          </a>
        </div>
      </header>

      {/* ==================== HERO ==================== */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Particles />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-red-600/[0.06] rounded-full blur-[120px]" />

        <div className="relative z-10 text-center px-4">
          <p className="hero-el-1 text-white/70 tracking-[0.4em] text-xs sm:text-sm md:text-base font-semibold uppercase">
            DJSAMU
          </p>
          <h1 className="hero-el-2 font-serif text-[3.5rem] sm:text-[5rem] md:text-[7rem] lg:text-[9rem] font-black text-red-600 leading-[0.85] mt-2">
            ACADEMY
          </h1>
          <p className="hero-el-3 text-white/40 italic mt-5 text-sm sm:text-base md:text-lg font-light max-w-md mx-auto">
            Ser diferente no es un talento, es una decisión
          </p>
          <div className="hero-el-4 mt-8">
            <p className="text-white/25 tracking-[0.25em] text-[10px] sm:text-xs uppercase mb-2">
              Tecnificación avanzada por posiciones
            </p>
            <p className="text-white font-bold text-lg sm:text-xl md:text-2xl tracking-wider">
              27 — 31 JULIO
            </p>
          </div>
          <a
            href="#inscripcion"
            className="hero-el-5 inline-block mt-10 sm:mt-12 bg-red-600 hover:bg-red-500 text-white font-bold py-3.5 sm:py-4 px-8 sm:px-12 text-xs sm:text-sm tracking-[0.2em] uppercase transition-all duration-300 hover:scale-105 animate-pulse-glow"
          >
            Inscríbete ya
          </a>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a0a0a] to-transparent" />

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce opacity-20">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ==================== ABOUT ==================== */}
      <section className="py-20 sm:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-10 bg-red-600" />
              <p className="text-red-600 tracking-[0.3em] text-[10px] uppercase font-semibold">
                El campus
              </p>
              <div className="h-px w-10 bg-red-600" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif font-black text-center leading-tight">
              5 DÍAS.
              <br />
              <span className="text-red-600">5 POSICIONES.</span>
              <br />
              TU MOMENTO.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <p className="text-white/50 text-center max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mt-10">
              Tecnificación avanzada de voleibol para jugadores y jugadoras a
              partir de 16 años. Cada día se trabaja una posición específica con
              entrenamiento intensivo y personalizado. Inscríbete solo al día de
              tu posición y ven desde cualquier punto de España.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5 mt-14 sm:mt-20">
              {[
                { value: "5", label: "Días" },
                { value: "30", label: "Plazas / día" },
                { value: "3", label: "Pistas" },
                { value: "+16", label: "Años" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center py-8 sm:py-10 border border-white/[0.06] hover:border-red-600/40 transition-colors duration-500"
                >
                  <p className="text-4xl sm:text-5xl font-black text-red-600">
                    {stat.value}
                  </p>
                  <p className="text-white/30 mt-3 text-[10px] sm:text-xs tracking-[0.2em] uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== POSITIONS ==================== */}
      <section className="py-20 sm:py-28 px-6 bg-gradient-to-b from-transparent via-red-950/[0.03] to-transparent">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-10 bg-red-600" />
              <p className="text-red-600 tracking-[0.3em] text-[10px] uppercase font-semibold">
                Calendario
              </p>
              <div className="h-px w-10 bg-red-600" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif font-black text-center mb-14 sm:mb-20">
              ELIGE TU <span className="text-red-600">POSICIÓN</span>
            </h2>
          </ScrollReveal>

          <PositionCards />

          <ScrollReveal delay={600}>
            <p className="text-center text-white/20 text-xs mt-10 tracking-wide">
              Inscríbete solo al día de tu posición — una jornada completa de 10
              horas
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== SCHEDULE ==================== */}
      <section className="py-20 sm:py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-10 bg-red-600" />
              <p className="text-red-600 tracking-[0.3em] text-[10px] uppercase font-semibold">
                Horario
              </p>
              <div className="h-px w-10 bg-red-600" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif font-black text-center mb-14 sm:mb-20">
              TU <span className="text-red-600">DÍA</span>
            </h2>
          </ScrollReveal>

          <div className="space-y-3">
            {schedule.map((item, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div
                  className={`relative flex items-center gap-4 sm:gap-8 px-5 sm:px-8 py-5 sm:py-6 border transition-all duration-500 group ${
                    item.main
                      ? "border-red-600/40 bg-red-600/[0.06] hover:bg-red-600/[0.1] shadow-[inset_0_0_30px_rgba(220,38,38,0.04)]"
                      : "border-white/10 hover:border-white/20"
                  }`}
                >
                  {item.main && (
                    <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-red-600" />
                  )}

                  <div className="flex-shrink-0 w-24 sm:w-32">
                    <p
                      className={`text-xl sm:text-2xl font-black font-mono ${
                        item.main ? "text-red-600" : "text-white/50"
                      }`}
                    >
                      {item.time}
                    </p>
                    <p
                      className={`text-[10px] sm:text-xs font-mono mt-0.5 ${
                        item.main ? "text-red-600/50" : "text-white/30"
                      }`}
                    >
                      {item.end}
                    </p>
                  </div>

                  <div className="flex-1 min-w-0">
                    <p
                      className={`text-base sm:text-xl ${
                        item.main
                          ? "text-white font-bold tracking-wide uppercase"
                          : "text-white/70"
                      }`}
                    >
                      {item.label}
                    </p>
                  </div>

                  <div
                    className={`flex-shrink-0 px-3 py-1.5 text-xs font-bold tracking-wider ${
                      item.main
                        ? "bg-red-600/20 text-red-500 border border-red-600/30"
                        : "bg-white/[0.05] text-white/40 border border-white/10"
                    }`}
                  >
                    {item.hours}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={500}>
            <div className="flex items-center justify-center gap-6 mt-12 text-white/20 text-xs tracking-[0.2em] uppercase">
              <div className="h-px flex-1 bg-white/[0.06]" />
              <p>10 horas de entrenamiento</p>
              <div className="h-px flex-1 bg-white/[0.06]" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== REGISTRATION ==================== */}
      <Registration />

      {/* ==================== INFO ==================== */}
      <section className="py-20 sm:py-28 px-6 bg-gradient-to-b from-transparent via-red-950/[0.03] to-transparent">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-8 sm:p-10 border border-white/[0.06] hover:border-white/[0.12] transition-colors duration-500">
                <div className="w-10 h-10 flex items-center justify-center border border-red-600/30 text-red-600 mb-5">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2 tracking-wide">
                  Equipación personalizada
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  Camiseta y pantalón corto personalizados en colaboración con{" "}
                  <span className="text-white/60 font-semibold">Ace Serve</span>.
                  Se te pedirá la talla durante la inscripción.
                </p>
              </div>

              <div className="p-8 sm:p-10 border border-white/[0.06] hover:border-white/[0.12] transition-colors duration-500">
                <div className="w-10 h-10 flex items-center justify-center border border-red-600/30 text-red-600 mb-5">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Zm-3 0a.375.375 0 1 1-.53 0L9 2.845l.265.265Zm6 0a.375.375 0 1 1-.53 0L15 2.845l.265.265Z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2 tracking-wide">Comida</h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  La comida es opcional. Puedes abonar la cuantía para comer en
                  el campus o traer tu propia comida. Incluye acceso a piscina
                  durante el descanso.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="py-16 sm:py-20 px-6 text-center border-t border-white/[0.04]">
        <p className="text-red-600 tracking-[0.4em] text-[10px] sm:text-xs uppercase font-bold mb-4">
          1% Better Everyday
        </p>
        <p className="text-white/20 italic text-xs sm:text-sm max-w-xs mx-auto">
          no necesitas permiso para querer ser mejor
        </p>
        <div className="w-8 h-px bg-red-600/30 mx-auto my-8" />
        <p className="text-white/10 text-[10px] tracking-[0.2em]">
          DJ SAMU ACADEMY
        </p>
      </footer>
    </main>
  )
}
