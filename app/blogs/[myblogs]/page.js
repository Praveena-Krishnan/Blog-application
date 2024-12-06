import blogs from "../../../data/blogsdata";
import Image from "next/image";

export default function BlogPost({ params }) {
  const { myblogs } = params;

  
  const blog = blogs.find((b) => b.myblog === myblogs);

  
  
  if (!blog) {
    return (
      <div className="text-center text-xl font-bold">
        Blog not found!
      </div>
    );
  }

  return (
    <div className="bg-white container mx-auto px-6 md:px-12 py-10 flex flex-col justify-center items-center min-h-screen">
  <h1 className="text-4xl font-bold text-black font-serif mb-6 text-center">
    {blog.title}
  </h1>
  <Image
    src={blog.image}
    alt={blog.title}
    width={600}
    height={500}
    className="rounded-lg"
  />
  <p className="text-lg text-black mt-6 text-center">
    {blog.content}
  </p>
</div>
  );
}
