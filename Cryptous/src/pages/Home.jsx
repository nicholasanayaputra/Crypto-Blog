import React from "react";

const Home = () => {
  return (
    <section className="pt-[52px] px-4 lg:px-[135px] ">
      <div className="container mx-auto lg:grid lg:grid-cols-12 lg:mt-[50px]">
        <div className="text-center lg:text-start lg:col-span-8 ">
          <h1 className="font-bold text-2xl text-white mb-[13px] lg:text-[60px] leading-snug ">
            Make better businees with Cryptocurrency
          </h1>
          <p className="text-white font-normal text-lg opacity-90 lg:hidden">
            We offers users a fully operational long-term rental platform. It
            plans to leverages blockchain technology.
          </p>
          <button className="text-white py-[7px] px-[14px] bg-orange rounded-full mt-[27px] ">
            Get Whitelisted
          </button>
        </div>
        <div className="lg:col-span-4 hidden lg:block">
          <div>
            <img src="/src/assets/hero.svg" alt="" className="w-[500px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
