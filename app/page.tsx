'use client'
import BusServiceForm from './{components}/BusServiceForm'
import { Icon } from '@iconify/react'

export default function Home() {
  return (
    <>
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden flex items-center justify-center">
        {/* Bottom Right Bus */}
        <div className="absolute bottom-[-15%] right-[-15%] sm:right-[-5%] animate-bg-bus-1 opacity-[0.15] drop-shadow-2xl">
          <Icon icon="solar:bus-linear" style={{ strokeWidth: 1.5 }} className="text-[35rem] sm:text-[50rem]" />
        </div>
        {/* Top Left Bus */}
        <div className="absolute top-[5%] left-[-20%] sm:left-[-5%] animate-bg-bus-2 opacity-[0.08] drop-shadow-xl">
          <div className="scale-x-[-1]">
            <Icon icon="solar:bus-linear" style={{ strokeWidth: 1.5 }} className="text-[25rem] sm:text-[40rem]" />
          </div>
        </div>
      </div>

      <main className="w-full max-w-md bg-white/80 backdrop-blur-xl rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-slate-900/5 p-6 sm:p-8 relative overflow-visible">
        {/* Logo & Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="text-base font-semibold tracking-tighter text-emerald-500 bg-emerald-50 px-3 py-1 rounded-xl ring-1 ring-emerald-500/20">
            AFRICA COMMUNITY SCHOOL
          </div>
          <div className="flex items-center justify-center w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-500 ring-1 ring-emerald-500/20">
            <Icon icon="solar:bus-linear" style={{ strokeWidth: 1.5 }} className="text-xl" />
          </div>
        </div>

        <div className="mb-8">
          <h1 className="text-2xl font-semibold tracking-tight text-slate-800 mb-1">Bus fare calculator</h1>
          <p className="text-sm text-slate-500 font-medium">Find the right plan for your children's commute.</p>
        </div>

        <BusServiceForm />
      </main>

      {/* Footer */}
      <p className="mt-8 text-xs font-medium text-slate-400 relative z-10 w-full text-center">
        Designed & coded by
        <a href="https://agboola-portfolio.vercel.app/" className="text-slate-500 hover:text-emerald-500 transition-colors ml-1" target="_blank" rel="noopener noreferrer">
          Agboola
        </a>
      </p>
    </>
  )
}
