import "../Dashboard/Dashboard.css";
import {FaUsers, FaRegHandshake, FaAddressBook, FaBoxes, FaEnvelope, FaPhoneAlt, FaStar} from 'react-icons/fa';

const  Dashboard = () =>{
    return (
        <>
            <div className='page-header mb-3'>
                <h4>Dashboard</h4>
            </div>
            <div className='overview-number-cards mb-3'>
                <div className='row'>
                    <div className='col-lg-3 col-md-6 col-sm-12 mb-3'>
                        <div className='card'>
                            <div className='card-body'>
                                <div className='card-icon'>
                                    <FaUsers/>
                                </div>
                                <div className='card-content'>
                                    <p>Users</p>
                                    <h3>1000</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12 mb-3'>
                        <div className='card'>
                            <div className='card-body'>
                                <div className='card-icon'>
                                    <FaRegHandshake/>
                                </div>
                                <div className='card-content'>
                                    <p>Partners</p>
                                    <h3>1000</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12 mb-3'>
                        <div className='card'>
                            <div className='card-body'>
                                <div className='card-icon'>
                                    <FaAddressBook/>
                                </div>
                                <div className='card-content'>
                                    <p>Dealers</p>
                                    <h3>1000</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12 mb-3'>
                        <div className='card'>
                            <div className='card-body'>
                                <div className='card-icon'>
                                    <FaBoxes/>
                                </div>
                                <div className='card-content'>
                                    <p>Products</p>
                                    <h3>1000</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='overview-last-new-added-user-card'>
                <div className='row'>
                    <div className='col-lg-4 col-md-12 col-sm-12 mb-3'>
                        <div className='card'>
                            <div className='card-body'>
                                <div className='header mb-4'>
                                    <p>Last 3 New Users</p>
                                </div>
                                <div className='card-content mb-3'>
                                    <div className='image-area'>
                                        <img src="./../../../.././Images/pic2.jpg" alt="last-new-user-avatr"/>
                                    </div>
                                    <div className='description'>
                                        <h6>Daniel Craig</h6>
                                        <p>Location: Ganeshguri</p>

                                        <div className='email'>
                                            <span><FaEnvelope /></span>&nbsp;&nbsp;
                                            <span>example@gmail.com</span>
                                        </div>
                                        <div className='phone'>
                                            <span><FaPhoneAlt /></span>&nbsp;&nbsp;
                                            <span>7895421502</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='card-content mb-3'>
                                    <div className='image-area'>
                                        <img src="./../../../.././Images/pic2.jpg" alt="last-new-user-avatr"/>
                                    </div>
                                    <div className='description'>
                                        <h6>Daniel Craig</h6>
                                        <p>Location: Ganeshguri</p>

                                        <div className='email'>
                                            <span><FaEnvelope /></span>&nbsp;&nbsp;
                                            <span>example@gmail.com</span>
                                        </div>
                                        <div className='phone'>
                                            <span><FaPhoneAlt /></span>&nbsp;&nbsp;
                                            <span>7895421502</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='card-content mb-3'>
                                    <div className='image-area'>
                                        <img src="./../../../.././Images/pic2.jpg" alt="last-new-user-avatr"/>
                                    </div>
                                    <div className='description'>
                                        <h6>Daniel Craig</h6>
                                        <p>Location: Ganeshguri</p>

                                        <div className='email'>
                                            <span><FaEnvelope /></span>&nbsp;&nbsp;
                                            <span>example@gmail.com</span>
                                        </div>
                                        <div className='phone'>
                                            <span><FaPhoneAlt /></span>&nbsp;&nbsp;
                                            <span>7895421502</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-12 mb-3'>
                        <div className='card'>
                            <div className='card-body'>
                                <div className='header mb-4'>
                                    <p>Last 3 New Dealers</p>
                                </div>
                                <div className='card-content mb-3'>
                                    <div className='image-area'>
                                        <img src="./../../../.././Images/1.jpg" alt="last-new-user-avatr"/>
                                        <p><FaStar/> &nbsp;4.5</p>
                                    </div>
                                    <div className='description'>
                                        <h6>Serines Deals and Traders</h6>
                                        <p>Location: Ganeshguri</p>
                                        <div className='email'>
                                            <span><FaEnvelope /></span>&nbsp;&nbsp;
                                            <span>example@gmail.com</span>
                                        </div>
                                        <div className='phone'>
                                            <span><FaPhoneAlt /></span>&nbsp;&nbsp;
                                            <span>7895421502</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='card-content mb-3'>
                                    <div className='image-area'>
                                        <img src="./../../../.././Images/1.jpg" alt="last-new-user-avatr"/>
                                        <p><FaStar/> &nbsp;4.5</p>
                                    </div>
                                    <div className='description'>
                                        <h6>Serines Deals and Traders</h6>
                                        <p>Location: Ganeshguri</p>
                                        <div className='email'>
                                            <span><FaEnvelope /></span>&nbsp;&nbsp;
                                            <span>example@gmail.com</span>
                                        </div>
                                        <div className='phone'>
                                            <span><FaPhoneAlt /></span>&nbsp;&nbsp;
                                            <span>7895421502</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='card-content mb-3'>
                                    <div className='image-area'>
                                        <img src="./../../../.././Images/1.jpg" alt="last-new-user-avatr"/>
                                        <p><FaStar/> &nbsp;4.5</p>
                                    </div>
                                    <div className='description'>
                                        <h6>Serines Deals and Traders</h6>
                                        <p>Location: Ganeshguri</p>
                                        <div className='email'>
                                            <span><FaEnvelope /></span>&nbsp;&nbsp;
                                            <span>example@gmail.com</span>
                                        </div>
                                        <div className='phone'>
                                            <span><FaPhoneAlt /></span>&nbsp;&nbsp;
                                            <span>7895421502</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-12 mb-3'>
                        <div className='card'>
                            <div className='card-body'>
                                <div className='header mb-4'>
                                    <p>Last 3 New Partners</p>
                                </div>
                                <div className='card-content mb-3'>
                                    <div className='image-area'>
                                        <img src="./../../../.././Images/2.jpg" alt="last-new-user-avatr"/>
                                        <p><FaStar/> &nbsp;4.5</p>
                                    </div>
                                    <div className='description'>
                                        <h6>Julia Roberts</h6>
                                        <p>Category: Architecture</p>
                                        <div className='email'>
                                            <span><FaEnvelope /></span>&nbsp;&nbsp;
                                            <span>example@gmail.com</span>
                                        </div>
                                        <div className='phone'>
                                            <span><FaPhoneAlt /></span>&nbsp;&nbsp;
                                            <span>7895421502</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='card-content mb-3'>
                                    <div className='image-area'>
                                        <img src="./../../../.././Images/2.jpg" alt="last-new-user-avatr"/>
                                        <p><FaStar/> &nbsp;4.5</p>
                                    </div>
                                    <div className='description'>
                                        <h6>Julia Roberts</h6>
                                        <p>Category: Architecture</p>
                                        <div className='email'>
                                            <span><FaEnvelope /></span>&nbsp;&nbsp;
                                            <span>example@gmail.com</span>
                                        </div>
                                        <div className='phone'>
                                            <span><FaPhoneAlt /></span>&nbsp;&nbsp;
                                            <span>7895421502</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='card-content mb-3'>
                                    <div className='image-area'>
                                        <img src="./../../../.././Images/2.jpg" alt="last-new-user-avatr"/>
                                        <p><FaStar/> &nbsp;4.5</p>
                                    </div>
                                    <div className='description'>
                                        <h6>Julia Roberts</h6>
                                        <p>Category: Architecture</p>
                                        <div className='email'>
                                            <span><FaEnvelope /></span>&nbsp;&nbsp;
                                            <span>example@gmail.com</span>
                                        </div>
                                        <div className='phone'>
                                            <span><FaPhoneAlt /></span>&nbsp;&nbsp;
                                            <span>7895421502</span>
                                        </div>
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