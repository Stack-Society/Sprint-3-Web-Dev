import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Error from './routes/Error'

import Home from './routes/Home'
import Sobre from './routes/Sobre'
import Funcionalidades from './routes/Funcionalidades'
import Avaliacao from './routes/Avaliacao'

function App() {

  return (
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="*" element={<Error />} />
          <Route path="/" element={<Home />} />
          <Route path="Sobre" element={<Sobre />} />
          <Route path="Funcionalidades" element={<Funcionalidades />} />
          <Route path="Avaliacao" element={<Avaliacao />} />
        </Routes>
      <Footer/>  
    </BrowserRouter>
  )
}

export default App
