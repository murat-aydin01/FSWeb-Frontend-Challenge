import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Profile from "./components/Profile"
import Projects from "./components/Projects"
import Skills from "./components/Skills"

function App() {

  return (
    <>
    <div className="max-w-[1520px] flex flex-col items-center mx-auto   ">
      <Header/>
      <Hero/>
      <Skills/>
      <Profile/>
      <Projects/>
      <Footer/>
      </div>
    </>
  )
}

export default App
