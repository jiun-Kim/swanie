import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "./Logo";
import { cls } from "./utils";

const Header = () => {
  const router = useRouter();
  return (
    <header className="py-6">
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <div className="w-full text-[#00173D] sm:px-4 flex flex-col justify-center items-center">
          <h1 className="text-center pb-24 text-lg sm:text-2xl font-bold tracking-widest">
            Australia Cleaning Service Swanie
          </h1>
          <div className="w-full border-t-2 border-[#00173D] justify-around items-center py-4 flex">
            <Link
              href="/"
              className={cls(
                " hover:text-red-500",
                router.pathname === "/" ? "text-red-500" : ""
              )}
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className={cls(
                " hover:text-red-500",
                router.pathname === "/about-us" ? "text-red-500" : ""
              )}
            >
              About Us
            </Link>
            <Link
              href="/services"
              className={cls(
                " hover:text-red-500",
                router.pathname === "/services" ? "text-red-500" : ""
              )}
            >
              Services
            </Link>
            <Link
              href="/contact-us"
              className={cls(
                " hover:text-red-500",
                router.pathname === "/contact-us" ? "text-red-500" : ""
              )}
            >
              Contact Us
            </Link>
          </div>
          <div className="flex items-center absolute ">
            <Logo size="lg:w-24 w-20" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
