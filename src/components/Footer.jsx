import { useLanguage } from '../contexts/LanguageContext';

function Footer() {
  const { texts } = useLanguage();
  const { footer } = texts;

  return (
    <footer className="w-screen md:mt-[190px] mt-[50px] bg-footer-bg dark:bg-footer-bg-dark flex justify-center">
      <div className="w-4/5 md:mb-[175px] mb-[50px] flex flex-col items-center md:items-start">
        <div className="mt-[113px] text-center md:text-left">
          <h3 className="text-3xl md:text-5xl font-semibold text-koyu dark:text-koyu-dark max-w-lg">
            {footer.workTogether}
          </h3>
        </div>
        <div className="mt-[85px] flex flex-col md:flex-row justify-between items-center md:items-start w-full text-xl md:text-2xl font-medium text-email-kirmizi dark:text-email-kirmizi-dark">
          <a href={`mailto:${footer.email}`} className="mb-4 md:mb-0 text-center md:text-left">
            👉<span className="underline">{footer.email}</span>
          </a>
          <nav className="flex flex-col md:flex-row gap-y-4 md:gap-y-0 gap-x-6">
            <a href="" className="text-center md:text-left">{footer.personalBlog}</a>
            <a href="https://github.com/murat-aydin01/" className="text-git-yesil dark:text-git-yesil-dark text-center md:text-left">{footer.github}</a>
            <a href="https://www.linkedin.com/in/murat-aydin-1394b51ba" className="text-linkedin-mavi dark:text-linkedin-mavi-dark text-center md:text-left">{footer.linkedin}</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
