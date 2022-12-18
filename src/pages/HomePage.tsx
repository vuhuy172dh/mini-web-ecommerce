import BlueChair from '../assets/images/BlueChair.png';
import SingleVase from '../assets/images/SingleVase.png';
import CeilingLamp from '../assets/images/CeilingLamp.png';

function HomePage() {
  return (
    <div className="w-full h-screen bg-brown_lighter relative">
      {/* background */}
      <div className="h-full w-full grid grid-cols-4 overflow-hidden absolute top-0 left-0 z-10">
        <div></div>
        <div className="w-full h-full flex justify-center items-end">
          <div className="bg-red h-[40%] w-[80%] relative after:w-[1px] after:h-[200%] after:-translate-y-full after:bg-blue_lighter after:absolute after:top-0 after:right-1">
            <img
              src={BlueChair}
              alt="blue-chair"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-end">
          <div className="bg-black h-[60%] w-[80%] relative after:w-[1px] after:h-full after:-translate-y-full after:bg-black after:absolute after:top-0 after:right-1">
            <img
              src={SingleVase}
              alt="single vase"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-start pt-[50%]">
          <div className="bg-blue h-[80%] w-[80%] relative after:w-[1px] after:h-full after:translate-y-full after:bg-blue_lighter after:absolute after:top-0 after:right-1">
            <img
              src={CeilingLamp}
              alt="Ceiling Lamp"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="ml-20 w-[30%] h-full relative z-20 -top-40 left-0 flex flex-col justify-center items-start gap-20">
        <div>
          <p className="text-[60px] leading-none mb-2">Mid Century</p>
          <p className="text-[60px] font-bold leading-none mb-10">
            Modern Furniture
          </p>
          <p className="font-thin text-[30px]">
            Modern high quality and comfortable available on our stores
          </p>
        </div>
        <button className="py-5 px-10 bg-red rounded-3xl text-[20px] text-white">
          Discover Now
        </button>
      </div>
    </div>
  );
}

export default HomePage;
