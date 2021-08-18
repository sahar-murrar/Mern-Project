import React, {useState,useRef,useEffect} from 'react';
import {

    FormControl,
    InputLabel,
    OutlinedInput,
    Button
} from '@material-ui/core';
import axios from 'axios';
import { navigate } from '@reach/router';
import { Link } from '@reach/router';
const Login = props=>{
    const [user,setUser] = useState({username: "", password : ""});
    const [message,setMessage] = useState(null);
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
    const [allUsers, setAllUsers] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [error, setError]= useState([]);
    const [error1, setError1]= useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/users')
            .then(res=>{
                setAllUsers(res.data);
                setLoaded(true);
                console.log(res.data, "logiiin")
            });
    },[]);

   

    const onSubmit = e =>{
        e.preventDefault();
        if(validateEmail(email) && validatePassword(password)){
            var usersArray= allUsers.filter(user => (user.email === email));
            if(usersArray[0].role ==='admin'){
                navigate("/supermarket/"+usersArray[0].name)
            }
            else if(usersArray[0].role ==='user'){
                navigate("/user/"+usersArray[0].name)
            }
          
        }

    }

    const validateEmail=(email)=>{
        // var email_exists= allUsers.filter(user => (user.email === email));
        setEmail(email);
        if(email===""){
            setError("Error: project email must not be empty");
            return false;

        }
 
        else{
            setError("")
            return true;
        }
        
    }

    const validatePassword=(password)=>{
        var usersArray= allUsers.filter(user => (user.email === email));
        console.log(usersArray, "users arrraaayyy")
        setPassword(password);
        if(password===""){
            setError1("Error: password must not be empty");
            return false;

        }
 
        else if(usersArray[0].password !== password){
            setError1("Error:wrong password!!")
            return false;

        }
        else{
            setError1("")
            return true;
        }
        
    }




    return(
        <div>

<ul style={{listStyleType:"none",margin:"0px",padding:"0px",backgroundColor:"black",overflow:"hidden", height: "50px"}}>
   <div style={{display:"flex"}}>
     <Link to="/" style={{ textDecoration: "none"}}> <h2 style={{color:"white"}}>Cheaper</h2></Link>

   <div>

   <Link style={{color:"white",padding:"14px 16px",textAlign:"center",textDecoration:"none"}} to="/"><li className="nav-item nav-link" style={{display:"inline"}}>  Home </li></Link>
    <Link style={{color:"white",padding:"14px 16px",textAlign:"center",textDecoration:"none"}} to="/login"><li className="nav-item nav-link" style={{display:"inline"}}>Login</li></Link>  
    <Link style={{color:"white",padding:"100px 100px",textAlign:"center",textDecoration:"none"}} to="/register"><li className="nav-item nav-link" style={{display:"inline"}}> Register</li> </Link> 



   </div>
   


   </div>
  
    </ul>

            <form onSubmit={onSubmit}>
                <h1 >Sign in</h1>
                <br></br>
               

<FormControl variant="outlined" style={{backgroundColor:"white"}}>
                    <InputLabel>Email: </InputLabel>
                    <OutlinedInput type="text" 
                       name="username" 
                       onChange={e=>setEmail(e.target.value)} 
                       className="form-control" 
                       placeholder="Enter Username"/>
                </FormControl>
                <p className="error">{error}</p>
                <br/>

               

<FormControl variant="outlined" style={{backgroundColor:"white"}}>
                    <InputLabel>Password:</InputLabel>
                    <OutlinedInput type="password" 
                       name="password" 
                       onChange={e=>setPassword(e.target.value)} 
                       className="form-control" 
                       placeholder="Enter Password"/>
                    
                </FormControl>
                <p className="error">{error1}</p>
                <br/>
                <Button type="submit" variant="contained" color="primary">
                    Login
                    </Button>
            </form>
            {/* {message ? <Message message={message}/> : null} */}

              
            <ul style={{listStyleType:"none",margin:"0px",padding:"0px",backgroundColor:"black",overflow:"hidden",  position:"relative",top:"150px"}}>

            <div style={{position:"relative", color:"white"}}>
            <h1>About Us</h1>
            <h3 style={{fontWeight:"bold"}}> <span style={{color:"red"}}>Cheaper</span> is a website that aims to save the customer money by providing the customer of the all supermarkets that sell the product s/he want to buy and the customer can choose the product according to the right price and supermarket location</h3>

            </div> 
            <br></br>
            <br></br>

            <div style={{position:"relative", color:"white"}}>
            <h1>Contact Us</h1>
            <h3 style={{fontWeight:"bold"}}> email: cheaper@gmail.com</h3>
            <h3 style={{fontWeight:"bold"}}> phone: 059833747432</h3>
            <h3 style={{fontWeight:"bold"}}> facebook: cheaperWebsite</h3>
            </div>



            </ul>


            

            
        </div>

        
    )
}

export default Login;