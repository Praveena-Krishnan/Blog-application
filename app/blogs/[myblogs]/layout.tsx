// app/layout.tsx (or your root layout file)
import Image from "next/image";
import Link from "next/link";
 

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        {/* Navbar */}
        <nav className="bg-white shadow-md py-4">
          <div className="container mx-auto flex justify-between items-center px-4">
            <div className="flex items-center">
              <Image
                src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-site-logo.svg"
                alt="Logo"
                width={64}
                height={34}
                className="ml-32"
              />
            </div>
            <ul className="flex space-x-8 text-lg font-semibold mr-32">
              <li><Link href="/" className="text-black hover:text-amber-700 cursor-pointer">Home</Link></li>
              <li className="text-black hover:text-amber-700 cursor-pointer">About</li>
              <li className="text-black hover:text-amber-700 cursor-pointer">Reviews</li>
              <li className="text-black hover:text-amber-700 cursor-pointer">Contact</li>
            </ul>
          </div>
        </nav>

        {/* Main Content */}
        <main>{children}</main>  
      </body>
    </html>
  );
}
