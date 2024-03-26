import { useState } from "react";
import logo from "../../../assets/logo.svg";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed z-50 flex flex-col lg:flex-row lg:items-center justify-between inset-0 bottom-auto py-5 px-[3%] shadow-golden bg-[#15151F]">
      <img src={logo} alt="" className="w-fit" />

      <button
        className="absolute right-8 top-10 hidden max-lg:block cursor-pointer"
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
        }}
      >
        {isMenuOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 50 50"
            className="fill-white"
          >
            <path d="M 40.783203 7.2714844 A 2.0002 2.0002 0 0 0 39.386719 7.8867188 L 25.050781 22.222656 L 10.714844 7.8867188 A 2.0002 2.0002 0 0 0 9.2792969 7.2792969 A 2.0002 2.0002 0 0 0 7.8867188 10.714844 L 22.222656 25.050781 L 7.8867188 39.386719 A 2.0002 2.0002 0 1 0 10.714844 42.214844 L 25.050781 27.878906 L 39.386719 42.214844 A 2.0002 2.0002 0 1 0 42.214844 39.386719 L 27.878906 25.050781 L 42.214844 10.714844 A 2.0002 2.0002 0 0 0 40.783203 7.2714844 z"></path>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 50 50"
            className="fill-white"
          >
            <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
          </svg>
        )}
      </button>

      <ul className="hidden lg:flex capitalize font-medium text-lg gap-7 font-oswald">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Trade</a>
        </li>
        <li>
          <a href="/">Earn</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </ul>

      <button className="hidden lg:block btn">Connect Wallet</button>

      {isMenuOpen && (
        <div className="lg:hidden pl-4">
          <ul className="flex flex-col items-center font-medium text-lg gap-3 font-oswald">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Trade</a>
            </li>
            <li>
              <a href="/">Earn</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
            <li className="w-full md:w-0">
              <button className="btn w-full md:w-0">Login</button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
