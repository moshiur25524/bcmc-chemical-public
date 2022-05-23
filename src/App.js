
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Blogs from './pages/Blogs/Blogs';
import BussinessSummary from './pages/BusinessSummary/BussinessSummary';
import Header from './pages/Shared/Header';
import Footer from './pages/Shared/Footer';
import NotFound from './pages/NotFound/NotFound';
import Login from './pages/login/Login';
import Signup from './pages/login/Signup';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
         <Route path='/' element={<Home></Home>}></Route>
         <Route path='/products' element={<Products></Products>}></Route>
         <Route path='/blogs' element={<Blogs></Blogs>}></Route>
         <Route path='/summary' element={<BussinessSummary></BussinessSummary>}></Route>
         <Route path='/login' element={<Login></Login>}></Route>
         <Route path='/signup' element={<Signup></Signup>}></Route>
         <Route path='/*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
