import {Paper,Typography} from "@mui/material" 



import "./index.css"

const UserPage=()=>{
    const nums = localStorage.getItem("name") 

        return(
    <div className="user-container">
        <Paper elevation={10} style={{width:300,height:"30vh",textAlign:"center"}}>
            <div className="user-container1">
                <Typography variant="h3">HI,Wellcome</Typography> 
                <Typography variant="h4">{nums}</Typography>
            </div>
            
        </Paper>
    </div>
)  
        }

export default UserPage