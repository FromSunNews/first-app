import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export function Logo() {
  const { theme } = useTheme();
  return (
    <Link href="/" className="relative w-[100px] md:w-[160px] h-10 flex flex-row items-center">
      <Image
        src="/favicon.ico"
        alt="Logo"
        width={32}
        height={32}
        className="object-contain"
      />
      <span className="ms-2 text-2xl font-bold text-primary">Mirai</span>
      <span className="text-2xl font-bold text-secondary-foreground">App</span>
    </Link>
  )
}