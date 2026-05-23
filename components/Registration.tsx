"use client"

import { useState } from "react"

type Gender = "chicas" | "chicos" | null

const positions = [
  { day: "Lunes 27", posF: "Opuesta", posM: "Opuesto" },
  { day: "Martes 28", posF: "Central", posM: "Central" },
  { day: "Miércoles 29", posF: "Colocadora", posM: "Colocador" },
  { day: "Jueves 30", posF: "Líbero", posM: "Líbero" },
  { day: "Viernes 31", posF: "Receptora", posM: "Receptor" },
]

const links = {
  chicas: [
    "https://app.cluber.es/clubes/687f9df49fe27075164429/pagos/69e745f9b0ab2521661839",
    "https://app.cluber.es/clubes/687f9df49fe27075164429/pagos/6a0de0e2dd942579868999",
    "https://app.cluber.es/clubes/687f9df49fe27075164429/pagos/6a0de12464b29417691427",
    "https://app.cluber.es/clubes/687f9df49fe27075164429/pagos/6a0de1688f478762025222",
    "https://app.cluber.es/clubes/687f9df49fe27075164429/pagos/6a0de1cb18065919456719",
  ],
  chicos: [
    "https://app.cluber.es/clubes/687f9df49fe27075164429/pagos/6a0de2eca4c75147628624",
    "https://app.cluber.es/clubes/687f9df49fe27075164429/pagos/6a0de458e1268798431654",
    "https://app.cluber.es/clubes/687f9df49fe27075164429/pagos/6a0de5152aeec973073013",
    "https://app.cluber.es/clubes/687f9df49fe27075164429/pagos/6a0de5583e44c650395735",
    "https://app.cluber.es/clubes/687f9df49fe27075164429/pagos/6a0de5b305cf0989081216",
  ],
}

export default function Registration() {
  const [gender, setGender] = useState<Gender>(null)

  return (
    <section id="inscripcion" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12 bg-red-600" />
            <p className="text-red-600 tracking-[0.3em] text-xs uppercase font-semibold">
              Plazas limitadas
            </p>
            <div className="h-px w-12 bg-red-600" />
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-black text-red-600">
            INSCRIPCIÓN
          </h2>
          <p className="text-white/40 mt-4 text-sm max-w-md mx-auto">
            Selecciona tu categoría y elige el día de tu posición
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-12">
          <button
            onClick={() => setGender(gender === "chicas" ? null : "chicas")}
            className={`flex-1 py-8 px-6 border-2 transition-all duration-500 text-center cursor-pointer ${
              gender === "chicas"
                ? "border-red-600 bg-red-600/10 shadow-[0_0_30px_rgba(220,38,38,0.15)]"
                : gender === "chicos"
                  ? "border-white/5 opacity-30 hover:opacity-50"
                  : "border-white/10 hover:border-red-600/50 hover:bg-red-600/5"
            }`}
          >
            <p className="text-2xl font-bold tracking-wider">CHICAS</p>
            <p className="text-white/40 text-sm mt-2">10 plazas por día</p>
          </button>

          <button
            onClick={() => setGender(gender === "chicos" ? null : "chicos")}
            className={`flex-1 py-8 px-6 border-2 transition-all duration-500 text-center cursor-pointer ${
              gender === "chicos"
                ? "border-red-600 bg-red-600/10 shadow-[0_0_30px_rgba(220,38,38,0.15)]"
                : gender === "chicas"
                  ? "border-white/5 opacity-30 hover:opacity-50"
                  : "border-white/10 hover:border-red-600/50 hover:bg-red-600/5"
            }`}
          >
            <p className="text-2xl font-bold tracking-wider">CHICOS</p>
            <p className="text-white/40 text-sm mt-2">20 plazas por día</p>
          </button>
        </div>

        {gender && (
          <div className="cards-enter">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {positions.map((pos, i) => (
                <a
                  key={i}
                  href={links[gender][i]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-6 border border-white/10 hover:border-red-600 transition-all duration-500 text-center hover:bg-red-600/5"
                  style={{
                    animationDelay: `${i * 80}ms`,
                    animationFillMode: "both",
                  }}
                >
                  <p className="text-white/30 text-xs tracking-[0.2em] uppercase">
                    {pos.day}
                  </p>
                  <div className="w-8 h-px bg-red-600/40 mx-auto my-4" />
                  <p className="text-white font-bold text-lg tracking-wider uppercase mb-6">
                    {gender === "chicas" ? pos.posF : pos.posM}
                  </p>
                  <span className="inline-block bg-red-600 text-white text-xs font-bold py-2.5 px-6 tracking-wider uppercase group-hover:bg-red-500 transition-colors">
                    Inscríbete
                  </span>
                </a>
              ))}
            </div>

            <p className="text-center text-white/25 text-xs mt-8">
              Se te pedirá la talla de camiseta y pantalón corto durante la
              inscripción
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
