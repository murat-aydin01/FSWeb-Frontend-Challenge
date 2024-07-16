function Header() {
  return (
    <header className="h-[200px] w-full justify-between flex flex-col items-end ">
      <div className="w-[480px] h-[50px] mt-[30px]">darkmode</div>
      <div className="w-full h-[80px] flex items-center ">
      <div className="h-full aspect-square rounded-full flex items-center justify-center bg-[#EEEBFF]  mr-auto">
          <span className="text-[#7B61FF] font-semibold text-[32px]  rotate-45">
            MA
          </span>
        </div>
        <nav className="h-[70px] w-[522px] flex justify-between items-center text-acik font-medium text-[24px]">
          <a href="">Skills</a>
          <a href="">Projects</a>
          <a href="" className="px-4 py-2 border border-acik-mor rounded-md text-acik-mor">Hire Me</a>
        </nav>
      </div>
    </header>
  );
}


export default Header;
