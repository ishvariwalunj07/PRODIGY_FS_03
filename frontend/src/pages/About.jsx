import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewLetterBox from '../components/NewLetterBox';
import API from "../api";


const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            At ZYNK, fashion isn’t just something we wear — it’s a language, an
            attitude, and a reflection of who we are. We believe that true style
            is timeless, effortless, and boldly individual.At the heart of our
            brand lies a commitment to quality, creativity, and customer
            experience.
          </p>
          <p>
            Our journey began with a simple idea: to create clothing that blends
            modern trends with everyday comfort. Today, we bring you a curated
            collection designed for those who love to express themselves through
            fashion.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>We are committed to delivering high-quality, trend-forward, and comfortable fashion that empowers you to express your true self — effortlessly and boldly.</p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
        
      <div className="flex flex-col md:flex-row text-sm mb-20">
           <div className="border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
              <b>Quality Assurance:</b>
              <p className="text-gray-600">At ZYNC, quality is not just a promise — it’s our foundation. Every product we create goes through a rigorous quality-check process, ensuring that what reaches you is crafted with precision, care, and durability.</p>
           </div>
            <div className="border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
              <b>Convenience:</b>
              <p className="text-gray-600">At ZYNC, we believe shopping should be simple, smooth, and stress-free. That’s why we’ve created a seamless experience — from browsing to checkout — designed around your comfort.</p>
           </div>
             <div className="border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
              <b>Exceptional Customer Service:</b>
              <p className="text-gray-600">At ZYNC, we believe great fashion deserves great service. Our customer-first approach ensures that your experience with us is as smooth and satisfying as the products we offer.</p>
           </div>
       </div>

       <NewLetterBox/>

    </div>
  );
};

export default About;
