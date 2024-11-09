import React from 'react'
import Work from 'public/Work.svg'

const Exp = () => {
    return (
        <section id='Experience' className='relative w-full h-screen flex flex-col justify-center'>
            <span className="absolute top-10 left-full blur-xl w-96 h-96 rounded-full animate-spin-slow bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500" />
            <span className="absolute top-10 left-full w-96 h-96 blur bg-background rounded-full" />
            <span className="absolute bottom-10 right-full blur-xl w-96 h-96 rounded-full animate-spin-slow bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500" />
            <span className="absolute bottom-10 right-full w-96 h-96 blur bg-background rounded-full" />
            <div className='flex gap-3 align-middle justify-start'>
                <Work className="w-10 h-10 text-yellow-500" />
                <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">Experience</h2>
            </div>
            <ol className="relative border-s border-yellow-500 ">
                <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white "></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2022</time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Application UI code in Tailwind CSS</h3>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
                </li>
                <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white "></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2022</time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Marketing UI design in Figma</h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
                </li>
            </ol>
        </section>
    )
}

export default Exp