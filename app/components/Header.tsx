import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex bg-slate-200 justify-between shadow items-center">
      <Link href={"/"} className="p-2 flex items-center hover:bg-fuchsia-100 hover:shadow-md">
        <h2 className="text-3xl font-semibold">FactJano Blog</h2>
        <Image
          alt="fact jano logo"
          src={"/factjano_logo.png"}
          width={40}
          height={40}
        />
      </Link>
      <Link href={'/'} className="p-3 text-lg hover:bg-fuchsia-100">About</Link>
    </div>
  );
}
//Demo comment