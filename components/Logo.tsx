import logo from "../public/logo.png";
import { cls } from "./utils";

interface LogoProps {
  size?: string;
}

const Logo = ({ size = "w-24" }: LogoProps) => {
  return (
    <div>
      <img src={logo.src} className={cls(`${size}`)} />
    </div>
  );
};

export default Logo;
