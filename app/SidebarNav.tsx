import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarNav() {
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
  return (
    <aside className="w-full md:w-48 flex-shrink-0 md:pr-8 mb-8 md:mb-0">
      <h1 className="text-2xl font-bold mb-2 inline-block">Jesse Pollak</h1>
      <nav className="inline-block md:block ml-2 md:ml-0 align-middle -mt-2 md:mt-2">
        <ul className="flex md:flex-col space-x-4 md:space-x-0 md:space-y-1 text-lg md:text-base">
          <li className={pathname === "/" ? "font-bold" : undefined}>About</li>
          <li>
            <Link href="/photos" className={pathname === "/photos" ? "font-bold hover:underline" : "hover:underline"}>
              Photos
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}