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
                        <div className="top-nav-menu">
                            <img  src="Images/pic3.jpg" alt="avatar" />
                            <h6>Admin</h6>
                        </div>
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