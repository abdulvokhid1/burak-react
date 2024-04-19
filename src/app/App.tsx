import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import HomePage  from './screens/homePage';
import ProductsPage  from './screens/productsPage';
import OrderPage  from './screens/orderPage';
import  UserPage  from './screens/userPage';
import  HomeNavbar  from './components/headers/HomeNavbar';
import OtherNavbar  from './components/headers/OtherNavbar';
import Footer from './components/footer';
// import "../css/app.css"
import "../css/navbar.css"
import "../css/footer.css"
import HelpPage from './screens/helpPage';
import Test from './screens/Test';


function App() {
  const location = useLocation();
  console.log(location)
  return (
    <>
    {location.pathname === "/" ? <HomeNavbar/> : <OtherNavbar/>} 
      <Switch>
        <Route path="/products">
          <ProductsPage />
        </Route>
        <Route path="/orders">
          <OrderPage/>
        </Route>
        <Route path="/member-page">
          <UserPage/>
        </Route>
        <Route path="/help">
          <HelpPage/>
        </Route>
        <Route path="/">
          <HomePage/>
        </Route>
      </Switch>
      <Footer/>
    </>

  )
}
export default App;
