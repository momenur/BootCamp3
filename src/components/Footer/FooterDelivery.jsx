import { FaHandHoldingUsd, FaMoneyBillAlt } from "react-icons/fa";

const FooterDelivery = () => {
  return (
    <div>
      <div className="flex-col hidden gap-1 lg:flex">
        <p className="font-medium">Delivery</p>
        <p className="flex gap-2 text-sm text-[#F97316] font-medium items-center">
          <span className="text-[#707070]">
            <FaHandHoldingUsd />
          </span>{" "}
          Free Delivery{" "}
          <span className="text-[#707070] text-xs font-normal ps-2">
            4Nov - 8Nov 3- 5 days
          </span>
        </p>
        <p className="text-xs text-[#707070] ps-5">
          Enjoy free shipping promotion with minimum spend <br /> of ৳ 499 from{" "}
          <span className="text-[#F97316]">xpress</span>.
        </p>
        <p className="text-[#F97316] flex items-center gap-2 text-sm">
          {" "}
          <span className="text-[#707070]">
            <FaMoneyBillAlt />
          </span>
          Cash on delivery available
        </p>
      </div>
      {/* for Mobile */}
      <div className="flex-col gap-1 pb-3 mt-4 border-b-2 sm:flex lg:hidden">
        <p className="font-medium">Delivery</p>
        <p className="flex gap-2 text-sm text-[#F97316] font-medium items-center">
          <span className="text-[#707070]">
            <FaHandHoldingUsd />
          </span>{" "}
          Free Delivery{" "}
          <span className="text-[#707070] text-xs font-normal ps-2">
            4Nov - 8Nov 3- 5 days
          </span>
        </p>
        <p className="text-xs ps-5 text-[#707070]">
          Enjoy free shipping promotion with minimum spend <br /> of ৳ 499 from{" "}
          <span className="text-[#F97316]">xpress</span>.
        </p>
        <p className="text-[#F97316] flex items-center gap-2 text-sm">
          {" "}
          <span className="text-[#707070]">
            <FaMoneyBillAlt />
          </span>
          Cash on delivery available
        </p>
      </div>
    </div>
  );
};

export default FooterDelivery;
