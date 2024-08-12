import Image from "next/image";
import Award1 from "@/public/assets/images/award-image-01.png";
import Award2 from "@/public/assets/images/award-image-02.png";
import Award3 from "@/public/assets/images/award-image-03.png";
import Client1 from "@/public/assets/images/client-01.jpg";
import Client2 from "@/public/assets/images/client-02.jpg";
import Client3 from "@/public/assets/images/client-03.jpg";
import Icon1 from "@/public/assets/svg/service-icon-01.svg";
import Rating from "@/public/assets/svg/rating-stars.svg";
import { PiBuildings } from "react-icons/pi";
import { IoWalletOutline } from "react-icons/io5";

export const Expertise = () => {
  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-24 text-jade-and-brogue-text">
        <div className="flex flex-col gap-12">
          <span className="flex flex-col gap-4 text-center justify-center items-center">
            <h2 className="chakra font-semibold text-[36px] md:lg:text-[40px] lg:text-[50px] leading-none">
              Precision expertise
            </h2>
            <p className="max-w-2xl">
              At Jade and Brogues, the norm is disruptive because we understand
              the need for your market to distinctively evolve above the
              business system threshold
            </p>
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="relative bg-white hover:bg-jade-and-brogue-primary duration-300 group p-[30px] flex flex-col gap-6">
              <div
                className="absolute hidden lg:block top-0 right-0 w-16 h-16 bg-[#f1f5fb]"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
              />

              <span className="size-[80px] rounded-full bg-[#f2f5fb] flex items-center justify-center">
                <PiBuildings className="size-[50px] text-jade-and-brogue-primary" />
              </span>
              <p className="text-[18px] lg:text-[22px] font-semibold leading-none text-jade-and-brogue-text chakra group-hover:text-white">
                Consultation & Advisory
              </p>
              <p className="text-jade-and-brogue-gray-text group-hover:text-white">
                Business growth acknowledges the essence of relatable models and
                adaptations for the sake of delivery efficacies.
              </p>
            </div>

            <div className="relative bg-white hover:bg-jade-and-brogue-primary duration-300 group p-[30px] flex flex-col gap-6">
              <div
                className="absolute hidden lg:block top-0 -right-[.5] w-16 h-16 bg-[#f1f5fb]"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
              />

              <span className="size-[80px] rounded-full bg-[#f2f5fb] flex items-center justify-center">
                <Image src={Icon1} alt="Icon1" />
              </span>
              <p className="text-[18px] lg:text-[22px] font-semibold leading-none text-jade-and-brogue-text chakra group-hover:text-white">
                Facilitation & Implementation
              </p>
              <p className="text-jade-and-brogue-gray-text group-hover:text-white">
                Providing necessary expertise technical or otherwise to
                adequately ensure proper facilitation of contract processes
                thereby in ensuring continuity assist in necessary
                implementation and completion of project as duly required.
              </p>
            </div>

            <div className="relative bg-white hover:bg-jade-and-brogue-primary duration-300 group p-[30px] flex flex-col gap-6">
              <div
                className="absolute hidden lg:block top-0 right-0 w-16 h-16 bg-[#f1f5fb]"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
              />

              <span className="size-[80px] rounded-full bg-[#f2f5fb] flex items-center justify-center">
                <IoWalletOutline className="size-[50px] text-jade-and-brogue-primary" />
              </span>
              <p className="text-[18px] lg:text-[22px] font-semibold leading-none text-jade-and-brogue-text chakra group-hover:text-white">
                Financing of Purchase Orders
              </p>
              <p className="text-jade-and-brogue-gray-text group-hover:text-white">
                Becoming your go to financial buddy on matters relating to
                executing purchase orders and providing top notch services as
                per-proposed to end user.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Awards = () => {
  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-24">
        <div className="p-[40px] relative min-h-[200px] text-white bg-jade-and-brogue-primary flex flex-col lg:flex-row gap-8 justify-between items-center">
          <div
            className="absolute top-0 left-0 w-16 h-16 bg-[#f1f5fb]"
            style={{ clipPath: "polygon(0 0, 0 100%, 100% 0)" }}
          />
          <h2 className="chakra font-semibold text-[20px] lg:text-[26px] leading-none text-center lg:text-start min-w-fit">
            Awards & Certificates:
          </h2>
          <span className="flex gap-8 justify-around items-center w-full">
            <Image src={Award1} alt="Award1" />
            <Image src={Award2} alt="Award2" />
            <Image src={Award3} alt="Award3" />
          </span>
        </div>
      </div>
    </section>
  );
};

export const Clients = () => {
  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-24 text-jade-and-brogue-text">
        <div className="flex flex-col gap-12">
          <h2 className="chakra font-semibold text-[36px] md:lg:text-[40px] lg:text-[50px] leading-none text-center">
            What our clients say
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="relative bg-white p-[40px] flex flex-col gap-6">
              <div
                className="absolute hidden lg:block top-0 right-0 w-16 h-16 bg-[#f1f5fb]"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
              />

              <Image src={Rating} alt="rating" />

              <p className="text-jade-and-brogue-text text-[18px]">
                Their experts were always available to provide guidance and
                support, ensuring our project&apos;s success. The level of
                professionalism and knowledge they bring to the table is truly
                impressive.
              </p>
              <span className="flex gap-4 items-center">
                <Image
                  src={Client1}
                  alt="client"
                  className="size-[70px] rounded-full"
                />
                <span className="flex flex-col gap-2">
                  <p className="text-[18px] lg:text-[22px] font-semibold leading-none text-jade-and-brogue-text chakra">
                    Amanda Reed
                  </p>
                  <p className="text-jade-and-brogue-gray-text">
                    Graphic designer
                  </p>
                </span>
              </span>
            </div>

            <div className="relative bg-white p-[40px] flex flex-col gap-6">
              <div
                className="absolute hidden lg:block top-0 right-0 w-16 h-16 bg-[#f1f5fb]"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
              />

              <Image src={Rating} alt="rating" />

              <p className="text-jade-and-brogue-text text-[18px]">
                They stay ahead of industry trends and provide solutions that
                are not only effective but also future-proof. Their dedication
                to quality and client satisfaction is evident in every
                interaction.
              </p>
              <span className="flex gap-4 items-center">
                <Image
                  src={Client2}
                  alt="client"
                  className="size-[70px] rounded-full"
                />
                <span className="flex flex-col gap-2">
                  <p className="text-[18px] lg:text-[22px] font-semibold leading-none text-jade-and-brogue-text chakra">
                    Joan Wallace
                  </p>
                  <p className="text-jade-and-brogue-gray-text">
                    UI\UX designer
                  </p>
                </span>
              </span>
            </div>

            <div className="relative bg-white p-[40px] flex flex-col gap-6">
              <div
                className="absolute hidden lg:block top-0 right-0 w-16 h-16 bg-[#f1f5fb]"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
              />

              <Image src={Rating} alt="rating" />

              <p className="text-jade-and-brogue-text text-[18px]">
                Their reliability and efficiency have consistently impressed us.
                They are our go-to for all our engineering needs, and their
                solutions have always delivered outstanding results.
              </p>
              <span className="flex gap-4 items-center">
                <Image
                  src={Client3}
                  alt="client"
                  className="size-[70px] rounded-full"
                />
                <span className="flex flex-col gap-2">
                  <p className="text-[18px] lg:text-[22px] font-semibold leading-none text-jade-and-brogue-text chakra">
                    Louis Ferguson
                  </p>
                  <p className="text-jade-and-brogue-gray-text">
                    Product designer
                  </p>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
