import React from 'react'
import Work from 'public/Work.svg'

const Exp = () => {
    return (
        <section id='Experience' className='h-screen relative w-full flex flex-col justify-center'>
            <span className="absolute top-10 left-full blur-xl w-96 h-96 rounded-full animate-spin-slow bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500" />
            <span className="absolute top-10 left-full w-96 h-96 blur bg-background rounded-full" />
            <div className='flex gap-3 align-middle justify-start'>
                <Work className="w-10 h-10 text-yellow-500" />
                <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">Experiencia</h2>
            </div>
            <ol className="relative border-s border-yellow-500 ">
                <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white "></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Ene 2024 - Actualidad</time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white"><span className='text-yellow-500'>DuocUC</span> Full Stack Developer</h3>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                        Desarrollo de una plataforma que proporciona retroalimentación sobre el engagement de los alumnos mediante IA en tiempo real.
                    </p>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                        Tecnologías utilizadas: Next.js, Tailwind CSS, Python, TypeScript, Express, Flask.
                    </p>
                </li>

                <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white "></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">18 Oct 2023 - 20 Nov 2023</time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white"><span className='text-yellow-500'>DuocUC</span> UI/UX & FrontEnd Developer</h3>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                        Plataforma de estudio complementario en línea para la universidad, que proporciona retroalimentación en tiempo real mediante IA.
                    </p>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                        Tecnologías utilizadas: Figma, Next.js, Tailwind CSS, JavaScript, Python, GPT-4.
                    </p>
                </li>
                <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white "></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Feb 2022 - Actualidad</time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white"><span className='text-yellow-500'>Walmart</span> Operador de tienda</h3>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                        Me desempeño en una variedad de roles, fomentando el trabajo colaborativo, la comunicación, la proactividad y la resolución de problemas.
                    </p>
                </li>
            </ol>
        </section>
    )
}

export default Exp