import headerLogo from "../assets/images/header-logo.svg";
import hamburguer from "../assets/icons/hamburger.svg";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden">
          <li>
            <a
              href="/"
              className="font-montserrat leading-normal text-lg text-slate-gray"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/"
              className="font-montserrat leading-normal text-lg text-slate-gray"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="/"
              className="font-montserrat leading-normal text-lg text-slate-gray"
            >
              Products
            </a>
          </li>
          <li>
            <a
              href="/"
              className="font-montserrat leading-normal text-lg text-slate-gray"
            >
              Contact Us
            </a>
          </li>
          <li>
            <a href="/" className="font-montserrat leading-normal text-lg">
              Sign in / Explore now
            </a>
          </li>
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburguer} alt="Hamburguer" width={25} height={25} className="cursor-pointer" />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
