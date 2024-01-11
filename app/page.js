import Image from "next/image";
import DefaultButton from "./components/DefaultButton";
import { PiArrowRight, PiPlusCircle } from "react-icons/pi";
import Link from "next/link";
import Projects from "./components/projects";
import Headings from "./components/headings";
import HireMe from "./components/hireMe";

export default function Home() {
  return (
    <>
      <Headings title={"fullstack developer"}>
        <Link
          href={"/contact"}
          className="flex items-center gap-2 px-1.5 py-1.5 rounded-full sm:px-2 sm:py-0 bg-green-400/50 dark:bg-green-400/20"
        >
          <div className="p-[3px] bg-green-500 rounded-full"></div>
          <p className="hidden font-normal text-green-600 uppercase sm:block dark:text-green-700">
            available for work
          </p>
        </Link>
      </Headings>
      <div className="flex flex-col-reverse items-center mx-2 mt-6 sm:mx-4 sm:flex-row">
        <div className="w-full mt-4 text-center sm:w-3/5 sm:mt-0 xs:text-start">
          <h1 className="text-3xl font-medium sm:text-4xl text-slate-900 dark:text-gray-100">
            I&apos;m Lutfi Ainun N
          </h1>
          <p className="text-base sm:text-lg text-slate-500 dark:text-white/60">
            A passionate fullstack developer from Indonesia
          </p>
          <div className="flex items-center justify-center gap-4 mt-4 xs:justify-normal">
            <DefaultButton title={"Hire Me"} href={"/contact"}>
              <PiPlusCircle />
            </DefaultButton>
          </div>
        </div>
        <div className="w-full sm:w-2/5">
          <Image
            className="mx-auto"
            src={"/img/lutfi-cartoon.png"}
            alt="sukundev"
            width={180}
            height={180}
          />
        </div>
      </div>
      <div className="px-4 pt-4 pb-8 mt-16 bg-gray-100 dark:bg-white/10 rounded-xl">
        <Headings title={"Projects"}>
          <DefaultButton title={"View All"} href={"/projects"} type={2}>
            <PiArrowRight className="text-gray-500" />
          </DefaultButton>
        </Headings>
        <Projects max={true} />
      </div>
      <HireMe />
    </>
  );
}
