"use client";

import Image from "next/image";

import ServiceHero from "@/public/assets/images/service-hero-image.jpg";
import { FadeUp } from "@/app/components/common";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <section className="relative min-h-[60vh] lg:min-h-[70vh] xl:min-h-screen bg-transparent">
      <div className="py-24 mx-auto max-w-[1400px] px-4 md:px-8 flex flex-col gap-8 lg:gap-16">
        <FadeUp>
          <div className="flex flex-col gap-6 lg:flex-1 w-full lg:max-w-screen-sm">
            <h1 className="text-jade-and-brogue-text font-semibold text-5xl lg:text-[60px] leading-none chakra max-w-screen-xl w-full">
              Elevate your business with our expert services
            </h1>
            <p className="text-gray-500 max-w-2xl leading-relaxed font-medium text-lg">
              With a deep-rooted presence in the African business market, Jade &
              Brogues offers extensive experience in managing complex projects
              and providing solutions tailored to the unique challenges of the
              region. Their team comprises seasoned professionals with a robust
              understanding of industry dynamics and regulatory landscapes
              {/* Discover our comprehensive suite of services designed to propel
              your business forward. From innovative technology integration to
              strategic consulting, our expert team is dedicated to delivering
              solutions that drive success and growth. */}
            </p>
          </div>
        </FadeUp>

        <div className="flex flex-col sm:flex-row gap-12 lg:justify-between lg:max-w-screen-sm">
          <span className="flex flex-col gap-2">
            <h2 className="text-[24px] lg:text-[36px] leading-none text-jade-and-brogue-text chakra font-semibold">
              <CountUp end={5} duration={2} /> Million
            </h2>
            <p className="text-jade-and-brogue-gray-text lg:text-[18px] font-medium">
              Units produced annually
            </p>
          </span>
          <span className="flex flex-col gap-2">
            <h2 className="text-[24px] lg:text-[36px] leading-none text-jade-and-brogue-text chakra font-semibold">
              <CountUp end={92} duration={3} />%
            </h2>
            <p className="text-jade-and-brogue-gray-text lg:text-[18px] font-medium">
              Increase in production efficiency
            </p>
          </span>
        </div>

        <div className="flex-1 text-center mt-7 xl:mt-0 lg:ml-3">
          <Image
            src={ServiceHero}
            alt="Service hero image"
            className="w-full mx-auto lg:w-full block xl:hidden"
          />
        </div>
      </div>

      <div className="xl:block hidden absolute top-0 right-0">
        <Image
          src={ServiceHero}
          alt="Service hero image"
          className="lg:size-[572px] xl:size-[630px] 2xl:size-[702px]"
        />
      </div>
    </section>
  );
};

export default Hero;
