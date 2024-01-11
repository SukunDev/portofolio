import "./globals.css";
import Footers from "./footers";
import Headers from "./headers";
import { Providers } from "./providers";

export const metadata = {
  title: {
    template: "%s | SukunDev Portofolio",
    default: "SukunDev Portofolio",
  },
  description:
    "SukunDev | I'm Lutfi A passionate fullstack developer from Indonesia",
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en">
      <body>
        <Providers>
          <div className="container mx-auto">
            <Headers />
            <div className="relative flex flex-col min-h-[calc(100vh-5.5rem)] p-2 mt-8 bg-white border dark:border-white/15 rounded-2xl dark:bg-white/5">
              <div className="flex-grow">
                <main>{children}</main>
              </div>
              <Footers />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
