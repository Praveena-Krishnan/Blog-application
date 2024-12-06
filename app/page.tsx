import Image from "next/image";
import Link from "next/link";
import blogs from "../data/blogsdata";


export default function Home() {
  return (
    <div className="bg-white">
      {/* Navbar */}
      <nav className="bg-white shadow-md py-4 ">
        <div className="container mx-auto flex justify-between items-center px-4 ">
          <div className="flex items-center">
            <Image
              src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-site-logo.svg"
              alt="Logo"
              width={64}
              height={34}
              className="ml-32 "
            />
          </div>
          <ul className="flex space-x-8 text-lg font-semibold mr-32">
            <li><Link href="/"className="text-black hover:text-amber-700 cursor-pointer">Home</Link></li>
            <li className="text-black hover:text-amber-700 cursor-pointer">About</li>
            <li className="text-black hover:text-amber-700 cursor-pointer">Reviews</li>
            <li className="text-black hover:text-amber-700 cursor-pointer">Contact</li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative flex items-center justify-between bg-white pt-20 pb-32 px-48">
        <div className="flex flex-col max-w-lg">
          <h2 className="text-amber-600 text-lg font-semibold tracking-wider">
            ________WELCOME
          </h2>
          <h1 className="text-5xl font-serif text-black font-bold mt-6">
            I'm Dianna Adams
          </h1>
          <p className="text-3xl text-black font-semibold mt-4">Food Critic / Influencer / Blogger</p>
          <p className="text-xl text-gray-400 font-light mt-6">
            Irure nisi do reprehenderit officia sint adipisicing excepteur occaecat eiusmod. Dolore Lorem eiusmod consectetur amet dolor cupidatat sunt. Eu dolor aute nisi nisi.
          </p>
          <button className="bg-white border border-amber-700 text-amber-700 font-medium text-lg py-2 px-6 mt-8 rounded">
            Join Me
          </button>
        </div>
        <div className="w-1/2">
          <Image
            src="/images/hero.png"  
            alt="Food Blogger"
            width={600}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Latest Blogs Section */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-4xl font-bold font-serif text-left mb-10 text-black ml-20">Latest Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mr-20 ml-20">
          {/* Blog Post 1 */}
             {blogs.map((blog)=>(
              <div key={blog.myblog} className="bg-white overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={500}
                  height={300}
                  className="w-full h-56 object-cover"
                />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-black">{blog.title}</h3>
              <p className="text-gray-500 mt-4">
                {blog.content.substring(0,60)}...
              </p>
              <Link href={`/blogs/${blog.myblog}`}>
              <button className="text-amber-700 hover:text-amber-900 mt-6 border border-amber-700 p-2">
                Read More
              </button>
              </Link>
            </div>
          </div>
          ))}
          
        </div>
      </div>

     
    </div>
  );
}
