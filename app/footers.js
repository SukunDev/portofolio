import Link from "next/link";
import React from "react";
import { PiGithubLogo, PiInstagramLogo } from "react-icons/pi";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import SocialButton from "./components/socialButton";
import Headings from "./components/headings";

export default function Footers() {
  return (
    <>
      <footer>
        <div className="p-4 bg-gray-100 dark:bg-white/10 rounded-xl">
          <Headings title={"Folow Me"}>
            <ul className="flex items-center gap-1 xs:gap-2">
              <li>
                <SocialButton
                  href={"https://www.instagram.com/sukundevelopers"}
                >
                  <PiInstagramLogo className="text-base xs:text-xl" />
                </SocialButton>
              </li>
              <li>
                <SocialButton href={"https://twitter.com/sukundev"}>
                  <FaXTwitter className="text-base xs:text-xl" />
                </SocialButton>
              </li>
              <li>
                <SocialButton
                  href={"https://linkedin.com/in/lutfi-ainun-najih"}
                >
                  <FaLinkedinIn className="text-base xs:text-xl" />
                </SocialButton>
              </li>
              <li>
                <SocialButton href={"https://github.com/SukunDev"}>
                  <PiGithubLogo className="text-base xs:text-xl" />
                </SocialButton>
              </li>
            </ul>
          </Headings>
          <p className="mt-4 text-sm text-center text-gray-400 dark:text-white/50">
            © 2024{" "}
            <Link
              className="transition duration-500 hover:text-blue-500"
              href={"https://github.com/SukunDev/portofolio"}
            >
              SukunDev
            </Link>{" "}
            - Portofolio
          </p>
        </div>
      </footer>
    </>
  );
}
