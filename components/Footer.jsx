import { assets } from "@/assets/assets";
import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-neutral-400 flex justify-between items-center gap-2 py-3 px-10  flex-col sm:flex-row ">
      <Image
        src={assets.logo}
        width={120}
        height={50}
        alt="Logo"
        className="w-auto"
      />
      <p className="text-white text-sm">
        {" "}
        © 2025 Juraj Duko. Všetky práva vyhradené.{" "}
      </p>
      <div className="flex flex-row flex-nowrap gap-3 ">
        <Image src={assets.instagram} width={20} alt="instagram" />
        <Image src={assets.github} width={20} alt="github" />
        <Image src={assets.linkedin} width={20} alt="linkedin" />
      </div>
    </footer>
  );
}

export default Footer;
