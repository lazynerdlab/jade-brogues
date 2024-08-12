import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/assets/images/logo-colored.png";
import { FaEnvelope, FaLocationDot, FaPhoneFlip } from "react-icons/fa6";
// import Logo from "@/public/assets/images/logo-white.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section>
      <footer className="text-white bg-jade-and-brogue-darkbg border-t border-gray-300">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          <div className="flex flex-col gap-10 max-w-[320px] col-span-2 lg:col-span-1">
            <Link href="" className="w-max">
              <Image src={Logo} width={270} height={35} alt="Logo" />
            </Link>
            <p className="text-sm font-normal text-white">
              Providing business services and solutions aligned with client
              business goals
            </p>
          </div>

          <div className="flex flex-col gap-8 font-normal col-span-2 sm:col-span-1">
            <p className="text-[20px]">Mauritius</p>
            <div className="flex flex-col gap-4 text-base text-white">
              <span className="flex gap-2">
                <span>
                  <FaLocationDot className="size-4 text-green-500" />
                </span>
                <p className="">
                  Chemin Vingt Pieds 5th Floor, La Croisette Grand Baie,
                  Mauritius
                </p>
              </span>
              <span className="flex gap-2 items-center">
                <span>
                  <FaPhoneFlip className="size-4 text-green-500" />
                </span>
                <Link
                  href="tel:(+230) 5900-1671"
                  className="hover:underline duration-150"
                >
                  (+230) 5900-1671
                </Link>
              </span>
              <span className="flex gap-2 items-center">
                <span>
                  <FaEnvelope className="size-4 text-green-500" />
                </span>
                <Link
                  href="mailto:info@jadeandbrogues.com"
                  className="hover:underline duration-150"
                >
                  info@jadeandbrogues.com
                </Link>
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-8 font-normal col-span-2 sm:col-span-1">
            <p className="text-[20px]">Nigeria</p>
            <div className="flex flex-col gap-4 text-base text-white">
              <span className="flex gap-2">
                <span>
                  <FaLocationDot className="size-4 text-green-500" />
                </span>
                <p className="">
                  No 10 Esomo close, off Toyin street, Ikeja Lagos.
                </p>
              </span>
              <span className="flex gap-2 items-center">
                <span>
                  <FaPhoneFlip className="size-4 text-green-500" />
                </span>
                <Link
                  href="tel:(+234) 802-500-9741"
                  className="hover:underline duration-150"
                >
                  (+234) 802-500-9741
                </Link>
              </span>
            </div>
          </div>

          {/* navigation */}
          {/* <div className="flex flex-col gap-8 font-normal w-max">
            <p className="text-[20px]">Navigation</p>
            <span className="flex flex-col gap-4 text-base text-white">
              <Link href="" className="hover:underline duration-150">
                Home
              </Link>
              <Link href="/services" className="hover:underline duration-150">
                Services
              </Link>
              <Link href="/contact" className="hover:underline duration-150">
                Contact Us
              </Link>
              <Link href="" className="hover:underline duration-150">
                FAQs
              </Link>
            </span>
          </div> */}

          {/* Links */}
          {/* <div className="flex flex-col gap-8 font-normal w-max">
            <p className="text-[20px]">Contact</p>
            <span className="flex flex-col gap-4 text-base text-white">
              <Link href="/about" className="hover:underline duration-150">
                Who we are
              </Link>
              <Link href="" className="hover:underline duration-150">
                Our Clients
              </Link>
              <Link href="" className="hover:underline duration-150">
                Blog
              </Link>
              <Link href="" className="hover:underline duration-150">
                Privacy Policy
              </Link>
              <Link href="" className="hover:underline duration-150">
                FAQs
              </Link>
            </span>
          </div> */}

          {/* newsletter */}
          <div className="flex flex-col gap-8 max-w-[352px] col-span-">
            <p className="text-[20px]">Newsletter</p>
            <div className="flex flex-col gap-4 text-base text-white">
              <p className="">
                Stay up to date with our latest news and updates.
              </p>
              <form className="flex">
                <input
                  type="text"
                  placeholder="Enter your email"
                  required
                  className="bg-transparent  border border-white text-white text-base px-[24px] py-[12px] w-full outline-none"
                />
                <button
                  title="Submit"
                  type="submit"
                  className="p-3 bg-white rounded-none hover:bg-white/90 active:scale-95 duration-200"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12Z"
                      fill="#1D3960"
                    />
                    <path
                      d="M18.9722 12C18.8789 11.8452 18.6833 11.5671 18.4695 11.3251C18.0437 10.8432 17.457 10.2928 16.8445 9.76105C16.237 9.23357 15.6265 8.74365 15.1661 8.38437C14.9365 8.20515 14.5402 7.90576 14.407 7.80521C13.9624 7.47768 13.8674 6.85173 14.1949 6.40706C14.5224 5.96236 15.1484 5.86736 15.5931 6.19487L15.5968 6.19767C15.7412 6.30672 16.1598 6.62291 16.3966 6.80767C16.8737 7.18002 17.5132 7.69303 18.1557 8.25084C18.7932 8.80434 19.4565 9.4216 19.9682 10.0008C20.2231 10.2892 20.4615 10.5918 20.6417 10.8906C20.8053 11.162 21.0001 11.5568 21.0001 12C21.0001 12.4431 20.8053 12.838 20.6417 13.1094C20.4615 13.4082 20.2231 13.7108 19.9682 13.9992C19.4565 14.5784 18.7932 15.1957 18.1557 15.7492C17.5132 16.307 16.8737 16.82 16.3966 17.1923C16.1598 17.3771 15.7415 17.6931 15.5971 17.8021L15.5931 17.8051C15.1484 18.1326 14.5224 18.0376 14.1949 17.5929C13.8674 17.1483 13.9624 16.5223 14.407 16.1948C14.5402 16.0942 14.9365 15.7948 15.1661 15.6156C15.6265 15.2564 16.237 14.7664 16.8445 14.2389C17.457 13.7072 18.0437 13.1568 18.4695 12.6749C18.6833 12.4329 18.8789 12.1548 18.9722 12Z"
                      fill="#1D3960"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </footer>

      {/* copyright */}
      <footer className="bg-[#1E2227] text-white px-6 py-3">
        {/* lg:h-[80px] */}
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 space-y-5 lg:space-y-0 lg:flex gap-4 lg:gap-8 justify-between items-center">
          <p className="py- text-center lg:text-start">
            © {currentYear}{" "}
            <Link href="" className="hover:text-[#00B2A9] duration-150">
              {" "}
              Jade and Brogues
            </Link>{" "}
            | All rights reserved
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
