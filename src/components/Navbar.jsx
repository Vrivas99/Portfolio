// Portfolio navbar
import Code from 'public/code.svg'
import Home from 'public/home.svg'
import Contact from 'public/contact.svg'
import About from 'public/person.svg'
import Work from 'public/Work.svg'

import NavBtn from './NavBtn'

const Navbar = () => {


    return (
        <nav className="fixed right-10 top-1/2 transform -translate-y-1/2 gap-7 flex flex-col">
            <NavBtn href="#Home" tooltip="Inicio">
                <Home />
            </NavBtn>
            <NavBtn href="#Experience" tooltip="Experiencia">
                <Work />
            </NavBtn>
            <NavBtn href="#Projects" tooltip="Proyectos">
                <Code />
            </NavBtn>
            <NavBtn href="#" tooltip="Yo">
                <About />
            </NavBtn>
            <NavBtn href="#" tooltip="Contacto">
                <Contact />
            </NavBtn>
        </nav>
    )
}

export default Navbar