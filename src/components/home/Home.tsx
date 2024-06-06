import { image } from ".";
import user from "../../assets/images/gamer 1.png";
import star from "../../assets/images/Group 6.png";


export default function Home() {
  return (
    <section className="max-w-[1440px] max-sm:grid lg:flex  justify-between  ">
      {/* {first box} */}
      <div className="max-w-[720px] text-white  p-4  ">
        <h1 className=" text-[30px] max-md:text-[50px] lg:text-[90px] font-semibold  ">
          Red Flower Ice-cream
        </h1>
        <p className="lg:text-[24px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="grid lg:flex  items-center mt-5 gap-8 ">
          <button className="btn max-sm:w-full max-md:w-full border-[1px] border-white capitalize rounded-md">
            order now
          </button>
          <button className="btn max-sm:w-full max-md:w-full backdrop-blur-[10px] bg-black/30 rounded-md capitalize">
            book now
          </button>
        </div>
      </div>
      {/* {second box} */}
      <div className="max-w-[500px] px-10    ">
        {/* {box for the gamer info} */}
        <div className="w-full h-auto bg-white px-5 py-5 rounded-md">
          <div className="w-full flex gap-5 ">
            <img src={user} alt="" />
            <div>
              <p>Uzi Nexus</p>
              <img src={star} alt="" />
            </div>
          </div>
          <p className="pt-5 lg:text-xl">
            Indulge in frozen bliss with our irresistible ice cream delights!
          </p>
        </div>

        <div className="w-full h-auto mt-5 text-white px-2 ">
          <p>choose type</p>
          {/* {images displayed} */}
          <div className="w-full flex mt-5">
            {image.map((item, index) => (
              <div className="w-full flex " key={index}>
                <div className="w-[70px] h-[70px] backdrop-blur-[10px] bg-white/20 flex items-center justify-center rounded-md">
                  <img
                    src={item.pic}
                    alt="pictues"
                    className="w-10 h-10 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </section>
  );
}
