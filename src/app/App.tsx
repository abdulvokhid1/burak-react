import React, { useState } from 'react';
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
import { CartItem } from '../lib/types/search';
import useBasket from './hooks/useBasket';
import AuthenticationModal from './components/auth';


function App() {
  const location = useLocation();
  const {cartItems, onAdd, onDelete, onDeleteAll, onRemove} = useBasket();
  const [signupOpen, setSignupOpen]= useState<boolean>(false);
  const [loginOpen, setLoginOpen]= useState<boolean>(true);

/** HANDLERS */
const handleSignUpCLose = () => setSignupOpen(false);
const handleLoginClose = () => setLoginOpen(false);
  return (
    <>
    {location.pathname === "/" ? <HomeNavbar 
    cartItems = {cartItems} 
    onAdd = {onAdd}
    onRemove = {onRemove}
    onDelete = {onDelete}
    onDeleteAll={onDeleteAll}
     /> :
      <OtherNavbar
       cartItems = {cartItems}
       onAdd = {onAdd}
       onRemove = {onRemove}
       onDelete = {onDelete}
       onDeleteAll = {onDeleteAll}
       />} 
      <Switch> 
        <Route path="/products">
          <ProductsPage onAdd = {onAdd} />
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
      <AuthenticationModal
      signupOpen={signupOpen}
      loginOpen = {loginOpen}
      handleLoginClose={handleLoginClose}
      handleSignupClose={handleSignUpCLose}
      />
    </>

  )
}
export default App;
