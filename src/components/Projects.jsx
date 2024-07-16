import project1 from "../assets/project1.png"
import project2 from "../assets/project2.png"
import project3 from "../assets/project3.png"
function Projects() {
  return (
    <section className="w-full  mt-[56px] flex flex-col">
      <div className="h-[1px] bg-cizgi mb-8 "></div>
      <h2 className="text-6xl font-semibold text-koyu  ">Projects</h2>
      <div className="w-full flex justify-between items-center mt-[45px] gap-x-[160px]">
        <div className="flex flex-col justify-between ">
          <img src={project1}/>
          <h3 className="text-4xl text-acik-mor font-medium my-6 ">Profile</h3>
          <p className="text-xl text-acik ">A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.</p>
          <nav className="w-full h-[36px] flex justify-start items-center my-6 gap-x-2">
            <a href="" className="h-full flex items-center px-6 py-2 border-2 border-koyu-mor text-koyu-mor font-medium text-lg rounded-md">React</a>
            <a href="" className="h-full flex items-center px-6 py-2 border-2 border-koyu-mor text-koyu-mor font-medium text-lg rounded-md">Redux</a>
            <a href="" className="h-full flex items-center px-6 py-2 border-2 border-koyu-mor text-koyu-mor font-medium text-lg rounded-md">Axios</a>
          </nav>
          <div className="flex justify-between items-center">
            <a href="" className="text-xl font-medium text-koyu-mor underline underline-offset-4">Github</a>
            <a href="" className="text-xl font-medium text-koyu-mor underline underline-offset-4">View Site</a>
          </div>
        </div>
        <div className="flex flex-col justify-between ">
          <img src={project2}/>
          <h3 className="text-4xl text-acik-mor font-medium my-6 ">Profile</h3>
          <p className="text-xl text-acik ">A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.</p>
          <nav className="w-full h-[36px] flex justify-start items-center my-6 gap-x-2">
            <a href="" className="h-full flex items-center px-6 py-2 border-2 border-koyu-mor text-koyu-mor font-medium text-lg rounded-md">React</a>
            <a href="" className="h-full flex items-center px-6 py-2 border-2 border-koyu-mor text-koyu-mor font-medium text-lg rounded-md">Redux</a>
            <a href="" className="h-full flex items-center px-6 py-2 border-2 border-koyu-mor text-koyu-mor font-medium text-lg rounded-md">Axios</a>
          </nav>
          <div className="flex justify-between items-center">
            <a href="" className="text-xl font-medium text-koyu-mor underline underline-offset-4">Github</a>
            <a href="" className="text-xl font-medium text-koyu-mor underline underline-offset-4">View Site</a>
          </div>
        </div>
        <div className="flex flex-col justify-between ">
          <img src={project3}/>
          <h3 className="text-4xl text-acik-mor font-medium my-6 ">Profile</h3>
          <p className="text-xl text-acik ">A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.</p>
          <nav className="w-full h-[36px] flex justify-start items-center my-6 gap-x-2">
            <a href="" className="h-full flex items-center px-6 py-2 border-2 border-koyu-mor text-koyu-mor font-medium text-lg rounded-md">React</a>
            <a href="" className="h-full flex items-center px-6 py-2 border-2 border-koyu-mor text-koyu-mor font-medium text-lg rounded-md">Redux</a>
            <a href="" className="h-full flex items-center px-6 py-2 border-2 border-koyu-mor text-koyu-mor font-medium text-lg rounded-md">Axios</a>
          </nav>
          <div className="flex justify-between items-center">
            <a href="" className="text-xl font-medium text-koyu-mor underline underline-offset-4">Github</a>
            <a href="" className="text-xl font-medium text-koyu-mor underline underline-offset-4">View Site</a>
          </div>
        </div>
      </div>
      </section>
  )
}

export default Projects