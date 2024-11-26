import React from 'react'
import Code from 'public/svg/code.svg'
import Card from './Card'

const Projects = () => {
  return (
    <section id='Projects' className='w-full flex flex-col justify-center gap-3'>
      <div className='flex gap-3 align-middle justify-start'>
        <Code className="w-10 h-10 text-yellow-500" />
        <h2 className="mb-8 text-3xl font-bold text-white">Proyectos & Colaboraciones (en desarrollo)</h2>
      </div>
      <Card
        title="EnganchAI"
        imageSrc="/img/noc.png"
        description="Sistema de análisis de Engagment en salas de clase mediante IA. Entreganto métricas de atención en tiempo real."
        tags={["React", "TailwindCSS", "Next.js", "TypeScript", "Flask", "Python", "..."]}
        gitHref="https://github.com/Vrivas99/EnganchAI"
      />
            <Card
        title="EnganchAI"
        imageSrc="/img/noc.png"
        description="Sistema de análisis de Engagment en salas de clase mediante IA. Entreganto métricas de atención en tiempo real."
        tags={["React", "TailwindCSS", "Next.js", "TypeScript", "Flask", "Python", "..."]}
        gitHref="https://github.com/Vrivas99/EnganchAI"
      />
            <Card
        title="EnganchAI"
        imageSrc="/img/noc.png"
        description="Sistema de análisis de Engagment en salas de clase mediante IA. Entreganto métricas de atención en tiempo real."
        tags={["React", "TailwindCSS", "Next.js", "TypeScript", "Flask", "Python", "..."]}
        gitHref="https://github.com/Vrivas99/EnganchAI"
      />
    </section>
  )
}

export default Projects