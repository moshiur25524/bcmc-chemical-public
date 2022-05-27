
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
import Purchase from './pages/Purchase/Purchase';
import Dashboard from './pages/Dashboard/Dashboard';
import RequireAuth from './pages/login/RequireAuth';
import MyOrders from './pages/Dashboard/MyOrders';
import Review from './pages/Dashboard/Review';
import MyProfile from './pages/Dashboard/MyProfile';
import MyPortfolio from './pages/MyPortfolio/MyPortfolio';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
         <Route path='/' element={<Home></Home>}></Route>
         <Route path='/products' element={<Products></Products>}></Route>
         <Route path='/blogs' element={<Blogs></Blogs>}></Route>
         <Route path='/profile' element={<MyProfile></MyProfile>}></Route>
         <Route path='/portfolio' element={<MyPortfolio></MyPortfolio>}></Route>
         <Route path='/summary' element={<BussinessSummary></BussinessSummary>}></Route>
         <Route path='/purchase' element={
           <RequireAuth>
             <Purchase></Purchase>
           </RequireAuth>
         }></Route>
         <Route path='/dashboard' element={
           <RequireAuth>
             <Dashboard></Dashboard>
           </RequireAuth>
         }>
           <Route index element={<MyOrders></MyOrders>}></Route>
           <Route path='reviews' element={<Review></Review>}></Route>
           {/* <Route path='profile' element={<MyProfile></MyProfile>}></Route> */}
         </Route>
         <Route path='/login' element={<Login></Login>}></Route>
         <Route path='/signup' element={<Signup></Signup>}></Route>
         <Route path='/*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
