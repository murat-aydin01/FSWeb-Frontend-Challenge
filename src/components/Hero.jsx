import { useLanguage } from "../contexts/LanguageContext";

function Hero() {
  const { texts } = useLanguage();
  const { hero } = texts;
  return (
    <section className="w-full mt-[55px] lg:mt-[117px] flex flex-col md:flex-row justify-between items-center">
      <div className="w-full md:w-1/2 text-center md:text-left">
        <p className="font-medium text-acik-mor dark:text-acik-mor-dark text-[20px] md:text-[26px]">
          <span className="hidden lg:inline">—————</span> {hero.name}
        </p>
        <h1 className="mt-[20px] md:mt-[50px] text-koyu dark:text-koyu-dark text-4xl md:text-7xl font-bold">
          {hero.tagline}
        </h1>
        <p className="text-[18px] md:text-[24px] font-normal mt-[20px] md:mt-[50px] mr-0 md:mr-[50px] text-acik dark:text-acik-dark">
          {hero.introduction}
        </p>
        <nav className="mt-[30px] md:mt-[50px] h-auto md:h-[70px] w-full md:w-[560px] flex flex-col md:flex-row justify-center md:justify-between items-center text-koyu-mor dark:text-koyu-mor-dark font-medium text-[20px] md:text-[24px] gap-4 md:gap-0">
          <a href="" className="w-full md:w-auto h-full text-white dark:text-black rounded-lg bg-koyu-mor dark:bg-koyu-mor-dark px-6 py-2 md:px-10 flex items-center justify-center">
            {hero.hireMe}
          </a>
          <a href="https://github.com/murat-aydin01" className="w-full md:w-auto h-full rounded-lg border-2 border-koyu-mor dark:border-koyu-mor-dark px-6 py-2 md:px-4 flex items-center justify-center">
            <img src="/github.svg" alt="GitHub" className="mr-2" />{hero.github}
          </a>
          <a href="https://www.linkedin.com/in/murat-aydin-1394b51ba/" className="w-full md:w-auto h-full rounded-lg border-2 border-koyu-mor dark:border-koyu-mor-dark px-6 py-2 md:px-4 flex items-center justify-center">
            <img src="/LinkedIn.svg" alt="LinkedIn" className="mr-2" />{hero.linkedin}
          </a>
        </nav>
      </div>
      <div className="w-full md:w-2/5 mt-10 md:mt-0 flex justify-center md:justify-end">
        <img src="/murat.jpg" alt="Profile" className="w-full rounded-3xl h-auto md:w-auto" />
      </div>
    </section>
  );
}

export default Hero;
