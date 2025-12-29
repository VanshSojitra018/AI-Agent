import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <>
       <section className="flex flex-col items-center text-white text-sm bg-black z-50 relative overflow-hidden">

      <svg className="absolute z-10 w-screen -mt-40 md:mt-0" width="1440" height="676" viewBox="0 0 1440 676" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="-92" y="-948" width="1624" height="1624" rx="812" fill="url(#a)" />
        <defs>
          <radialGradient id="a" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(90 428 292) scale(812)">
            <stop offset=".63" stopColor="#372AAC" stopOpacity="0" />
            <stop offset="1" stopColor="#372AAC" />
          </radialGradient>
        </defs>
      </svg>

      <Navbar />

      <div className="flex items-center mt-32 gap-2 border border-slate-600 text-gray-50 rounded-full px-4 py-2 z-50">
        <div className="size-2.5 bg-green-500 rounded-full" />
        <span>Book a live demo today</span>
      </div>

      <h1 className="text-center text-5xl leading-[68px] md:text-6xl md:leading-[70px] mt-4 font-semibold max-w-2xl z-50">
        Let's build AI agents together
      </h1>

      <p className="text-center text-base max-w-lg mt-2 z-50">
        Our platform helps you build, test, and deliver faster — so you can focus on what matters.
      </p>

      <div className="flex items-center gap-4 mt-8 z-50">
        <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white active:scale-95 rounded-lg px-7 h-11">
          Get started
        </button>

        <button className="border border-slate-400 active:scale-95 hover:bg-white/10 transition rounded-lg px-8 h-11">
          Book a demo
        </button>
      </div>

      <img
        src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/hero-section-showcase-2.png"
        className="w-full rounded-[15px] max-w-4xl mt-16 z-50"
      />
    </section>
    </>
  )
}

export default Hero
