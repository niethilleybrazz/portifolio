import Header from "./components/Header"
import Hero from "./components/Hero"
import AboutSection from "./components/AboutSection"
import { BGPattern } from "./components/ui/bg-pattern"

function App() {
  return (
    <div>
      <BGPattern 
        variant="dots" 
        mask="fade-center" 
        fill="#333333" 
        size={30} 
        className="fixed inset-0 pointer-events-none opacity-70" 
      />
      <Header/>
      <Hero/>
      <AboutSection/>
    </div>
  )
}

export default App
