import React,{useState} from "react"  
import { useNavigate } from 'react-router-dom'; 
import { Navigate } from 'react-router-dom';
import axios from "axios" 
import Cookies from 'js-cookie'; 

import {Grid,Paper,TextField,Button,Typography,Container} from "@mui/material" 
//import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import useStyles from "./style";

import "./index.css" 



const LoginPage=()=>{ 

    const classes = useStyles() 
    const [username,setUser] = useState(""); 
    const [password,setPassword] = useState(""); 
    
    const errorMassage={
        errorValue:"",
        boolValue:false
    } 
    const [errorData,setErrorData] = useState(errorMassage);  

    
     
    const history = useNavigate();

    const setJwtToken=(data)=>{
        console.log(data)
        const token = data.jwt 
        const name = data.name 
        localStorage.setItem("name",name)
        
        Cookies.set('jwt_token', token, { expires: 7 }) 
       
        history('/user');
    } 
    
    const setErrorMsg=(errorMsg)=>{
        
         
        setErrorData({errorValue:errorMsg,boolValue:true})
        
        
    }

    const onSubmitUser=async(event)=>{
        event.preventDefault();  
        setUser("") 
        setPassword("")
        const userDetails={username:username,password:password}  
         
        
        
        try{
            await axios.post("http://localhost:4001/app/login",userDetails) 
            .then((resp)=>{
                if(resp.status === 200){
                    
                    setJwtToken(resp.data)
                } 
                
            })
            
          }catch(error){
            const errorMsg = error.response.data; 
            setErrorMsg(errorMsg)
            
          } 

        
    }


    const jwtToken = Cookies.get("jwt_token") 
    if(jwtToken !== undefined){
        return <Navigate to ="/user" replace={true}/>
    }

    
    return( 

        <div className={classes.div}> 
            <Container maxWidth="sm"> 
             <Paper elevation={10} className={classes.Paper}>
                <Typography variant="h2">Wellcome User</Typography> 
                <Grid>
                <form className={classes.formDiv} onSubmit={onSubmitUser}>
                <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    type="text"
                    value={username} onChange={(event)=>setUser(event.target.value)}
                    margin="normal"
                 /> 

                <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    margin="normal" 
                    value={password} onChange={(event)=>setPassword(event.target.value)}
                    /> 
                <Button type="submit" variant="contained" sx={{   marginTop: 2 }} size="large">
                        login
                </Button>  
                {errorData.boolValue && <Typography style={{color:"red"}}>{errorData.errorValue}</Typography> }
                </form> 
                
                </Grid>
                </Paper> 
            </Container>
          
        </div>
          
        
    ) 
}

export default LoginPage