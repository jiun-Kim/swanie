import Link from "next/link";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer>
      <div className="py-10 w-full flex space-x-10  max-w-7xl mx-auto">
        <Logo size="w-40" />
        <div className="flex flex-col justify-around">
          <div className="flex flex-col space-y-1">
            <span className=" uppercase">Swanie Group PTY LTD</span>
            <span>Email: swaniegroup@gmail.com</span>
            <span>Australian NSW Best cleaning Service Group</span>
          </div>
          <span className="text-sm">
            {new Date().getFullYear()} &copy; All Rights Reserved By{" "}
            <Link
              className="text-orange-500 "
              href="https://jiunstudio.com"
              target="_blank"
            >
              JIUN STUDIO
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
