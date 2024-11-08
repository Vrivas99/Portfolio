// Portfolio navbar
import work from 'public/work.svg'
import Image from 'next/image'

const Navbar = () => {
    return (
        <nav className="flex mx-auto my-5 w-full justify-center">
            <div className="flex space-x-3 items-center justify-between bg-foreground bg-opacity-80 backdrop-blur-md rounded-full px-4 py-2 shadow-lg max-w-md mx-auto transition-all duration-300 hover:shadow-xl hover:bg-opacity-90">
                <a href="#" className="gap-1 text-background text-center align-middle flex items-center font-semibold">
                    <Image src={work} alt="icon" className="w-7" />
                    Experiencia
                </a>
                <a href="#" className="text-background">Proyectos</a>
                <a href="#" className="text-background">Sobre mí</a>
                <a href="#" className="text-background">Contacto</a>
            </div>
        </nav>
    )
}

export default Navbar