import {Link} from 'react-router-dom';
import {FiMenu} from 'react-icons/fi'

const Sidebar = () => {
    return (
        <div className="sidebar sidebar-bg">
            <div className="brand">
                <div className="brand-logo">
                    <FiMenu/>
                </div>
                <div className="brand-name">
                    <h2>SOM</h2>
                </div>
            </div>
            <nav className="nav-links">
                <ul>
                    <li className="mt-1">
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="mt-1">
                        <Link to="/manage-user">Manage User</Link>
                    </li>
                    <li className="mt-1">
                        <Link to="/manage-dealer">Manage Dealer</Link>
                    </li>
                    <li className="mt-1">
                        <Link to="/manage-partner">Manage Partner</Link>
                    </li>
                    <li className="mt-1">
                        <Link to="/manage-product">Manage Product</Link>
                    </li>
                </ul>
            </nav>
        </div>
        
    );
}

export default Sidebar;