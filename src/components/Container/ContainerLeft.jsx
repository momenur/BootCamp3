import { FaStar } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import offerImage from "../../assets/images/offerImage.png";
import LoveOrReport from "./LoveOrReport";

const ContainerLeft = () => {
  return (
    <div className="relative">
      <div className="flex flex-col gap-2 w-11/12 lg:w-[719px]">
        <h2 className="text-[#2E2E2E] lg:text-xl text-sm font-normal lg:leading-6 mt-2">
          Valvet Travel Neck Pillow Folding U-Shaped from Memory Foam + Eye
          Masks Ear buds Soft Massage Pillow for Sleeping in Bus Car Plane
        </h2>
        <div className="flex justify-between">
          <div className="flex gap-4">
            <p className="flex items-center pe-4 border-e-2">
              4.7{" "}
              <span className="flex gap-[1px] text-[#FCD34D]">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>
            </p>
            <p className="pe-4 border-e-2">
              24 <span className="text-[#707070]">Ratings</span>
            </p>
            <p>
              2.5k <span className="text-[#707070]">Sold</span>
            </p>
          </div>
          <div className="hidden lg:block">
            <LoveOrReport />
          </div>
        </div>
        {/* Price Section is Start */}
        <div className="flex gap-4">
          <h1 className="text-2xl text-[#F97316]">
            ৳ 1,990/-{" "}
            <span className="text-[#737373] text-base line-through">
              ৳ 2,999
            </span>
          </h1>
          <span className="bg-[#F97316] text-[#FFFFFF] p-1">-34% OFF</span>
        </div>

        {/* Brand and Color */}
        <div className="flex flex-col gap-4 text-sm">
          <p className="text-[#707070]">
            Brand: <span className="text-black">No brand:</span>
          </p>
          <div className="flex items-center gap-1 text-sm leading-5 lg:gap-3">
            <p className="text-[#707070]">Size: </p>
            <span className="bg-[#EAEAEA] px-2 py-1 text-[#F97316] font-medium">
              M
            </span>
            <span className="bg-[#EAEAEA] px-3 py-1 text-[#F97316] font-medium">
              L
            </span>
            <span className="bg-[#EAEAEA] px-2 py-1 text-[#F97316] font-medium">
              XL
            </span>
            <span className="bg-[#F97316] px-2 py-1 text-white font-medium">
              XXL
            </span>
            <span className="lg:hidden sm:block ps-6">
              <LoveOrReport />
            </span>
          </div>

          {/* Color Section */}
          <div className="flex flex-col gap-2 text-sm">
            <p>
              Color: <span>Black</span>
            </p>
            <div className="flex gap-2 lg:gap-4">
              <div className="border-[1px] p-1">
                <div className="w-[32px] h-[32px] bg-[#FFE91F]"></div>
              </div>
              <div className="border-[1px] p-1">
                <div className="w-[32px] h-[32px] bg-[#79CAAD]"></div>
              </div>
              <div className="border-[1px] p-1">
                <div className="w-[32px] h-[32px] bg-[#FF8E40]"></div>
              </div>
              <div className="border-[1px] p-1">
                <div className="w-[32px] h-[32px] bg-[#1F93FF]"></div>
              </div>
              <div className="border-[1px] p-1">
                <div className="w-[32px] h-[32px] bg-[#E01FFF]"></div>
              </div>
              <div className="border-[1px] p-1">
                <div className="w-[32px] h-[32px] bg-[#FF1F1F]"></div>
              </div>
            </div>
          </div>

          {/* Product ID and Quantity */}
          <div className="flex flex-col gap-3">
            <p className="text-sm">
              Sku: <span>hdgfhdgf6756dsghgf7</span>
            </p>
            <div className="flex items-center gap-4">
              <p>Quantity :</p>
              <div className="flex gap-2 lg:gap-4 bg-[#F7F7F7] px-2 py-1 items-center">
                <button className="h-[30px] w-[30px] flex justify-center items-center text-xl font-medium bg-white rounded-md">
                  {" "}
                  -{" "}
                </button>
                <span>01</span>
                <button className="h-[30px] w-[30px] flex justify-center items-center font-medium bg-white rounded-md py-2text-xl">
                  {" "}
                  +{" "}
                </button>
              </div>
              <span className="text-[#F97316] text-xs">
                Only 46 pieces available
              </span>
            </div>
          </div>

          {/* Buy Button */}
          <div className="flex gap-4 pt-3">
            <button className="bg-[#F97316] w-[150px] h-[50px] text-white hidden lg:block">
              Buy Now
            </button>
            <button className="lg:flex bg-[#F97316] w-[150px] h-[50px] text-black items-center gap-2 justify-center hidden">
              <CiShoppingCart />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      {/* offer Image */}
      <img
        src={offerImage}
        alt=""
        className="absolute bottom-0 right-0 w-[267px] h-[330px] hidden lg:block"
      />
    </div>
  );
};

export default ContainerLeft;
