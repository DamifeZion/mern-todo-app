import {
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white flex flex-col justify-center ">
      <div className="container py-8 px-4 max-w-[--max-width] mx-auto">
        <div className="flex flex-wrap justify-center">
          <div className="w-full flex flex-col gap-2 text-[.8rem] lgsm:w-auto mb-6 lgsm:mb-0 lgsm:text-[1rem]">
            <h4 className="text-xl font-bold">Contact</h4>
            <p className="mt-4">Zion Address</p>
            <p>Surulere, Lagos, Nigeria</p>
            <p className="mt-4">Email: damifeolaleye@gmail.com</p>
            <p className=" flex items-center">
              WhatsApp
              <FaWhatsapp className="text-md ml-1 text-[#25D366]" />:
              +234-814-2500-816
            </p>
            <p className=" flex items-center">
              Phone
              <FaPhone className="text-xsm ml-1" />: +234-807-6568-689
            </p>
          </div>

          <div className="w-full md:w-auto mb-6 sm:mb-0 lgsm:w-auto">
            <h4 className="text-xl font-bold">Follow Us</h4>
            <div className="flex mt-4">
              <a
                target="blank"
                href="https://github.com/DamifeZion"
                className="mr-4"
              >
                <FaGithub className="text-white text-2xl" />
              </a>
              <a
                target="blank"
                href="https://www.linkedin.com/in/damife-zion/"
                className="mr-4"
              >
                <FaLinkedinIn className="text-white text-2xl" />
              </a>
              <a
                target="blank"
                href="https://twitter.com/DamifeZion"
                className="mr-4"
              >
                <FaTwitter className="text-white text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 py-4 text-[.8rem] lgsm:text-[1rem]">
        <div className="container mx-auto text-center">
          <p>
            &copy; {new Date().getFullYear()} Task.flow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
