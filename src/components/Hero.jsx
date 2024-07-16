import github from "../assets/github.svg"
import LinkedIn from "../assets/LinkedIn.svg"
import image1 from "../assets/image1.png"
function Hero() {
  return (
    <section className="w-full  mt-[117px] flex justify-between items-center">
      <div className="w-1/2">
        <p className="font-medium text-acik-mor text-[26px]">
          ————— Murat AYDIN
        </p>
        <h1 className="mt-[50px] text-koyu text-7xl font-bold">
          Creative thinker Minimalism lover
        </h1>
        <p className="text-[24px] font-normal mt-[50px] mr-[50px] text-acik ">
          Hi, I’m Almila. I’m a full-stack developer. If you are looking for a
          Developer who to craft solid and scalable frontend products with great
          user experiences. Let’s shake hands with me.
        </p>
        <nav className="mr-[177px] mt-[50px] h-[70px] w-[560px] flex justify-between items-center text-koyu-mor font-medium text-[24px] ">
          <a href="" className="h-full text-white rounded-lg bg-koyu-mor px-4 flex items-center ">Hire Me</a>
          <a href="" className="h-full  border rounded-lg border-koyu-mor px-4 flex items-center  "><img src={github}/>Github</a>
          <a href="" className="h-full  border rounded-lg border-koyu-mor px-4 flex items-center  "><img src={LinkedIn}/>Linkedin</a>
        </nav>
      </div>
      <div className="w-2/5">
      <img src={image1} className="aspect-auto  "/>
      </div>
    </section>
  );
}

export default Hero;
