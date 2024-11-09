import Image from "next/image";
import Linkedin from 'public/linkedin.svg'
import Github from 'public/github.svg'
import Cv from 'public/cv.svg'
import SocialButton from "@/components/SocialButton";

export default function Home() {



  return (
    <section id="Home" className="gap-10 relative w-full flex flex-col items-center justify-center">
      <div className="flex justify-center">
        <span className="absolute top-10 right-full blur-xl w-96 h-96 rounded-full animate-spin-slow bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500" />
        <span className="absolute top-10 right-full w-96 h-96 blur bg-background rounded-full" />
        <article className=" z-10 flex text-pretty flex-col gap-4 justify-center h-auto w-2/3">
          <h1 className="text-4xl font-bold">Hola<span className=" font-bold text-5xl text-yellow-500">!</span> soy Vicente</h1>
          <p>
            Estudiante de ingenieria en informatica,
            <span className=" font-bold text-xl text-yellow-500"> +2 </span>
            años desarrollando frontend y entusiaste de la UX/UI.
          </p>
          <div className="flex gap-3">
            <Image
              src="/cl.png"
              alt="CL"
              width={40}
              height={25}
              className="rounded-sm"
            />
            <p className="font-bold">Chile, Valparaíso.</p>
          </div>

        </article>
        <span className="z-10 relative bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500 w-52 h-52 p-1 flex justify-center rounded-full">
          <Image
            src="/fotoPerfil.jpg"
            alt="Vicente"
            width={200}
            height={200}
            className="absolute left-3 top-2 rounded-full bg-background p-2"
          />
        </span>
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
            href="/cv.pdf"
            bgColor="bg-green-800"
          >
            <Cv width={30} />
          </SocialButton>
        </div>
      </div>
    </section>
  );
}
