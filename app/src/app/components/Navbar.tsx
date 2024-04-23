import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center px-4 md:px-12 py-2 fixed top-0 bg-[#ffffff]  w-full z-50 shadow-xl ">
      <Link href={"/"}>
       <h1 className="capitalize text-3xl">Product</h1>
      </Link>
      <div className="flex items-center space-x-2.5 text-sm">
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href={'/'} className="mr-5 hover:text-gray-900 ">home page</Link>
          <Link href={'/products'} className="mr-5 hover:text-gray-900 ">all products</Link>
        </nav>
        <Link href={"/shopping-Card"}>
        <button className="button bg-blue-600 text-white border-transparent hover:border-blue-500 hover:bg-transparent hover:text-black">
          my bag
        </button>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
