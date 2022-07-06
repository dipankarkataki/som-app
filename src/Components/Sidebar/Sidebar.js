import {Link, useLocation} from 'react-router-dom';
// import {FaTimes} from 'react-icons/fa';

const Sidebar = () => {
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");
    return (
        
        <nav>
            <ul>
                <li>
                    <h3 className='brand-name'>SOM</h3>
                </li>
                <li className={splitLocation[1] === "dashboard" ? "link-active" : ""}>
                    <Link to="/layout/dashboard" className='active'>Dashboard</Link>
                </li>
                <li className={splitLocation[1] === "manage-user" ? "link-active" : ""}>
                    <Link to="/layout/manage-user">Manage User</Link>
                </li>
                <li className={splitLocation[1] === "manage-dealer" ? "link-active" : ""}>
                    <Link to="/layout/manage-dealer">Manage Dealer</Link>
                </li>
                <li className={splitLocation[1] === "manage-partner" ? "link-active" : ""}>
                    <Link to="/layout/manage-partner">Manage Partner</Link>
                </li>
                <li className={splitLocation[1] === "manage-product" ? "link-active" : ""}>
                    <Link to="/layout/manage-product">Manage Product</Link>
                </li>
                <li className={splitLocation[1] === "manage-event" ? "link-active" : ""}>
                    <Link to="/layout/manage-event">Manage Event</Link>
                </li>
                <li className={splitLocation[1] === "manage-partner-work" ? "link-active" : ""}>
                    <Link to="/layout/manage-partner-work">Manage Partner Work</Link>
                </li>
                <li className={splitLocation[1] === "trading-advice" ? "link-active" : ""}>
                    <Link to="/layout/trading-advice">Trading Advice</Link>
                </li>
                <li className={splitLocation[1] === "upcoming-projects" ? "link-active" : ""}>
                    <Link to="/layout/upcoming-projects">Upcoming Projects</Link>
                </li>
                <li className={splitLocation[1] === "inquiries" ? "link-active" : ""}>
                    <Link to="/layout/inquiries">Inquiries</Link>
                </li>
                <li className={splitLocation[1] === "feedback" ? "link-active" : ""}>
                    <Link to="/layout/feedback">Feedback</Link>
                </li>
                <li className={splitLocation[1] === "offer-discount" ? "link-active" : ""}>
                    <Link to="/layout/offer-discount">Offers And Discounts</Link>
                </li>
                <li className={splitLocation[1] === "cms" ? "link-active" : ""}>
                    <Link to="/layout/cms">CMS</Link>
                </li>
                <li className={splitLocation[1] === "steel-market" ? "link-active" : ""}>
                    <Link to="/layout/steel-market">Steel Market Update</Link>
                </li>
                <li className={splitLocation[1] === "guest-lecture" ? "link-active" : ""}>
                    <Link to="/layout/guest-lecture">Lectures</Link>
                </li>
                <li className={splitLocation[1] === "tender" ? "link-active" : ""}>
                    <Link to="/layout/tender">Tenders</Link>
                </li>
                <li className={splitLocation[1] === "education" ? "link-active" : ""}>
                    <Link to="/layout/education">Education</Link>
                </li>
                <li className={splitLocation[1] === "quiz" ? "link-active" : ""}>
                    <Link to="/layout/quiz">Quiz</Link>
                </li>
                <li className={splitLocation[1] === "loyalty-points" ? "link-active" : ""}>
                    <Link to="/layout/loyalty-points">Loyalty Points</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Sidebar;