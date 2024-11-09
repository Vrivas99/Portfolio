// Portfolio navbar
import Code from 'public/code.svg'
import Home from 'public/home.svg'
import Contact from 'public/contact.svg'
import About from 'public/person.svg'
import Work from 'public/Work.svg'

const Navbar = () => {


    return (
        <nav className="fixed right-10 top-1/2 transform -translate-y-1/2 gap-7 flex flex-col">
            <a
                className="group flex justify-center p-3 rounded-md drop-shadow-xl bg-gradient-to-r from-gray-800 to-black text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500"
                href="/#Home"
            >
                <Home/>
                <span
                    className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-200 group-hover:text-sm group-hover:-translate-y-10 duration-300"
                >
                    Inicio
                </span>
            </a>
            <a
                className="group flex justify-center p-3 rounded-md drop-shadow-xl bg-gradient-to-r from-gray-800 to-black text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500"
                href="#Experience"
            >
                <Work/>
                <span
                    className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-200 group-hover:text-sm group-hover:-translate-y-10 duration-300"
                >
                    Experiencia
                </span>
            </a>
            <a
                className="group flex justify-center p-3 rounded-md drop-shadow-xl bg-gradient-to-r from-gray-800 to-black text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500"
                href="/"
            >
                <Code/>
                <span
                    className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-200 group-hover:text-sm group-hover:-translate-y-10 duration-300"
                >
                    Proyectos
                </span>
            </a>
            <a
                className="group flex justify-center p-3 rounded-md drop-shadow-xl bg-gradient-to-r from-gray-800 to-black text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500"
                href="/"
            >
                <About/>
                <span
                    className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-200 group-hover:text-sm group-hover:-translate-y-10 duration-300"
                >
                    Yo
                </span>
            </a>
            <a
                className="group flex justify-center p-3 rounded-md drop-shadow-xl bg-gradient-to-r from-gray-800 to-black text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500"
                href="/"
            >
                <Contact/>
                <span
                    className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-200 group-hover:text-sm group-hover:-translate-y-10 duration-300"
                >
                    Contacto
                </span>
            </a>
        </nav>
    )
}

export default Navbar