import {Outlet} from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import {FiMenu, FiChevronDown} from 'react-icons/fi'

const Layout = () =>{
    
    const sidebarToggle = () => {
        let sidebarActiveStatus = document.querySelector('.sidebar-menu');
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
                <div className='mobile-menu-wrapper'>
                    <div className='mobile-menu'>
                        <div className='top-nav'>
                            <span className="toggle-menu-wrapper">
                                <FiMenu onClick={sidebarToggle} />
                                <span className='brand-name'>SOM</span>
                            </span>
                            <span className='top-nav-admin-profile-photo'>
                                <img src="Images/pic1.jpg" alt="admin-pic"/>
                                <h6>Admin <FiChevronDown /></h6>
                            </span>
                        </div>
                    </div>
                    <div className='sidebar-menu sidebar-deactive'>
                        <Sidebar />
                    </div>
                    <div className='main-content-area'>
                        <Outlet />
                    </div>
                </div>
                <div className='desktop-menu'>
                    <div className='desktop-wrapper'>
                        <div className='desktop-sidebar'>
                            <span className="toggle-menu-wrapper">
                                <FiMenu />
                                <span className='brand-name'>SOM</span>
                            </span>
                            <Sidebar />
                        </div>
                        <div className='desktop-content'>
                            <div className='top-navigation mb-2'>
                                <span className='profile-area'>
                                    <img src="Images/pic1.jpg" alt="admin-pic"/>
                                    <h6>Admin <FiChevronDown /></h6>
                                </span>
                            </div>
                            <div className='desktop-content-area'>
                                <Outlet />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Layout;