import Header from "./components/Header"
import Hero from "./components/Hero"
import AboutSection from "./components/AboutSection"
import DividerCarousel from "./components/DividerCarousel"
import { BGPattern } from "./components/ui/bg-pattern"

function App() {
  return (
    <div className="pt-2 pb-3 pr-10 pl-10">
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
      <AboutSection/>
    </div>
  )
}

export default App
