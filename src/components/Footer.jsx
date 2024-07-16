function Footer() {
  return (
    <footer className="w-screen mt-[190px]  bg-[#f9f9f9] flex justify-center">
      <div className="w-[1520px] mb-[175px] flex flex-col">
        <div className=" mt-[113px] ">
          <h3 className="text-5xl font-semibold text-koyu max-w-lg ">Let’s work together on your next product.</h3>
        </div>
        <div className="mt-[85px] flex justify-between text-2xl font-medium text-[#AF0C48] ">
          <a href="">👉<span className="underline">murataydin2001@outlook.com</span></a>
          <nav className="flex gap-x-6">
            <a href="" >Personal Blog</a>
            <a href="" className="text-[#00AB6B]">Github</a>
            <a href="" className="text-[#0077B5]">Linkedin</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer