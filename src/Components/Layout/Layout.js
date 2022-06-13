import {Outlet} from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';

const Layout = () =>{
    return (
        <>
            <div className="row g-0">
                <div className="col-md-2">
                    <Sidebar />
                </div>
                <div className="col-md-10">
                    <nav className="navbar navbar-expand-sm navbar-custom">
                        
                    </nav>
                    <div className="main-content">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Layout;