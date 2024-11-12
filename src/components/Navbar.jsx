// Portfolio navbar
import Code from 'public/svg/code.svg'
import Home from 'public/svg/home.svg'
import Contact from 'public/svg/contact.svg'
import About from 'public/svg/person.svg'
import Work from 'public/svg/work.svg'

import NavBtn from './NavBtn'

const Navbar = () => {


    return (
        <nav className="fixed z-20 bottom-5 gap-3 right-1/2 transform translate-x-1/2 md:right-12 md:bottom-1/2 md:translate-y-1/2 md:gap-7 flex md:flex-col">
            <NavBtn href="#Home" tooltip="Inicio">
                <Home width={24}/>
            </NavBtn>
            <NavBtn href="#Experience" tooltip="Experiencia">
                <Work width={24}/>
            </NavBtn>
            <NavBtn href="#Projects" tooltip="Proyectos">
                <Code width={24}/>
            </NavBtn>
            <NavBtn href="#" tooltip="Yo">
                <About width={24}/>
            </NavBtn>
            <NavBtn href="#" tooltip="Contacto">
                <Contact width={24}/>
            </NavBtn>
        </nav>
    )
}

export default Navbar