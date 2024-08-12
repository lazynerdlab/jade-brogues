import Image from "next/image";
import Link from "next/link";
import { FadeUp } from "@/app/components/common";

const ContactCTA = () => {
  return (
    <section className="max-w-[1400px] mx-auto px-4 md:px-8 py-16 lg:py-24">
      <div>
        <div className="p-[50px] bg-jade-and-brogue-text max-w-[920px] mx-auto">
          <FadeUp>
            <span className="flex flex-col gap-8 justify-center items-center text-center">
              <h2 className="chakra font-semibold text-[45px] leading-none text-white">
                Partner with us for innovative solutions and unmatched expertise
              </h2>
              <Link
                href="/contact"
                className="px-7 py-3 w-max bg-white text-gray-800 text-center rounded-md shadow-md block active:scale-95 duration-200"
              >
                Contact
              </Link>
            </span>
          </FadeUp>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
