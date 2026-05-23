"use client"

import { useState } from "react"

const positions = [
  { date: 27, day: "Lunes", position: "Opuesto/a", posF: "Opuesta", posM: "Opuesto" },
  { date: 28, day: "Martes", position: "Central", posF: "Central", posM: "Central" },
  { date: 29, day: "Miércoles", position: "Colocador/a", posF: "Colocadora", posM: "Colocador" },
  { date: 30, day: "Jueves", position: "Líbero", posF: "Líbero", posM: "Líbero" },
  { date: 31, day: "Viernes", position: "Receptor/a", posF: "Receptora", posM: "Receptor" },
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

export default function PositionCards() {
  const [selected, setSelected] = useState<number | null>(null)

  function handleGender(gender: "chicas" | "chicos") {
    if (selected === null) return
    window.open(links[gender][selected], "_blank", "noopener,noreferrer")
    setSelected(null)
  }

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
        {positions.map((pos, i) => (
          <button
            key={pos.day}
            onClick={() => setSelected(i)}
            className="group p-5 sm:p-7 border border-white/[0.12] hover:border-red-600 transition-all duration-500 text-center hover:bg-red-600/[0.06] cursor-pointer"
          >
            <p className="text-5xl sm:text-6xl font-black text-red-600/40 group-hover:text-red-600/70 transition-colors duration-500">
              {pos.date}
            </p>
            <p className="text-white/60 text-[10px] tracking-[0.25em] uppercase mt-2">
              {pos.day}
            </p>
            <div className="w-6 h-px bg-red-600/50 mx-auto my-4" />
            <p className="text-white font-bold text-sm sm:text-base tracking-wider uppercase">
              {pos.position}
            </p>
          </button>
        ))}
      </div>

      {selected !== null && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center px-4"
          onClick={() => setSelected(null)}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          <div
            className="relative bg-[#111] border border-white/10 p-8 sm:p-10 max-w-md w-full text-center cards-enter"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-white/30 hover:text-white transition-colors text-xl leading-none"
            >
              &times;
            </button>

            <p className="text-white/40 text-xs tracking-[0.25em] uppercase mb-1">
              {positions[selected].day} {positions[selected].date} julio
            </p>
            <p className="text-2xl sm:text-3xl font-serif font-black text-red-600 mb-8">
              {positions[selected].position.toUpperCase()}
            </p>

            <p className="text-white/40 text-sm mb-6">
              Selecciona tu categoría para inscribirte
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => handleGender("chicas")}
                className="flex-1 py-4 px-6 border-2 border-white/10 hover:border-red-600 hover:bg-red-600/10 transition-all duration-300 cursor-pointer group"
              >
                <p className="text-lg font-bold tracking-wider group-hover:text-red-600 transition-colors">
                  CHICA
                </p>
                <p className="text-white/30 text-xs mt-1">10 plazas</p>
              </button>

              <button
                onClick={() => handleGender("chicos")}
                className="flex-1 py-4 px-6 border-2 border-white/10 hover:border-red-600 hover:bg-red-600/10 transition-all duration-300 cursor-pointer group"
              >
                <p className="text-lg font-bold tracking-wider group-hover:text-red-600 transition-colors">
                  CHICO
                </p>
                <p className="text-white/30 text-xs mt-1">20 plazas</p>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
