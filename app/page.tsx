import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-2xl font-bold mb-2">Jesse Pollak</h1>
        <nav>
          <ul className="space-y-1">
            <li className="font-bold">About</li>
            <li>
              <Link href="/photos" className="hover:underline">
                Photos
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex flex-col items-center">
        <div className="relative mb-12">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/i336x336-uYmY_vQW5pBA_wwbufe-M4H62EK300CHHPUtPhCGywlAQWy6Ut.png"
            alt="Pixelated avatar"
            width={280}
            height={280}
            priority
            className="w-auto h-auto"
          />
          <span className="absolute bottom-0 right-0 text-2xl">👋</span>
        </div>

        <div className="space-y-4 text-base max-w-2xl">
          <p>
            I currently work on{" "}
            <Link href="https://base.org/" className="font-medium underline">
              Base
            </Link>
            , which I created and lead day-to-day. I previously led all Consumer engineering at Coinbase, including
            building Coinbase, Coinbase Pro, and Coinbase Wallet.
          </p>

          <p>
            Way back when, I started{" "}
            <Link href="https://en.wikipedia.org/wiki/Clef_(app)" className="font-medium underline">
              Clef
            </Link>{" "}
            and was an engineer at{" "}
            <Link href="https://buzfeed.com/" className="font-medium underline">
              BuzzFeed
            </Link>
            . I also write{" "}
            <Link href="https://github.com/jessepollak" className="font-medium underline">
              open source software
            </Link>{" "}
            and{" "}
            <Link href="https://jesse.xyz/photos" className="font-medium underline">
              take photos
            </Link>
            .
          </p>

          <p>
            Find me at{" "}
            <Link href="https://jesse.xyz/" className="font-medium underline">
              jesse.xyz
            </Link>{" "}
            on ETH and on{" "}
            <Link href="https://twitter.com/jessepollak" className="font-medium underline">
              Twitter
            </Link>
            ,{" "}
            <Link href="https://github.com/jessepollak" className="font-medium underline">
              Github
            </Link>
            , &{" "}
            <Link href="https://www.linkedin.com/in/jessepollak/" className="font-medium underline">
              LinkedIn
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
