import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="relative w-[160px] h-10">
      <Image
        src="/logo/logo.svg"
        alt="Logo"
        fill
        className="object-contain"
      />
    </Link>
  )
}