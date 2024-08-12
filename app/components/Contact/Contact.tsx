import { BaseLayout } from "@/app/_layouts";
import Link from "next/link";
import { FadeUp } from "@/app/components/common";

const Contact = () => {
  return (
    <BaseLayout>
      <section className="min-h-screen">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-20 flex flex-col gap-16">
          <FadeUp>
            <span className="flex flex-col gap-3">
              <h2 className="chakra font-semibold text-[40px] md:lg:text-[54px] lg:text-[64px] leading-none text-jade-and-brogue-text">
                Contact
              </h2>
              <p className="text-[18px] text-jade-and-brogue-gray-text font-medium">
                Any questions or remarks? Just write us a message
              </p>
            </span>
          </FadeUp>

          <div className="grid lg:grid-cols-2 bg-white relative">
            <div className="relative bg-jade-and-brogue-primary px-[30px] lg:px-[60px] py-[60px] flex flex-col gap-10 text-white">
              <div
                className="absolute top-0 right-0 w-16 h-16 bg-white"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
              />

              <span className="flex flex-col gap-4">
                <h2 className="chakra font-semibold text-[40px] md:lg:text-[54px] lg:text-[64px] leading-none">
                  Get in touch
                </h2>
                <p className="text-gray-300 font-medium">
                  If you&apos;ve got questions or ideas you would like to share,
                  send a message. For anything more specific, please use one of
                  the addresses listed below.
                  {/* Reach out via our contact form or use the details. We&apos;re here
                  to help! */}
                </p>
              </span>

              <div className="grid sm:grid-cols-2 gap-12">
                <span className="flex flex-col gap-4">
                  <p className="text-lg font-medium">Jade and Brogues</p>
                  <span className="flex flex-col gap-6">
                    <p className="text-sm text-gray-300">
                      No 10 Esomo close, off Toyin street, Ikeja, Lagos.
                    </p>
                    <p className="text-sm text-gray-300">
                      Chemin Vingt Pieds 5th Floor, La Croisette Grand Baie,
                      Mauritius
                    </p>
                  </span>
                </span>

                <span className="flex flex-col gap-4">
                  <p className="text-lg font-medium">Telephone</p>
                  <span className="flex flex-col gap-6">
                    <Link
                      href="tel:+234 802-500-9741"
                      className="text-sm text-gray-300"
                    >
                      +234 802-500-9741
                    </Link>
                    <Link
                      href="tel:+230 5900-1671"
                      className="text-sm text-gray-300"
                    >
                      +230 5900-1671
                    </Link>
                  </span>
                </span>
              </div>

              <span className="flex flex-col gap-4">
                <p className="text-lg font-medium">Our Email</p>
                <Link
                  href="mailto:info@jadeandbrogues.com"
                  className="hover:underline duration-150 w-max text-sm text-gray-300"
                >
                  info@jadeandbrogues.com
                </Link>
              </span>
            </div>

            <form className="px-4 py-[60px] md:p-[60px] flex flex-col gap-6">
              <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 justify-between">
                <span className="flex flex-col gap-2">
                  <label
                    htmlFor="first_name"
                    className="text-jade-and-brogue-gray-text font-medium lg:text-[18px]"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    required
                    className="bg-[#f2f5fb] px-[20px] py-[10px] focus:bg-white"
                  />
                </span>

                <span className="flex flex-col gap-2">
                  <label
                    htmlFor="last_name"
                    className="text-jade-and-brogue-gray-text font-medium lg:text-[18px]"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    required
                    className="bg-[#f2f5fb] px-[20px] py-[10px] focus:bg-white"
                  />
                </span>
              </div>

              <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 justify-between">
                <span className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-jade-and-brogue-gray-text font-medium lg:text-[18px]"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="bg-[#f2f5fb] px-[20px] py-[10px] focus:bg-white"
                  />
                </span>

                <span className="flex flex-col gap-2">
                  <label
                    htmlFor="phone"
                    className="text-jade-and-brogue-gray-text font-medium lg:text-[18px]"
                  >
                    Mobile number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="bg-[#f2f5fb] px-[20px] py-[10px] focus:bg-white"
                  />
                </span>
              </div>

              <span className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-jade-and-brogue-gray-text font-medium lg:text-[18px]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="bg-[#f2f5fb] px-[20px] py-[10px] h-48 focus:bg-white"
                />
              </span>

              <button
                type="submit"
                className="bg-jade-and-brogue-primary px-8 py-4 w-max text-white font-medium md:text-[18px] active:scale-95"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
};

export default Contact;
