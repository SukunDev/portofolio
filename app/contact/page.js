import Headings from "../components/headings";
import ContactForm from "./contactForm";

export const metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <>
      <Headings title={"Hire Me"}>
        <div className="flex items-center gap-2 px-1.5 py-1.5 rounded-full sm:px-2 sm:py-0 bg-green-400/50 dark:bg-green-400/20">
          <div className="p-[3px] bg-green-500 rounded-full"></div>
          <p className="hidden font-normal text-green-600 uppercase sm:block dark:text-green-700">
            available for work
          </p>
        </div>
      </Headings>
      <div className="mx-2 mt-6 text-center sm:mx-4 xs:text-start">
        <h1 className="text-3xl font-medium sm:text-4xl text-slate-900 dark:text-gray-100">
          Design Inquiry
        </h1>
        <p className="mt-2 text-base sm:text-lg text-slate-500 dark:text-white/60">
          Got an idea and need design help? Reach out now
        </p>
      </div>
      <ContactForm />
    </>
  );
}
