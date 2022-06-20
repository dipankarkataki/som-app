import {Link, useLocation} from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");
    return (
        
        <nav>
            <ul>
                <li className={splitLocation[1] === "dashboard" ? "link-active" : ""}>
                    <Link to="/dashboard" className='active'>Dashboard</Link>
                </li>
                <li className={splitLocation[1] === "manage-user" ? "link-active" : ""}>
                    <Link to="/manage-user">Manage User</Link>
                </li>
                <li className={splitLocation[1] === "manage-dealer" ? "link-active" : ""}>
                    <Link to="/manage-dealer">Manage Dealer</Link>
                </li>
                <li className={splitLocation[1] === "manage-partner" ? "link-active" : ""}>
                    <Link to="/manage-partner">Manage Partner</Link>
                </li>
                <li className={splitLocation[1] === "manage-product" ? "link-active" : ""}>
                    <Link to="/manage-product">Manage Product</Link>
                </li>
                <li className={splitLocation[1] === "manage-event" ? "link-active" : ""}>
                    <Link to="/manage-event">Manage Event</Link>
                </li>
                <li className={splitLocation[1] === "manage-partner-work" ? "link-active" : ""}>
                    <Link to="/manage-partner-work">Manage Partner Work</Link>
                </li>
                <li className={splitLocation[1] === "trading-advice" ? "link-active" : ""}>
                    <Link to="/trading-advice">Trading Advice</Link>
                </li>
                <li className={splitLocation[1] === "upcoming-projects" ? "link-active" : ""}>
                    <Link to="/upcoming-projects">Upcoming Projects</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Sidebar;