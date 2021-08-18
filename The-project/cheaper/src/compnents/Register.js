import React, {useState,useRef,useEffect} from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';
import {

    FormControl,
    InputLabel,
    OutlinedInput,
    Button
} from '@material-ui/core';

const Register = props=>{
    const [user,setUser] = useState({});
    const [message,setMessage] = useState(null);
    let timerID = useRef(null);
    const [error, setError]= useState([]);
    const [name, setName]=useState("")
    const [phone, setPhone]=useState("")
    const [email, setEmail]=useState("")
    const [location, setLocation]=useState("")
    const [role, setRole]=useState("")
    const [password, setPassword]=useState("")

    const [allUsers, setAllUsers] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/users')
            .then(res=>{
                setAllUsers(res.data);
                setLoaded(true);
            });
    },[]);


    const onSubmit = e =>{
        e.preventDefault()
        // setUser({name, email, phone, location, password, role})
        console.log({name, email, phone, location, password, role}, "oooo")
        if(validateEmail(email)){
            axios.post('http://localhost:8000/api/user/new', {name, email, phone, location, password, role})
                .then(res=>{
                    if(role === 'admin'){
                        navigate("/supermarket/"+name);

                    }
                    else if(role === 'user'){
                        navigate("/user/"+name);
                    }
                    
                })
                .catch(err=>{
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setError(errorArr);
            })   
        }    
    }

    const validateEmail=(email)=>{
        var email_exists= allUsers.filter(user => (user.email === email));
        setEmail(email);
        if(email===""){
            setError("Error: project email must not be empty");
            return false;

        }
        // else if(name.length<3){
        //     setError("Error: project name must be at least 3 characters")
        //     return false;
        // }
        else if(email_exists.length !==0){
            setError("Error: this email is already exsits!!")
            return false;

        }
        else{
            setError("")
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

             <h1 >Sign Up</h1>
             
            <form onSubmit={onSubmit}>
            <br></br>
                <FormControl variant="outlined" style={{backgroundColor:"white"}}>
                    <InputLabel>Username :</InputLabel>
                    <OutlinedInput type="text" 
                       name="username" 
                       value={name}
                       onChange={(e=>setName(e.target.value))} 
                       className="form-control" 
                       placeholder="Enter Username"/>
                    
                </FormControl>
                <br></br>
                <br></br>
                <FormControl variant="outlined" style={{backgroundColor:"white"}}>
                    <InputLabel>email:</InputLabel>
                    <OutlinedInput type="text" 
                       name="email" 
                       value={email}
                       onChange={e=>setEmail(e.target.value)} 
                       className="form-control" 
                       placeholder="Enter email"/>
                    
                </FormControl>
                <p className="error">{error}</p>
                <br></br>
                <br></br>
                <FormControl variant="outlined" style={{backgroundColor:"white"}}>
                    <InputLabel>phone:</InputLabel>
                    <OutlinedInput type="Number" 
                       name="phone" 
                       value={phone}
                       onChange={e=>setPhone(e.target.value)}/>
                    
                </FormControl>

             
                <br></br>
                <br></br>

                <FormControl variant="outlined" style={{backgroundColor:"white"}}>
                    <InputLabel>location:</InputLabel>
                    <OutlinedInput type="text" 
                       name="location" 
                       value={location}
                       onChange={e=>setLocation(e.target.value)} 
                       placeholder="enter you location"/>
                    
                </FormControl>

                <br></br>
                <br></br>
                <FormControl variant="outlined" style={{backgroundColor:"white"}}>
                    <InputLabel>password:</InputLabel>
                    <OutlinedInput type="password" 
                       name="password"
                       value={password} 
                       onChange={e=>setPassword(e.target.value)} 
                       className="form-control" 
                       placeholder="Enter Password"/>
                    
                </FormControl>
                <br></br>
                <br></br>

                <FormControl variant="outlined" style={{backgroundColor:"white"}}>
                    <InputLabel>role:</InputLabel>
                    <OutlinedInput type="text" 
                       name="role"
                       value={role}  
                       onChange={e=>setRole(e.target.value)} 
                       className="form-control" 
                       placeholder="Enter role (admin/user)"/>
                    
                </FormControl>
                <br/><br/>

                    <Button type="submit" variant="contained" color="primary">
                    Sign up
                    </Button>
          

            </form>

            <ul style={{listStyleType:"none",margin:"0px",padding:"0px",backgroundColor:"black",overflow:"hidden",  position:"relative"}}>

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

export default Register;