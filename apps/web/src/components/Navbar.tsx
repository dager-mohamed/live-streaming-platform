import { MountainIcon, Tv } from "lucide-react"
import Link from "next/link"

export default function Navbar() {
  return (
<header className="w-full">
      <div className="container flex items-center justify-between py-4 px-4 md:px-6">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <Tv className="h-6 w-6" />
        </Link>
        <div className="flex items-center gap-4">
          <Link
            href="#"
            className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Login
          </Link>
          <Link
            href="#"
            className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  )
}