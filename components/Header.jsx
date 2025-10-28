import { assets } from "@/assets/assets";
import Image from "next/image";

function Header() {
  return (
    <div className="py-5 px-5 md:px-12 lg:px-28 ">
      <div className="flex justify-between items-center">
        <Image
          src={assets.logo}
          width={180}
          alt="Logo"
          className="w-[130px] sm:w-auto"
        />
        <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-2px_2px_0px_#000] cursor-pointer ">
          Find more <Image src={assets.arrow_right} alt="arrow" width={14} />
        </button>
      </div>
      <div className="text-center my-10">
        <h1 className="mb-4 text-3xl sm:text-5xl font-medium font-[Roboto_mono]">
          Latest post
        </h1>
        <p className="mt-10 max-w-[740px] m-auto text-xs  sm:text-base">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae
          dolorem adipisci praesentium aliquam saepe culpa deserunt rem, nisi
          odit soluta distinctio.
        </p>
      </div>
    </div>
  );
}

export default Header;
