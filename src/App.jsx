import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Profile from "./components/Profile"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {
  
  return (
    <>
    <ToastContainer />
    <div className=" dark:bg-body-dark" id="toggleDarkMode">
    <div className="w-4/5 flex flex-col items-center mx-auto  ">
      <Header/>
      <Hero/>
      <Skills/>
      <Profile/>
      <Projects/>
      <Footer/>
      </div>
      </div>
    </>
  )
}

export default App
