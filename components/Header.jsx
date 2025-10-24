import { assets } from "@/assets/assets";
import Image from "next/image";

function Header() {
  return (
    <div className="py-5 px-5 md:px-12 lg:px-28">
      <div>
        <Image
          src={assets.logo}
          width={180}
          alt="Logo"
          className="w-[130px] sm:w-auto"
        />
      </div>
    </div>
  );
}

export default Header;
