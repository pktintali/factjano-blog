import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <>
      <header className="bg-gray-800 text-white">
        <div className="container mx-auto flex items-center justify-between py-4">
          <Image
            src="/logo.png"
            alt="Logo"
            className="h-8 ml-2"
            width={31}
            height={31}
          />
          <h1 className="text-xl font-medium">Blog Title</h1>
          <nav>
            <Link
              href="#tech"
              className="px-3 text-sm font-medium hover:underline"
            >
              Tech
            </Link>
            <Link
              href="#social"
              className="px-3 text-sm font-medium hover:underline"
            >
              Social Media
            </Link>
            <Link
              href="#jobs"
              className="px-3 text-sm font-medium hover:underline"
            >
              Jobs
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
