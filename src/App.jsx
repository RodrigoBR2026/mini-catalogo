import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Favorites } from './pages/Favorites'
import { ProductDetails } from './pages/Product-details'

export function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header/>

      <main className="flex-1 container mx-auto p-4">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favoritos' element={<Favorites />} />
          <Route path='/detalhe-produto/:id' element={<ProductDetails />} /> 
        </Routes>

      </main>

      <Footer/>
    </div>
  )
}


  
