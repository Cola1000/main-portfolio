import Position from "./Position";
import WaterRippleCanvas from "./WaterRipple";

const Hero = ({ scrollContainer }) => {
  return (
    <section className="parallax bg-black relative">
      <WaterRippleCanvas />
      <div className='w-full px-6 sm:px-16 lg:px-24 xl:px-32 2xl:px-40 flex flex-col lg:flex-row items-center lg:items-start gap-8 relative' style={{ zIndex: 1 }}>
        <div className="flex-1">
          <h1 className='font-medium text-white text-[32px] xs:text-[40px] sm:text-[56px] md:text-[64px] lg:text-[80px] 2xl:text-[120px] leading-tight -webkit-text-stroke-color:black -webkit-text-stroke-width:5px mb-4'>
            Hello, I'm
          </h1>
          <Position />
        </div>
        <div className="flex-1 flex justify-start lg:justify-end">
          <div className='font-bold text-[16px] sm:text-[24px] md:text-[28px] 2xl:text-[36px] leading-relaxed streaky-glow max-w-sm 2xl:max-w-lg text-white'>
            I love building clean, scalable systems while blending technology with creativity.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
