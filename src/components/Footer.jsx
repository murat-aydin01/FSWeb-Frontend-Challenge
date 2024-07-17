function Footer() {
  return (
    <footer className="w-screen md:mt-[190px] mt-[50px] bg-footer-bg dark:bg-footer-bg-dark flex justify-center">
      <div className="w-4/5 md:mb-[175px] mb-[50px] flex flex-col items-center md:items-start">
        <div className="mt-[113px] text-center md:text-left">
          <h3 className="text-3xl md:text-5xl font-semibold text-koyu dark:text-koyu-dark max-w-lg">
            Let’s work together on your next product.
          </h3>
        </div>
        <div className="mt-[85px] flex flex-col md:flex-row justify-between items-center md:items-start w-full text-xl md:text-2xl font-medium text-email-kirmizi dark:text-email-kirmizi-dark">
          <a href="" className="mb-4 md:mb-0 text-center md:text-left">
            👉<span className="underline">murataydin2001@outlook.com</span>
          </a>
          <nav className="flex flex-col md:flex-row gap-y-4 md:gap-y-0 gap-x-6">
            <a href="" className="text-center md:text-left">Personal Blog</a>
            <a href="" className="text-git-yesil dark:text-git-yesil-dark text-center md:text-left">Github</a>
            <a href="" className="text-linkedin-mavi dark:text-linkedin-mavi-dark text-center md:text-left">Linkedin</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
