import { Footer } from "./components/footer"
import { NavBar } from "./components/navbar"
import { Presentation } from "./components/presentation"
import { Technology } from "./components/technology"

function App() {
  return (
    <>
      <div>
        <NavBar/> 
        <Presentation/>
        <Technology/>
        <Footer/>
      </div>
    </>
  )
}


export default App