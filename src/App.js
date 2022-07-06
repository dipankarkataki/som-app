import Layout from "./Components/Layout/Layout";
import "./Components/Pages/Login/Login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {Outlet} from 'react-router-dom';
import Login from "./Components/Pages/Login/Login";

function App() {
  return (

    <>
      <Outlet>
        <Login />
      </Outlet>
      
    </>
    
  );
}

export default App;
