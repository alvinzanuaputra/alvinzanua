// import { FaLocationArrow } from "react-icons/fa6";
// import { socialMedia } from "@/data";
import { MdOutlineEmail, MdLocalPhone } from "react-icons/md";
import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";
// import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full py-20 pb-10" id="contact">
      <h1 className="heading text-center mx-6">
        Contact{" "}
        <span className="text-purple">Me</span>
      </h1>

      <div className="flex justify-center pt-28">
        <div className="text-center">
          {/* <div>
            <Image
              className="rounded-xl hover:scale-105 ease-in duration-300"
              src={ContactImg}
              alt="/"
            />
          </div> */}
          <div className="pb-36">
            <h2 className="py-2 text-blue-500 font-semibold">Alvin Zanua Putra</h2>
            <p className="font-semibold">Software Developer</p>
            <div className="">
            <p className="pt-4">
              I am available for freelance.
            </p>
            </div>
            <p className="pb-4">
              Contact me and let's talk.
            </p>
          </div>
          {/* SOCIAL MEDIA */}
          <div className="pt-8">
            <a href="https://wa.me/6281217835337" className="w-full">
              <div className="text-blue-500 text-md font-semibold flex justify-center items-center gap-1.5 mt-6 hover:scale-90 duration-500">
                <img src="/wha.svg" alt="whatsapp" width={20} height={20} />
                <p>Phone</p>
              </div>
              <p className="text-white font-semibold hover:scale-90 duration-500">+62 812 1783 5337</p>
            </a>

            <a href="https://www.linkedin.com/in/alvin-zanua-putra-34a758288" className="w-full">
              <div className="text-md font-semibold flex justify-center items-center gap-1.5 mt-6 hover:scale-90 duration-500">
                <BsLinkedin />
                <p className="text-blue-500">linkedin</p>
              </div>
              <p className="text-white font-semibold hover:scale-90 duration-500">Alvin Zanua Putra</p>
            </a>
            <a href="https://github.com/alvinzanuaputra" className="w-full">
              <div className="text-md font-semibold flex justify-center items-center gap-1.5 mt-6 hover:scale-90 duration-500">
                <BsGithub />
                <p className="text-blue-500">github</p>
              </div>
              <p className="text-white font-semibold hover:scale-90 duration-500">alvinzanuaputra</p>
            </a>

            <a href="https://instagram.com/znualvin_" className="w-full">
              <div className="text-md font-semibold flex justify-center items-center gap-1.5 mt-6 hover:scale-90 duration-500">
                <BsInstagram />
                <p className="text-blue-500">instagram</p>
              </div>
              <p className="text-white font-semibold hover:scale-90 duration-500">@znualvin_</p>
            </a>

            <a href="https://mail.google.com/mail/u/0/?tf=cm&fs=1&to=zanualvin06@gmail.com" className="w-full">
              <div className="text-md font-semibold flex justify-center items-center gap-1.5 mt-6 hover:scale-90 duration-500">
                <MdOutlineEmail />
                <p className="text-blue-500">Email</p>
              </div>
              <p className="text-white font-semibold hover:scale-90 duration-500">zanualvin06@gmail.com</p>
            </a>
          </div>
          {/* SOCIAL MEDIA END */}
        </div>
      </div>

      <div className="flex mt-40 justify-center">
        <p className="text-sm text-center md:font-normal mb-2 font-italic mx-20">
          Copyright © 2024 Alvin Zanua Putra. All rights reserved.
        </p>
        


        {/* <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
