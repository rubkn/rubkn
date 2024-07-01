import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-4 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <p className="text-xs text-muted-foreground">
        &copy; 2024 Ruben Brandão. All rights reserved.
      </p>
      <nav className="sm:ml-auto flex gap-3 sm:gap-4">
        <Link
          href="https://twitter.com/rubkndotdev"
          className="text-xs hover:underline underline-offset-4"
          prefetch={false}
          target="_blank"
          rel="noopener noreferrer"
        >
          X
        </Link>
        <Link
          href="https://github.com/rubkn"
          className="text-xs hover:underline underline-offset-4"
          prefetch={false}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </Link>
        <Link
          href="https://linkedin.com/in/rubenvbrandao/"
          className="text-xs hover:underline underline-offset-4"
          prefetch={false}
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </Link>
      </nav>
    </footer>
  );
}
