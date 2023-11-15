import { Link } from "react-router-dom";
import Container from "../Container/Container";
import logo from "../../../assets/logo.png";
import MenuDropdawn from "./MenuDropdawn";

const Navbar = () => {
  return (
    <div className="fixed w-full mx-auto bg-white z-10 shadow-sm ">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row justify-between items-center gap-3 md:gap-0">
            {/* logo */}
            <Link to="/">
              <img
                src={logo}
                className="hidden md:block"
                width="100"
                height="100"
                alt=""
              />
            </Link>
            {/* menu dropdown */}
            <MenuDropdawn></MenuDropdawn>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
