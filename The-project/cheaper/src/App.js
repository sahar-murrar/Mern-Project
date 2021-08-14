import './App.css';
import {useState, useEffect } from 'react';
import axios from 'axios';
import {Router,navigate} from '@reach/router'
import SuperMarketHome from './compnents/SuperMarket_Components/SuperMarketHome';
import CreateProduct from './compnents/SuperMarket_Components/CreateProduct';
import ProductsList from './compnents/SuperMarket_Components/ProductsList';
import EditComponent from './compnents/EditComponent';
import UserHome from './compnents/User_Components/UserHome';
import ViewSupermarketDetails from './compnents/User_Components/ViewSupermarketDetails';
import Chat from './compnents/Chat';
import Home from './compnents/Home';
import Login from './compnents/Login';
import Register from './compnents/Register';
import ThankYou from './compnents/ThankYou';
function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [loaded1, setLoaded1] = useState(false);
  const [allUsers, setAllUsers] = useState([]);
  const [loaded, setLoaded] = useState(false);
  // var supermarketName="shini"
  
  useEffect (() => {
      axios.get('http://localhost:8000/api/products')
      .then(res=> {
        setAllProducts(res.data);
          setLoaded1(true);

      });

      axios.get('http://localhost:8000/api/users')
      .then(res =>{ 
        setAllUsers(res.data)
          setLoaded(true);
      });
  }, [])


  return (
    <div className="App">
      {/* <button onClick={(e)=>navigate("/supermarket")}>supermarket home</button>
      <button onClick={(e)=>navigate("/user")}>user home</button> */}
     
     
      <Router>
      <Home path="/"/>
        <SuperMarketHome  allProducts={allProducts} path="/supermarket/:name"/>  
        <CreateProduct path="/addProduct/:name"/>
        <ProductsList path="/allProducts/:supermarketName"/>
        <EditComponent path="/edit/:id"/>
        <UserHome allUsers={allUsers}  allProducts={allProducts} path="/user/:name" />
        <ViewSupermarketDetails allUsers={allUsers} allProducts={allProducts} path="/supermarketDetails/:name/:username"/>
        <Chat path="/chatWith/:name" />
        <Login path="/login"/>
        <Register path="/register"/>
        <ThankYou path="/thankyou"/>
      </Router>
     
    </div>
  );
}

export default App;
