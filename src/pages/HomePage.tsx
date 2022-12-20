import BlueChair from '../assets/images/BlueChair.png';
import SingleVase from '../assets/images/SingleVase.png';
import CeilingLamp from '../assets/images/CeilingLamp.png';
import feature2 from '../assets/images/features2.png';
import feature3 from '../assets/images/features3.png';

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

      <div className="grid grid-cols-2 mx-auto">
        {/* Feature 1 */}
        <div className="w-full h-screen">
          <div className="mt-12 mb-9 px-28 pt-20 ">
            <div className="text-6">
              From a studio in London to a global brand with over 400 outlets
            </div>
            <p className="mt-3 text-body-md">
              When we started Avion, the idea was simple. Make high quality
              furniture affordable and available for the mass market. <br />{' '}
              <br />
              Handmade, and lovingly crafted furniture and homeware is what we
              live, breathe and design so our Chelsea boutique become the hotbed
              for the London interior design community.
            </p>
            <div className="flex w-2/5 mt-48 ">
              <button>Get In Touch</button>
            </div>
          </div>
        </div>

        {/* feature 2 */}
        <div>
          <img
            src={feature2}
            alt="feature2"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Feature 3 */}
        <div>
          <img
            src={feature3}
            alt="feature1"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Feature 4*/}
        <div className="w-full h-screen">
          <div className="mt-12 mb-9 px-28 pt-20">
            <div className="text-6 ">
              Our service isn’t just personal, it’s actually hyper personally
              exquisite
            </div>
            <p className="text-body-md mt-3">
              When we started Avion, the idea was simple. Make high quality
              furniture affordable and available for the mass market. <br />
              <br /> Handmade, and lovingly crafted furniture and homeware is
              what we live, breathe and design so our Chelsea boutique become
              the hotbed for the London interior design community.
            </p>
            <div className="flex w-2/5 mt-48 ">
              <button>Get in touch</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
