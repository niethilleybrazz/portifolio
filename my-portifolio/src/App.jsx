import Header from "./components/Header"
import Hero from "./components/Hero"
import { BGPattern } from "./components/ui/bg-pattern"

function App() {
  return (
    <div>
      <BGPattern 
        variant="dots" 
        mask="fade-center" 
        fill="#333333" 
        size={30} 
        className="fixed inset-0 pointer-events-none opacity-50" 
      />
      <Header/>
      <Hero/>
    </div>
  )
}

export default App
