

import { makeStyles } from '@mui/styles'; 

const useStyles = makeStyles(()=>({
    
    formDiv:{
        
        display:"flex", 
        flexDirection:"column",
        
    }, 
    
    div:{
     display:"flex", 
     flexDirection:"column", 
     justifyContent:"center", 
     alignItems:"center",
     minHeight:"100vh", 
     
    }, 
    Paper:{
     padding:15, 
     borderRadius:"10px"
     
    }
})) 

export default useStyles