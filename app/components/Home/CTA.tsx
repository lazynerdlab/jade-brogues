import Image from "next/image";
import Link from "next/link";
import { FadeUp } from "@/app/components/common";

import CTAImage from "@/public/assets/images/cta-image.jpg";

const CTA = () => {
  return (
    <section className="max-w-[1400px] mx-auto px-4 md:px-8 py-16 lg:py-24">
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col justify-center flex-1 p-[50px] bg-jade-and-brogue-primary">
          {/* p-[100px] */}
          <FadeUp>
            <span className="flex flex-col gap-6">
              <h2 className="chakra font-semibold text-[45px] leading-none text-white">
                Ready to elevate your manufacturing processes?
              </h2>
              <Link
                href="/services"
                className="px-7 py-3 w-max bg-white text-gray-800 text-center rounded-md shadow-md block active:scale-95 duration-200"
              >
                Discover our Solutions
              </Link>
            </span>
          </FadeUp>
        </div>

        <div className="flex-1 relative">
          <Image src={CTAImage} alt="CTA Image" className="lg:max-w-[679px]" />
          <div className="bg-white/5 absolute inset-0" />
        </div>
      </div>
    </section>
  );
};

export default CTA;
