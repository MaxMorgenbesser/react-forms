import "./App.css";

import {BrowserRouter,Routes,Route} from 'react-router-dom'




import About from './pages/About.jsx'
import Form from "./components/Form";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { NotFound } from "./pages/NotFound";






function App() {
return (
  <BrowserRouter>
 
 
  <Header/>
  <Routes>
  <Route index element={<Home/>}/>
  <Route path='about' element={<About/>}/>
  <Route path='contact' element={<Contact/>}/>
  <Route path='*' element={<NotFound/>}/>
  </Routes> <Footer/>
</BrowserRouter>)
}

export default App;
