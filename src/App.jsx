import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Error from './routes/Error'
import Home from './routes/Home'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="*" element={<Error />} />
          <Route path="/" element={<Home />} />
        </Routes>
      <Footer/>  
    </BrowserRouter>
  )
}

export default App
