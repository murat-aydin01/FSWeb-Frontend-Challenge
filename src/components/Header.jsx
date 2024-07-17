function Header() {
  return (
    <header className="h-[200px] w-full justify-between flex flex-col items-end ">
      <div className="w-[480px] h-[50px] mt-[30px]">darkmode</div>
      <div className="w-full h-[80px] flex items-center ">
      <div className="h-full aspect-square rounded-full flex items-center justify-center mr-auto bg-isim-yuvarlak-bg dark:bg-isim-yuvarlak-bg-dark ">
          <span className="text-isim-bg dark:text-isim-bg-dark font-semibold text-[32px]  rotate-45">
            MA
          </span>
        </div>
        <nav className="h-[70px] w-[522px] flex justify-between items-center text-acik  font-medium text-[24px]">
          <a href="">Skills</a>
          <a href="">Projects</a>
          <a href="" className="px-10 py-4 border-2 border-acik-mor  rounded-lg text-acik-mor  dark:bg-white font-medium">Hire Me</a>
        </nav>
      </div>
    </header>
  );
}


export default Header;
