import { CiHeart, CiShare2 } from "react-icons/ci";

const LoveOrReport = () => {
  return (
    <div className="flex text-[#707070] gap-3 lg:gap-6 items-center pe-4">
      <span className="flex gap-1 lg:gap-3">
        <span className="bg-[#F0F0F0] p-2 rounded-full">
          <CiHeart />
        </span>
        <span className="bg-[#F0F0F0] p-2 rounded-full">
          <CiShare2 />
        </span>
      </span>
      <span>Report</span>
    </div>
  );
};

export default LoveOrReport;
