import {FaUsers, FaRegHandshake, FaAddressBook, FaBoxes, FaEnvelope, FaPhoneAlt, FaStar} from 'react-icons/fa';


const  Dashboard = () =>{
    return (
        <>
            <div className="breadcrumb">
                <p>Dashboard</p>
            </div>
            <div className="content-area">
                <div className="row">
                    <div className="col-md-3 col-sm-6 col-12">
                        <div className="card dashboard-card">
                            <div className="card-body">
                                <div className="card-icon-area">
                                    <FaUsers/>
                                </div>
                                <div className="card-content-area">
                                    <p>Users</p>
                                    <h1>1000</h1>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-12">
                        <div className="card dashboard-card">
                                <div className="card-body">
                                    <div className="card-icon-area">
                                        <FaRegHandshake/>
                                    </div>
                                    <div className="card-content-area">
                                        <p>Partners</p>
                                        <h1>1000</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div className="col-md-3 col-sm-6 col-12">
                        <div className="card dashboard-card">
                                <div className="card-body">
                                    <div className="card-icon-area">
                                        <FaAddressBook/>
                                    </div>
                                    <div className="card-content-area">
                                        <p>Dealers</p>
                                        <h1>1000</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div className="col-md-3 col-sm-6 col-12">
                        <div className="card dashboard-card">
                                <div className="card-body">
                                    <div className="card-icon-area">
                                        <FaBoxes/>
                                    </div>
                                    <div className="card-content-area">
                                        <p>Products</p>
                                        <h1>1000</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-4 col-sm-12">
                        <div className="card list-user-card">
                            <div className="card-body">
                                <h5 className="card-title text-center">Last 3 New Users</h5>
                                <div className="user-info-area">
                                    <div className="user-pic">
                                        <img src="Images/pic1.jpg" alt="avatar" />
                                    </div>
                                    <div className="user-details">
                                        <h5>Jhon Doe</h5>
                                        <p>
                                            <FaEnvelope />&nbsp;&nbsp;
                                            <span>example@xyz.com</span>
                                        </p>
                                        <p>
                                            <FaPhoneAlt />&nbsp;&nbsp;
                                            <span>7895412014</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="user-info-area">
                                    <div className="user-pic">
                                        <img src="Images/pic1.jpg" alt="avatar" />
                                    </div>
                                    <div className="user-details">
                                        <h5>Jhon Doe</h5>
                                        <p>
                                            <FaEnvelope />&nbsp;&nbsp;
                                            <span>example@xyz.com</span>
                                        </p>
                                        <p>
                                            <FaPhoneAlt />&nbsp;&nbsp;
                                            <span>7895412014</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="user-info-area">
                                    <div className="user-pic">
                                        <img src="Images/pic1.jpg" alt="avatar" />
                                    </div>
                                    <div className="user-details">
                                        <h5>Jhon Doe</h5>
                                        <p>
                                            <FaEnvelope />&nbsp;&nbsp;
                                            <span>example@xyz.com</span>
                                        </p>
                                        <p>
                                            <FaPhoneAlt />&nbsp;&nbsp;
                                            <span>7895412014</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <div className="card list-dealer-card">
                                <div className="card-body">
                                    <h5 className="card-title text-center">Last 3 New Dealers</h5>
                                    <div className="user-info-area">
                                        <div className="user-pic">
                                            <img src="Images/1.jpg" alt="avatar" />
                                            <div className="user-rating">
                                                <span><FaStar/></span>&nbsp;
                                                <span>4.5</span>
                                            </div>
                                        </div>
                                        <div className="user-details">
                                            <h5>Serines Dealers & Traders</h5>
                                            <p>
                                                <span>Location: Ganeshguri</span>
                                            </p>
                                            <p>
                                                <FaEnvelope />&nbsp;&nbsp;
                                                <span>example@xyz.com</span>
                                            </p>
                                            <p>
                                                <FaPhoneAlt />&nbsp;&nbsp;
                                                <span>7895412014</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="user-info-area">
                                        <div className="user-pic">
                                            <img src="Images/pic1.jpg" alt="avatar" />
                                            <div className="user-rating">
                                                <span><FaStar/></span>&nbsp;
                                                <span>4.5</span>
                                            </div>
                                        </div>
                                        <div className="user-details">
                                            <h5>Serines Dealers & Traders</h5>
                                            <p>
                                                <span>Location: Ganeshguri</span>
                                            </p>
                                            <p>
                                                <FaEnvelope />&nbsp;&nbsp;
                                                <span>example@xyz.com</span>
                                            </p>
                                            <p>
                                                <FaPhoneAlt />&nbsp;&nbsp;
                                                <span>7895412014</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="user-info-area">
                                        <div className="user-pic">
                                            <img src="Images/pic1.jpg" alt="avatar" />
                                            <div className="user-rating">
                                                <span><FaStar/></span>&nbsp;
                                                <span>4.5</span>
                                            </div>
                                        </div>
                                        <div className="user-details">
                                            <h5>Serines Dealers & Traders</h5>
                                            <p>
                                                <span>Location: Ganeshguri</span>
                                            </p>
                                            <p>
                                                <FaEnvelope />&nbsp;&nbsp;
                                                <span>example@xyz.com</span>
                                            </p>
                                            <p>
                                                <FaPhoneAlt />&nbsp;&nbsp;
                                                <span>7895412014</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div className="col-md-4 col-sm-12">
                        <div className="card list-partner-card">
                                <div className="card-body">
                                    <h5 className="card-title text-center">Last 3 New Partners</h5>
                                    <div className="user-info-area">
                                        <div className="user-pic">
                                            <img src="Images/pic1.jpg" alt="avatar" />
                                            <div className="user-rating">
                                                <span><FaStar/></span>&nbsp;
                                                <span>4.5</span>
                                            </div>
                                        </div>
                                        <div className="user-details">
                                            <h5>Jhon Doe</h5>
                                            <p>
                                                <span>Category: Architechture</span>
                                            </p>
                                            <p>
                                                <FaEnvelope />&nbsp;&nbsp;
                                                <span>example@xyz.com</span>
                                            </p>
                                            <p>
                                                <FaPhoneAlt />&nbsp;&nbsp;
                                                <span>7895412014</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="user-info-area">
                                        <div className="user-pic">
                                            <img src="Images/pic1.jpg" alt="avatar" />
                                            <div className="user-rating">
                                                <span><FaStar/></span>&nbsp;
                                                <span>4.5</span>
                                            </div>
                                        </div>
                                        <div className="user-details">
                                            <h5>Jhon Doe</h5>
                                            <p>
                                                <span>Category: Architechture</span>
                                            </p>
                                            <p>
                                                <FaEnvelope />&nbsp;&nbsp;
                                                <span>example@xyz.com</span>
                                            </p>
                                            <p>
                                                <FaPhoneAlt />&nbsp;&nbsp;
                                                <span>7895412014</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="user-info-area">
                                        <div className="user-pic">
                                            <img src="Images/pic1.jpg" alt="avatar" />
                                            <div className="user-rating">
                                                <span><FaStar/></span>&nbsp;
                                                <span>4.5</span>
                                            </div>
                                        </div>
                                        <div className="user-details">
                                            <h5>Jhon Doe</h5>
                                            <p>
                                                <span>Category: Architechture</span>
                                            </p>
                                            <p>
                                                <FaEnvelope />&nbsp;&nbsp;
                                                <span>example@xyz.com</span>
                                            </p>
                                            <p>
                                                <FaPhoneAlt />&nbsp;&nbsp;
                                                <span>7895412014</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;