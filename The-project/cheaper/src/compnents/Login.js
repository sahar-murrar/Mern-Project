import React, {useState,useRef,useEffect} from 'react';
import {

    FormControl,
    InputLabel,
    OutlinedInput,
    Button
} from '@material-ui/core';
import axios from 'axios';
import { navigate } from '@reach/router';
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
            });
    },[]);

    // const onChange = e =>{
    //     setUser({...user,[e.target.name] : e.target.value});
    // }

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
        // else if(name.length<3){
        //     setError("Error: project name must be at least 3 characters")
        //     return false;
        // }
        // else if(email_exists.length !==0){
        //     setError("Error: this email is already exsits!!")
        //     return false;

        // }
        else{
            setError("")
            return true;
        }
        
    }

    const validatePassword=(password)=>{
        var usersArray= allUsers.filter(user => (user.email === email));
        setPassword(password);
        if(password===""){
            setError1("Error: password must not be empty");
            return false;

        }
        // else if(name.length<3){
        //     setError("Error: project name must be at least 3 characters")
        //     return false;
        // }
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
            <form onSubmit={onSubmit}>
                <h1 style={{backgroundColor:"snow",width:"200px",borderRadius:"10px"}}>Please sign in</h1>
               

<FormControl variant="outlined" style={{backgroundColor:"white"}}>
                    <InputLabel>email: :</InputLabel>
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

            
        </div>
    )
}

export default Login;