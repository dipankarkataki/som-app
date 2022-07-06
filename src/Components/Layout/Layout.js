import {Outlet} from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import "../Layout/Layout.css";
import {FiMenu} from 'react-icons/fi'

const Layout = () =>{
    
    const sidebarToggle = () => {
        let sidebarActiveStatus = document.querySelector('.sidebar-menu');

        // console.log('brandNameOnSmallScreen  ===>',brandNameOnSmallScreen);
        if(sidebarActiveStatus.classList[1] === 'sidebar-active'){
            sidebarActiveStatus.classList.remove('sidebar-active');
            sidebarActiveStatus.classList.add('sidebar-deactive');
            
        }else{
            sidebarActiveStatus.classList.remove('sidebar-deactive');
            sidebarActiveStatus.classList.add('sidebar-active');
        }
    }

    return (
        <>
            <div className='main-wrapper'>
                <div className='sidebar-menu sidebar-active'>
                    <Sidebar />
                </div>
                <div className='content-area'>
                    <div className='top-nav'>
                        <div className="toggle-menu-btn">
                            <FiMenu onClick={sidebarToggle} />
                        </div>
                        <div className='admin-profile'>
                            <img src="./../../../.././Images/pic1.jpg" alt="admin-pic"/>
                            <div className="dropdown">
                                <button type="button" className="btn btn-default dropdown-toggle" data-bs-toggle="dropdown">
                                    Admin
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#test">Profile</a></li>
                                    <li><a className="dropdown-item" href="#test">Settings</a></li>
                                </ul>
                            </div>
                            {/* <h6>Admin <FiChevronDown /></h6> */}
                        </div>
                    </div>
                    <div className='content'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Layout;