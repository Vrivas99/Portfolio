import React from 'react'
import Work from 'public/Work.svg'

const Exp = () => {
    return (
        <section id='Experience' className='relative w-full flex flex-col justify-center'>
            <span className="absolute top-10 left-full blur-xl w-96 h-96 rounded-full animate-spin-slow bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500" />
            <span className="absolute top-10 left-full w-96 h-96 blur bg-background rounded-full" />
            <div className='flex gap-3 align-middle justify-start'>
                <Work className="w-10 h-10 text-yellow-500" />
                <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">Experiencia</h2>
            </div>
            <ol className="relative border-s border-yellow-500 ">
                <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white "></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Feb 2022 - Actualidad</time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Operador de tienda</h3>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Me desempeño en variedad de trabajos, fomentando el trabajo colaborativo, comunicación, proactivdad y resolución de problemas.</p>
                </li>
                <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white "></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">18 Oct 2023 - 20 Nov 2023</time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">UI/UX & FrontEnd Developer</h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">Desarrollé prototipado con Figma y desarrollo web con NextJS, JavaScript, Python y TailwindCSS.</p>
                </li>
            </ol>
        </section>
    )
}

export default Exp