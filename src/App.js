
import './App.css';
import{Route,Routes,BrowserRouter } from "react-router-dom"
import Homepage from './Pages/Homepage/Homepage';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductPage from './Pages/Product/ProductPage';

function App() {
  
  return (
  <>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path ="/home" element={<Homepage/>}></Route>
      <Route path="*" element={
      <div>
        <h1> Error404 page not found</h1>
      </div>
      }></Route>
      <Route path="/product/:id" element={<ProductPage/>}></Route>

    </Routes>
  </BrowserRouter>
  </>

  );
}

export default App;
