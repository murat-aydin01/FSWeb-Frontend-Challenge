function Header() {
  return (
    <header className="h-[150px] lg:h-[200px] w-full justify-between flex flex-col items-center lg:items-end ">
      <div className="w-[480px] h-[50px] flex justify-center lg:justify-end items-center lg:mt-[30px]">darkmode</div>
      <div className="w-full h-[50px] lg:h-[80px] flex justify-center items-center ">
      <div className="hidden h-full aspect-square rounded-full lg:flex items-center justify-center mr-auto bg-isim-yuvarlak-bg dark:bg-isim-yuvarlak-bg-dark ">
          <span className="text-isim-bg dark:text-isim-bg-dark font-semibold text-[32px]  rotate-45">
            MA
          </span>
        </div>
        <nav className="h-full w-[522px] flex justify-between items-center text-acik  font-medium text-[18px]">
          <a href="">Skills</a>
          <a href="">Projects</a>
          <a href="" className="px-5 py-2 border-2 border-acik-mor  rounded-lg text-acik-mor  dark:bg-white font-medium">Hire Me</a>
        </nav>
      </div>
    </header>
  );
}


export default Header;
