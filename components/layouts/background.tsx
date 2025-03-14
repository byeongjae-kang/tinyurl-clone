import largeBackground from "@/public/background/large.svg";
import smallBackground from "@/public/background/small.svg";
import Image from "next/image";

export default function Background() {
  return (
    <div className="fixed top-0 w-screen h-screen -z-50 bg-linear-180 from-[#002342] to-[#0bc9e3] to-[130%]">
      <Image
        className="w-[400px] h-[200px] fixed top-0 left-0"
        src={smallBackground}
        alt="large background image"
      />
      <Image
        className="w-screen h-screen fixed right-0 bottom-0"
        src={largeBackground}
        alt="large background image"
      />
    </div>
  );
}
