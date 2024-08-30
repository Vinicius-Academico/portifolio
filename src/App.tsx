import { Footer } from "./components/footer"
import { FormacaoAcademica } from "./components/formacaoAcademica"
import { Presentation } from "./components/presentation"
import { Technology } from "./components/technology"

function App() {
  return (
    <>
      <div>
        <Presentation/>
        <Technology/>
        <FormacaoAcademica/>
        <Footer/>
      </div>
    </>
  )
}


export default App