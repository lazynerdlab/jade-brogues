import Image from "next/image";
import { FadeUp } from "@/app/components/common";

import AboutImage from "@/public/assets/images/about-image.jpg";

const About = () => {
  return (
    <section className="max-w-[1400px] mx-auto px-4 md:px-8 py-16 lg:py-24">
      <div className="flex flex-col lg:flex-row gap-y-8">
        <div className="flex-1">
          <Image
            src={AboutImage}
            alt="About Image"
            className="lg:max-w-[679px]"
          />
        </div>

        <FadeUp>
          <div className="flex flex-col gap-8 flex-1py-[50px] lg:py-0 lg:px-[50px] text-gray-600">
            <h2 className="chakra font-semibold text-[45px] leading-none text-gray-800">
              Unraveling the tale of industry growth and achievements
            </h2>

            <span className="flex flex-col gap-6">
              <p>
                Jade and Brogues has its experience rooted in providing advisory
                and business management consultations majorly in the oil and gas
                sector. Drilling, manpower and special services mainly for
                Offshore Projects, with J&B offering consultations, business
                solutions and strategic partnership that will ensure execution
                and milestone achievements
              </p>
              <p>
                <b>VISION</b> To be the foremost consultancy and project
                management firm, recognized for our commitment to excellence,
                innovation, and client satisfaction.
              </p>
            </span>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default About;
