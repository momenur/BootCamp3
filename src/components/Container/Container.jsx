import Footer from "../Footer/Footer";
import ContainerLeft from "./ContainerLeft";

const Container = () => {
  return (
    <div className="p-2 bg-white">
      <div className="gap-4 md:flex ">
        <img
          className="w-[340px] lg:w-[450px] h-[373px] lg:h-[450px]"
          src="https://static-01.daraz.com.bd/p/683527dc719f64f9789562193714a5f3.jpg_750x750.jpg_.webp"
          alt=""
        />
        <div>
          <ContainerLeft />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Container;
