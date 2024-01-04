import sellerImage from "../../assets/images/sellerImage.jpg";
import { IoMdChatboxes } from "react-icons/io";
import { FaRegClock } from "react-icons/fa";
import FooterDelivery from "./FooterDelivery";

const Footer = () => {
  return (
    <div className="lg:flex justify-between lg:border-[1px]   p-1 lg:p-6 mt-3 lg:mt-10 items-center">
      <div className="flex items-center justify-between gap-2 lg:justify-normal lg:gap-16 border-[1px] lg:border-none p-2 lg:p-0 ">
        <div className="flex items-center gap-2 lg:gap-6 ">
          <img
            src={sellerImage}
            alt=""
            className="lg:w-[70px] w-[40px] h-[40px] lg:h-[70px] rounded-full"
          />
          <div className="flex flex-col gap-2">
            <p className="text[#434343] text-xs lg:text-sm">Al-Amin Gallery</p>
            <div className="flex items-center gap-2">
              <div className="w-[7px] h-[7px] bg-[#D9D9D9]"></div>
              <p className="text-[#D9D9D9 text-[10px]">Active 6 Hours ago</p>
            </div>
            <div className="flex gap-2 lg:gap-6 text-[#37A5BF] font-medium">
              <p className="text-sm">Visit Store</p>
              <p className="flex items-center gap-[3px] text-xs">
                <span>
                  <IoMdChatboxes />
                </span>
                Chat
              </p>
            </div>
          </div>
        </div>

        {/* Seller Review */}
        <div className="flex items-center gap-2 lg:gap-10 lg:h-[100px] lg:border-e-2 lg:pe-20">
          <div className="flex flex-col gap-2 text-xs text-[#707070]">
            <p>Seller Rating:</p>
            <p>Ship on Time:</p>
            <p>Response Rate:</p>
          </div>
          <div className="font-medium ">
            <p>95%</p>
            <p>90%</p>
            <p>85%</p>
          </div>
        </div>
      </div>

      {/* Footer Revers Part */}
      <div className="flex flex-col-reverse lg:gap-16 md:flex-row flex-coll">
        <div className="flex flex-col gap-1 lg:h-[100px] lg:border-e-2 lg:mt-0 mt-3 lg:pe-10">
          <p className="font-medium">Service</p>
          <p className="flex items-center gap-[3px]">
            <span>
              <FaRegClock />
            </span>
            <span className="text-sm text-[#F97316]">7 day return</span>
          </p>
          <p className="text-xs text-[#707070] ps-5">
            Change of mind is not applicable
          </p>
          <p className="flex items-center text-sm font-medium gap-[3px]">
            <FaRegClock />
            <span></span>Warranty Not Available
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <FooterDelivery />
        </div>
      </div>
    </div>
  );
};

export default Footer;
