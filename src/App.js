import "./Components/Pages/Login/Login.css";
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
