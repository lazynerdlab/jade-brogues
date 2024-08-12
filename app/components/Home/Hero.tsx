import Image from "next/image";
import Link from "next/link";

import { FadeUp } from "@/app/components/common";
import HeroImage from "@/public/assets/images/hero-image.jpg";

const Hero = () => {
  return (
    <section className="bg-jade-and-brogue-primary lg:bg-transparent lg:bg-[url('/assets/svg/blue-vector-bg.svg')] relative bg-contain bg-no-repeat xl:-mt-20 min-h-[60vh] xl:min-h-[120vh]">
      <div className="xl:pt-48 pt-24 mx-auto max-w-[1400px] pb-12 px-4 items-center lg:flex md:px-8">
        <div className="flex flex-col gap-6 justify-between flex-1 lg:text-left">
          <span className="flex flex-col xl:flex-row gap-8 justify-between">
            <FadeUp>
              <h1 className="text-white font-semibold text-5xl lg:text-[80px] leading-none chakra max-w-[850px] w-full">
                Empowering <span className="font-normal">industry</span> with
                precision engineering
              </h1>
            </FadeUp>
            <p className="text-gray-300 max-w-xl w-full xl:max-w-xs xl:pt-8 xl:text-right font-medium">
              Explore cutting-edge solutions tailored for excellence in
              manufacturing. At your company, we fuse innovative technology with
              industry expertise.
            </p>
          </span>
          <div className="lg:pt-10 pt-5 items-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
            <Link
              href="/services"
              className="px-7 py-3 w-max bg-white text-gray-800 text-center rounded-md shadow-md block sm:w-auto active:scale-95 duration-200"
            >
              Discover our Solutions
            </Link>
          </div>

          <FadeUp>
            <span className="pt-12 lg:pt-28 xl:pt-40 flex flex-col gap-4">
              <h2 className="font-semibold chakra text-2xl text-white lg:text-black">
                Our mission
              </h2>
              <p className="text-gray-200 lg:text-gray-500 lg:max-w-sm max-w-xl">
                To provide unparalleled consultancy and project management
                services that drive business success and growth, leveraging
                extensive experience and a deep understanding of the African
                market.
              </p>
            </span>
          </FadeUp>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 hidden xl:block">
        <Image
          src={HeroImage}
          width={870}
          height={534}
          // className="w-full mx-auto sm:w-10/12  lg:w-full"
          alt="hero image"
        />
      </div>
    </section>
  );
};

export default Hero;
