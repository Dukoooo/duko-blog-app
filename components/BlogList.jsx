import { blog_data } from "@/assets/assets";
import BlogItem from "./BlogItem";

function BlogList() {
  return (
    <div className="">
      <div className="flex justify-center gap-6 my-10">
        <button className="bg-black text-white py-1 px-4 rounded-sm">
          All
        </button>
        <button>javaScript</button>
        <button>React</button>
        <button>Testing</button>
        <button>Tailwind</button>
      </div>
      <div className=" flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24">
        {blog_data.map((el, index) => {
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
