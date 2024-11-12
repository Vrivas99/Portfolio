import Image from "next/image";
import Linkedin from 'public/svg/linkedin.svg'
import Github from 'public/svg/github.svg'
import Cv from 'public/svg/cv.svg'
import SocialButton from "@/components/SocialButton";

export default function Home() {



  return (
    <section id="Home" className="gap-10 w-full flex flex-col items-center justify-center">
      <div className="flex justify-center">
        <article className="z-10 flex text-pretty flex-col gap-4 justify-center h-auto w-auto">
          <h1 className="text-4xl font-bold">Hola<span className=" font-bold text-5xl text-yellow-500">!</span> soy Vicente</h1>
          <p className="pr-10">
            Estudiante de ingenieria en informatica,
            <span className=" font-bold text-xl text-yellow-500"> +2 </span>
            años desarrollando frontend y entusiaste de la UX/UI.
          </p>
          <div className="flex gap-3">
            <Image
              src="/img/cl.png"
              alt="CL"
              width={40}
              height={25}
              className="rounded-sm"
            />
            <p className="font-bold">Chile, Valparaíso.</p>
          </div>
        </article>
        {/* foto de perfil */}
        <div className="w-2/3 hidden sm:flex">
          <Image
            src="/img/fotoPerfil.jpg"
            alt="Vicente"
            width={200}
            height={200}
            className="rounded-full bg-transparent p-2 border-dotted border-4 border-yellow-500"
          />
        </div>
      </div>
      <span className="w-full h-0.5 bg-slate-600"></span>
      {/* redes sociales */}
      <div className="w-full justify-between flex">
        <div className="flex gap-4">
          <SocialButton
            href="https://www.linkedin.com/in/vicenteosvaldorivasurrutia/"
            bgColor="bg-blue-800">
            <Linkedin width={30} />
          </SocialButton>

          <SocialButton
            href="https://github.com/Vrivas99"
            bgColor="bg-gray-800">
            <Github width={30} />
          </SocialButton>
        </div>
        <div>
          <SocialButton
            download
            alt="Descargar CV"
            href="pdf/cv.pdf"
            bgColor="bg-green-800"
          >
            <Cv width={30} />
          </SocialButton>
        </div>
      </div>
    </section>
  );
}
