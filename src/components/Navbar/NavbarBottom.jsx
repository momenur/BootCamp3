import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { HiMenu } from "react-icons/hi";

const NavbarBottom = () => {
  return (
    <div className="hidden lg:block">
      <ul className="flex gap-4 px-2 py-4 text-[#434343] text-xs ">
        <li className="flex items-center text-[#F97316] font-semibold gap-1 justify-center text-sm">
          <span className="border-[1px] border-[#F97316] rounded-md">
            <HiMenu />
          </span>
          All Categories
          <IoIosArrowDown />
        </li>
        <li className="flex items-center gap-2">
          Electronic Devices <IoIosArrowForward />
        </li>
        <li className="flex items-center gap-2">
          bag and travel <IoIosArrowForward />
        </li>
        <li className="flex items-center gap-2">
          travel and sports <IoIosArrowForward />
        </li>
        <li className="flex items-center gap-2">
          bag and travel <IoIosArrowForward />
        </li>
        <li>Valvet Travel Neck Pillow Folding U-Shaped... </li>
      </ul>
    </div>
  );
};

export default NavbarBottom;
