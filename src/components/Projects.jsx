import React from 'react'
import Code from 'public/svg/code.svg'

const Projects = () => {
  return (
    <section id='Projects' className='h-screen relative w-full flex flex-col justify-center'>
            <span className="absolute bottom-10 right-full blur-xl w-96 h-96 rounded-full animate-spin-slow bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500" />
            <span className="absolute bottom-10 right-full w-96 h-96 blur bg-background rounded-full" />
            <div className='flex gap-3 align-middle justify-start'>
                <Code className="w-10 h-10 text-yellow-500" />
                <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">Proyectos & Colaboraciones</h2>
            </div>
            <p>Aqui van los proyectio 3</p>
        </section>
  )
}

export default Projects