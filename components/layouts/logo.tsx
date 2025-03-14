import { Bungee } from "next/font/google";
import Link from "next/link";

const bungee = Bungee({
  subsets: ["latin"],
  weight: "400"
});

export default function Logo() {
  return (
    <div className={`${bungee.className} text-4xl`}>
      <Link href="/">TINYURL</Link>
    </div>
  );
}
