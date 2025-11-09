"use client";
import { assets, blog_data } from "@/assets/assets";
import Image from "next/image";
import { useEffect, useState, use } from "react";

function page(props) {
  const params = use(props.params);
  const [data, setData] = useState(null);

  function fetchBlogData() {
    for (let i = 0; i < blog_data.length; i++) {
      if (Number(params.id) === blog_data[i].id) {
        setData(blog_data[i]);
        console.log(blog_data[i]);
        break;
      }
    }
  }

  useEffect(() => {
    fetchBlogData();
  }, []);

  return data ? (
    <>
      <div className="bg-gray-300 py-5 px-5 md:px-12 lg:px-28 ">
        <div className="flex justify-between items-center">
          <Image src={assets.logo} width={180} alt="logo" className="w-[130]" />
          <button className="flex items-center gap-2 font-medium py-1 px-3  sm:px-3 border border-black shadow-[-2px_2px_0_#000]">
            Spat
          </button>
        </div>
        <div className=" text-center my-24">
          <h1 className="font-black text-4xl text-center mt-10">
            {data.title}
          </h1>
          <h4 className="text-center mt-5 tracking-wider font-[Roboto_Mono] font-black">
            {data.author}
          </h4>
          <Image
            src={data.author_img}
            width={100}
            height={100}
            className="mx-auto my-6 rounded-full  "
          />
        </div>
      </div>
      <div className="mt-[-100px] mx-5 max-w-[800px] md:mx-auto mb-10">
        <Image
          src={data.image}
          width={1280}
          height={720}
          className="mx-auto mt-10 "
        />
      </div>
    </>
  ) : (
    <></>
  );
}

export default page;
