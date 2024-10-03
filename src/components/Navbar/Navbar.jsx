// import { motion } from "framer-motion";
import { MdComputer, MdMenu } from "react-icons/md";
import { NavbarMenu } from "../../mockdata/data";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="container flex justify-between items-center py-6">
          {/* logo section */}
          <div className="text-2xl flex items-center gap-2 font-bold">
            <MdComputer className="text-3xl text-secondary" />
            <p>E-Tutor</p>
          </div>

          {/* menu section */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-6">
              {NavbarMenu.map((item) => {
                return (
                  <li key={item.id}>
                    <a
                      href={item.link}
                      className="inline-block text-gray-600 text-sm xl:text-base py-1 px-2 xl:px-3"
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* CTA button section */}
          <div className="hidden lg:block space-x-6">
            <button className="font-semibold ">Sign In</button>
            <button className="text-white bg-secondary font-smibold rounded-full px-6 py-2">
              Register
            </button>
          </div>

          {/* mobile humberger menu */}
          <div className="lg:hidden">
            <MdMenu className="text-4xl" />
          </div>
        </div>
      </nav>

      {/* Mobile sidebar action */}
      <ResponsiveMenu />
    </>
  );
};

export default Navbar;
