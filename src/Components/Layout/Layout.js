import {Outlet} from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import {FiMenu} from 'react-icons/fi'

const Layout = () =>{
    
    const sidebarToggle = () => {
        let sidebarActiveStatus = document.querySelector('.sidebar-menu');
        let brandNameOnSmallScreen = document.querySelector('.content-area .top-nav .toggle-menu-btn h6');

        // console.log('brandNameOnSmallScreen  ===>',brandNameOnSmallScreen);
        if(sidebarActiveStatus.classList[1] === 'sidebar-active'){
            sidebarActiveStatus.classList.remove('sidebar-active');
            sidebarActiveStatus.classList.add('sidebar-deactive');
            brandNameOnSmallScreen.style.visibility = "hidden";
            
        }else{
            sidebarActiveStatus.classList.remove('sidebar-deactive');
            sidebarActiveStatus.classList.add('sidebar-active');
            brandNameOnSmallScreen.style.visibility = "visible";
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
                            <h6 className='brand-name' style={{visibility:"hidden"}}>SOM</h6>
                        </div>
                        <div className='admin-profile'>
                            <img src="Images/pic1.jpg" alt="admin-pic"/>
                            <div class="dropdown">
                                <button type="button" class="btn btn-default dropdown-toggle" data-bs-toggle="dropdown">
                                    Admin
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#test">Profile</a></li>
                                    <li><a class="dropdown-item" href="#test">Settings</a></li>
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