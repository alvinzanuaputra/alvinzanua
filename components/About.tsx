// import { gridItems } from "@/data";
// import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import Image from "next/image";

const Grid = () => {
  const pdfUrl = './assets/CV/CV-ALVIN.pdf';
  const openPdfInNewTab = () => {
    window.open(pdfUrl, '_blank');
  };
  return (
    <section id="about" className="pt-20">
        <h1 className="heading mt-12 md:text-center lg:text-left text-center">
          About{" "}
          <span className="text-purple">Me</span>
        </h1>
      <div className="flex items-center">

        <div className="flex md:justify-center lg:justify-left justify-center">
          <h2 className="text-center lg:text-left">I am currently pursuing my undergraduate degree in Informatics Engineering at the Sepuluh Nopember Institute of Technology, specializing in software and hardware programming. My passion lies in the intricacies of IT systems, and I am dedicated to achieving set targets in this field. Furthermore, I recognize the importance of building a robust professional network, and I am eager to expand my connections within the Information Technology domain, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, atque.
            <div className="mt-8 md:mt-1 lg:justify-start flex justify-center items-center">
              <button
                onClick={openPdfInNewTab}
              >
                <MagicButton
                  title="DOWNLOAD CV"
                  icon={<FaLocationArrow />}
                  position="right"
                />
              </button>
            </div>
          </h2>
        </div>
        <Image
          src="/profile.jpg"
          alt="profile"
          width={400}
          height={1200}
          className="lg:block hidden ml-12" />



        {/* <BentoGrid className="w-full py-20">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid> */}
      </div>
    </section>
  );
};

export default Grid;
