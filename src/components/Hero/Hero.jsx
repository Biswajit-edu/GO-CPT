import React from "react";
import Hero1 from "./Hero1/Hero1";
import Hero2 from "./Hero2/Hero2";
import Hero3 from "./Hero3/Hero3";
import Hero4 from "./Hero4/Hero4";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div class=" flex-auto hero bg-[#5B6AAA] overflow-hidden">
         <Hero1/>
         <Hero2 class=""/>
         <Hero3/>
         <Hero4/>
      </div>
      {/* <svg width="1920" height="7980" viewBox="0 0 1920 7980" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="1920" height="7980" fill="#5B6AAA"/>
</svg> */}
    </>
  );
};

export default Hero;
