import Link from "next/link";
import { ThemeSwitch } from "./theme-switch";
import { metaData } from "../config";
import { Dancing_Script } from 'next/font/google';

const navItems = {
  "/blog": { name: "Blog" },
  // "/projects": { name: "Projects" },
};

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['700'], // Include the weights you want to use
});

export function Navbar() {
  return (
    <nav className="lg:mb-14 mb-10 py-5">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className={`text-4xl font-semibold tracking-tight ${dancingScript.className}`}>
            {metaData.title}
          </Link>
        </div>
        <div className="flex flex-row gap-4 mt-6 md:mt-0 md:ml-auto items-center">
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              key={path}
              href={path}
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative"
            >
              {name}
            </Link>
          ))}
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
}
