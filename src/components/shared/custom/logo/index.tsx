import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="relative flex h-10 w-[100px] flex-row items-center md:w-[160px]">
      <Image src="/favicon.ico" alt="Logo" width={32} height={32} className="object-contain" />
      <span className="ms-2 text-sm font-bold text-primary md:text-2xl">MIRAI</span>
      <span className="text-sm font-bold text-secondary-foreground md:text-2xl">DEX</span>
    </Link>
  );
}
