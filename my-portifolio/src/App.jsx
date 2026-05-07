import Header from "./components/Header"
import Hero from "./components/Hero"
import AboutSection from "./components/AboutSection"
import Projects from "./components/Projects"
import DividerCarousel from "./components/DividerCarousel"
import { BGPattern } from "./components/ui/bg-pattern"

function App() {
  return (
    <div className="padding-body">
      <BGPattern 
        variant="dots" 
        mask="fade-center" 
        fill="#333333" 
        size={30} 
        className="fixed inset-0 pointer-events-none opacity-40" 
      />
      <Header/>
      <Hero/>
      <DividerCarousel/>
      <Projects/>
    </div>
  )
}

export default App
