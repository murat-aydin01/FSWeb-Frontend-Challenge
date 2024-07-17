function Footer() {
  return (
    <footer className="w-screen mt-[190px]  bg-footer-bg dark:bg-footer-bg-dark flex justify-center">
      <div className="w-[1520px] mb-[175px] flex flex-col">
        <div className=" mt-[113px] ">
          <h3 className="text-5xl font-semibold text-koyu dark:text-koyu-dark max-w-lg ">Let’s work together on your next product.</h3>
        </div>
        <div className="mt-[85px] flex justify-between text-2xl font-medium text-email-kirmizi dark:text-email-kirmizi-dark">
          <a href="">👉<span className="underline">murataydin2001@outlook.com</span></a>
          <nav className="flex gap-x-6">
            <a href="" >Personal Blog</a>
            <a href="" className="text-git-yesil dark:text-git-yesil-dark">Github</a>
            <a href="" className="text-linkedin-mavi dark:text-linkedin-mavi-dark">Linkedin</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer