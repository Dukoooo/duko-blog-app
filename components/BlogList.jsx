import { blog_data } from "@/assets/assets";
import BlogItem from "./BlogItem";
import { useState } from "react";

function BlogList() {
  const [menu, setMenu] = useState("All");
  return (
    <div className="">
      <div className="flex justify-center gap-6 my-10 ">
        <button
          onClick={() => setMenu("All")}
          className={
            menu === "All" ? "bg-black text-white py-1 px-4 rounded-sm" : ""
          }
        >
          All
        </button>
        <button
          onClick={() => setMenu("Javascript")}
          className={
            menu === "Javascript"
              ? "bg-black text-white py-1 px-4 rounded-sm"
              : ""
          }
        >
          javaScript
        </button>
        <button
          onClick={() => setMenu("React")}
          className={
            menu === "React" ? "bg-black text-white py-1 px-4 rounded-sm" : ""
          }
        >
          React
        </button>
        <button
          onClick={() => setMenu("Testing")}
          className={
            menu === "Testing" ? "bg-black text-white py-1 px-4 rounded-sm" : ""
          }
        >
          Testing
        </button>
        <button
          onClick={() => setMenu("Tailwind")}
          className={
            menu === "Tailwind"
              ? "bg-black text-white py-1 px-4 rounded-sm"
              : ""
          }
        >
          Tailwind
        </button>
      </div>
      <div className=" flex flex-wrap justify-around gap-1  gap-y-10 mb-16 xl:mx-24 mx-3 ">
        {blog_data
          .filter((item) => (menu === "All" ? true : item.category === menu))
          .map((el, index) => {
            return (
              <BlogItem
                key={index}
                image={el.image}
                title={el.title}
                descripion={el.description}
                category={el.category}
              />
            );
          })}
      </div>
    </div>
  );
}

export default BlogList;
