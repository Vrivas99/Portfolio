import React from 'react'
import Code from 'public/svg/code.svg'
import Image from 'next/image'

const Projects = () => {
  return (
    <section id='Projects' className='w-full flex flex-col justify-center gap-3'>
      <div className='flex gap-3 align-middle justify-start'>
        <Code className="w-10 h-10 text-yellow-500" />
        <h2 className="mb-8 text-3xl font-bold text-white">Proyectos & Colaboraciones</h2>
      </div>
      <div class="relative flex w-full flex-col rounded-xl bg-gray-900 text-white shadow-md">
        <div class="relative mx-10 -mt-6 h-72 overflow-hidden rounded-xl shadow-lg shadow-blue-gray-500/40">
          <Image src="/img/por2.png" alt="Next.js" fill />
        </div>
        <div class="p-6">
          <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            Tailwind card
          </h5>
          <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.
          </p>
        </div>
        <div class="p-6 pt-0">
          <button data-ripple-light="true" type="button" class="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
            Read More
          </button>
        </div>
      </div>
    </section>
  )
}

export default Projects