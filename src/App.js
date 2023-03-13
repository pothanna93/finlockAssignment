import { Routes, Route } from "react-router-dom";

import LoginPage from "./components/LoginPage"; 
import UserPage from "./components/UserPage";

import "./App.css"
const App=()=>(
    
    
  <Routes>
    <Route  exact path="/" element={<LoginPage />} />
    <Route exact path="/user" element={<UserPage />} />
  </Routes>
    
    
)


export default App  
