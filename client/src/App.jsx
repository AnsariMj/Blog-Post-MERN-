import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Fot from './components/Fot';
import Header from './components/Header';
import About from './pages/About';
import AddBlog from './pages/Blog/AddBlog';
import Blogs from './pages/Blog/Blogs';
import Contact from './pages/Blog/Contact';
import Home from './pages/Home';
import Login from './pages/user/Login';
import SignUp from './pages/user/SignUp';

function App() {

  return (
    <>

      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={< Home />} />
          <Route path='/blog' element={< Blogs />} />
          <Route path='/addBlog' element={< AddBlog />} />
          <Route path='/about' element={< About />} />
          <Route path='/contact' element={< Contact />} />
          <Route path='/login' element={< Login />} />
          <Route path='/signup' element={< SignUp />} />
        </Routes>
     J </BrowserRouter>
      <Fot />
    </>
  )
}

export default App
