// import { FaLocationArrow } from "react-icons/fa6";

// import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Link from "next/link";
import { BsCaretDown } from "react-icons/bs";
import { animate } from "framer-motion";

const Hero = () => {
  return (
    <div className="pb-20 pt-36 mx-16">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <TextGenerateEffect
            words="Hello, welcome to my landing profile"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Scroll Down For More  
          </p>
          <div>
            <Link href='/#about'>
              <div>
                <BsCaretDown className={`text-xl mx-auto ${animate ? 'animate-bounce' : 'anime'} text-[#00c3ff]`} />
                <BsCaretDown className={`text-xl mx-auto ${animate ? 'animate-bounce' : 'anime'} text-[#00c3ff]`} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;


























// import { Spotlight } from "./ui/Spotlight";
// import { TextGenerateEffect } from "./ui/TextGenerateEffect";
// "use client";
// import React, { useState, useEffect } from 'react';
// import { BsCaretDown } from 'react-icons/bs';
// import Link from 'next/link';

// const Hero = () => {
//   const [animate, setAnimate] = useState(false);

//   // useEffect to trigger animation on component mount
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 100) { // Example threshold for triggering animation
//         setAnimate(true);
//       } else {
//         setAnimate(false);
//       }
//     };

//     // Attach scroll event listener
//     window.addEventListener('scroll', handleScroll);

//     // Clean up function
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []); // Empty dependency array ensures this effect runs only on mount

//   return (
//     <div id='home' className="pb-20 pt-36">
//       <div className="flex justify-center relative my-20 z-10">
//         <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
//           <TextGenerateEffect
//             words="Hello, welcome to my landing profile"
//             className="text-center mx-16 text-[40px] md:text-5xl lg:text-6xl"
//           />
//           <Spotlight
//             className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
//             fill="white"
//           />
//           <Spotlight
//             className="h-[80vh] w-[50vw] top-10 left-full"
//             fill="purple"
//           />
//           <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
//         </div>
//         <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
//           Scroll Down For More
//         </p>
//         <div>
//           <Link href='/#about'>
//             <div>
//               <BsCaretDown className={`text-xl mx-auto ${animate ? 'animate-bounce' : ''} text-[#00c3ff]`} />
//               <BsCaretDown className={`text-xl mx-auto ${animate ? 'animate-bounce' : ''} text-[#00c3ff]`} />
//             </div>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
