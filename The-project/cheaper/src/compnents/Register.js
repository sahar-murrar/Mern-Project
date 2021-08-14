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

    // const onChange = e =>{
    //     setUser({...user,[e.target.name] : e.target.value});
    // }

    // const resetForm = ()=>{
    //     setUser({username: "", password : "",email:"",phone:0,location:"", role : ""});
    // }

    const onSubmit = e =>{
        e.preventDefault()
        // setUser({name, email, phone, location, password, role})
        console.log({name, email, phone, location, password, role}, "oooo")
        if(validateEmail(email)){
            axios.post('http://localhost:8000/api/user/new', {name, email, phone, location, password, role})
                .then(res=>{
                    if(role === 'admin'){
                        navigate("/supermarket");

                    }
                    else if(role === 'user'){
                        navigate("/user");
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
                    Register
                    </Button>

            </form>
           
        </div>
    )
}

export default Register;