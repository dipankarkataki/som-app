import "../Dealer/Dealer.css";
import {FaTrashAlt, FaEnvelope, FaPhoneAlt, FaStar} from 'react-icons/fa';
const ManageDealer = () => {
    return (
        <>
            <div className='page-header mb-3'>
                <h4>Manage Dealer</h4>
                <button type="button" data-bs-toggle="modal" data-bs-target="#addDealerModal" className='btn common-button'>ADD NEW</button>
            </div>
            <div className='row mt-4'>
                <div className='col-md-4 col-sm-6 col-12'>
                    <div className='manage-user-div mb-3'>
                        <div className='card'>
                            <div className='card-body'>
                                <div className='user-info-div'>
                                    <div className='info'>
                                        <img src="Images/pic2.jpg" alt="user-avatar"/>
                                        <div className='rating'>
                                            <FaStar />
                                            <span>4.3</span>
                                        </div>
                                        <div className='user-name'>
                                            <p>Serines Deals and Traders</p>
                                        </div>
                                        <div className='user-contact'>
                                            <p>
                                                <FaEnvelope /> jane.doe@xyz.com
                                            </p>
                                            <p>
                                                <FaPhoneAlt /> 9854123547
                                            </p>
                                            <p>
                                                Location: Ganeshguri
                                            </p>
                                        </div>
                                        <div className='user-referral-code'>
                                            <p>Referral Code: 123456</p>
                                        </div>
                                    </div>
                                    <div className='info-delete-btn'>
                                        <FaTrashAlt />
                                    </div>
                                </div>
                                <div className='user-info-footer'>
                                    <div class="form-check form-switch">
                                        <input class="form-check-input" type="checkbox" id="mySwitch" name="darkmode" value="yes" defaultChecked />
                                    </div>
                                    <div className='view-user-full-info'>
                                        <p data-bs-toggle="modal" data-bs-target="#viewDealerDetails">View Details</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 col-sm-6 col-12'>
                    <div className='manage-user-div mb-3'>
                        <div className='card'>
                            <div className='card-body'>
                                <div className='user-info-div'>
                                    <div className='info'>
                                        <img src="Images/pic2.jpg" alt="user-avatar"/>
                                        <div className='rating'>
                                            <FaStar />
                                            <span>4.3</span>
                                        </div>
                                        <div className='user-name'>
                                            <p>Serines Deals and Traders</p>
                                        </div>
                                        <div className='user-contact'>
                                            <p>
                                                <FaEnvelope /> jane.doe@xyz.com
                                            </p>
                                            <p>
                                                <FaPhoneAlt /> 9854123547
                                            </p>
                                            <p>
                                                Location: Ganeshguri
                                            </p>
                                        </div>
                                        <div className='user-referral-code'>
                                            <p>Referral Code: 123456</p>
                                        </div>
                                    </div>
                                    <div className='info-delete-btn'>
                                        <FaTrashAlt />
                                    </div>
                                </div>
                                <div className='user-info-footer'>
                                    <div class="form-check form-switch">
                                        <input class="form-check-input" type="checkbox" id="mySwitch" name="darkmode" value="yes" defaultChecked />
                                    </div>
                                    <div className='view-user-full-info'>
                                        <p data-bs-toggle="modal" data-bs-target="#viewDealerDetails">View Details</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 col-sm-6 col-12'>
                    <div className='manage-user-div mb-3'>
                        <div className='card'>
                            <div className='card-body'>
                                <div className='user-info-div'>
                                    <div className='info'>
                                        <img src="Images/pic2.jpg" alt="user-avatar"/>
                                        <div className='rating'>
                                            <FaStar />
                                            <span>4.3</span>
                                        </div>
                                        <div className='user-name'>
                                            <p>Serines Deals and Traders</p>
                                        </div>
                                        <div className='user-contact'>
                                            <p>
                                                <FaEnvelope /> jane.doe@xyz.com
                                            </p>
                                            <p>
                                                <FaPhoneAlt /> 9854123547
                                            </p>
                                            <p>
                                                Location: Ganeshguri
                                            </p>
                                        </div>
                                        <div className='user-referral-code'>
                                            <p>Referral Code: 123456</p>
                                        </div>
                                    </div>
                                    <div className='info-delete-btn'>
                                        <FaTrashAlt />
                                    </div>
                                </div>
                                <div className='user-info-footer'>
                                    <div class="form-check form-switch">
                                        <input class="form-check-input" type="checkbox" id="mySwitch" name="darkmode" value="yes" defaultChecked />
                                    </div>
                                    <div className='view-user-full-info'>
                                        <p data-bs-toggle="modal" data-bs-target="#viewDealerDetails">View Details</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 col-sm-6 col-12'>
                    <div className='manage-user-div mb-3'>
                        <div className='card'>
                            <div className='card-body'>
                                <div className='user-info-div'>
                                    <div className='info'>
                                        <img src="Images/pic2.jpg" alt="user-avatar"/>
                                        <div className='rating'>
                                            <FaStar />
                                            <span>4.3</span>
                                        </div>
                                        <div className='user-name'>
                                            <p>Serines Deals and Traders</p>
                                        </div>
                                        <div className='user-contact'>
                                            <p>
                                                <FaEnvelope /> jane.doe@xyz.com
                                            </p>
                                            <p>
                                                <FaPhoneAlt /> 9854123547
                                            </p>
                                            <p>
                                                Location: Ganeshguri
                                            </p>
                                        </div>
                                        <div className='user-referral-code'>
                                            <p>Referral Code: 123456</p>
                                        </div>
                                    </div>
                                    <div className='info-delete-btn'>
                                        <FaTrashAlt />
                                    </div>
                                </div>
                                <div className='user-info-footer'>
                                    <div class="form-check form-switch">
                                        <input class="form-check-input" type="checkbox" id="mySwitch" name="darkmode" value="yes" defaultChecked />
                                    </div>
                                    <div className='view-user-full-info'>
                                        <p data-bs-toggle="modal" data-bs-target="#viewDealerDetails">View Details</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 col-sm-6 col-12'>
                    <div className='manage-user-div mb-3'>
                        <div className='card'>
                            <div className='card-body'>
                                <div className='user-info-div'>
                                    <div className='info'>
                                        <img src="Images/pic2.jpg" alt="user-avatar"/>
                                        <div className='rating'>
                                            <FaStar />
                                            <span>4.3</span>
                                        </div>
                                        <div className='user-name'>
                                            <p>Serines Deals and Traders</p>
                                        </div>
                                        <div className='user-contact'>
                                            <p>
                                                <FaEnvelope /> jane.doe@xyz.com
                                            </p>
                                            <p>
                                                <FaPhoneAlt /> 9854123547
                                            </p>
                                            <p>
                                                Location: Ganeshguri
                                            </p>
                                        </div>
                                        <div className='user-referral-code'>
                                            <p>Referral Code: 123456</p>
                                        </div>
                                    </div>
                                    <div className='info-delete-btn'>
                                        <FaTrashAlt />
                                    </div>
                                </div>
                                <div className='user-info-footer'>
                                    <div class="form-check form-switch">
                                        <input class="form-check-input" type="checkbox" id="mySwitch" name="darkmode" value="yes" defaultChecked />
                                    </div>
                                    <div className='view-user-full-info'>
                                        <p data-bs-toggle="modal" data-bs-target="#viewDealerDetails">View Details</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 col-sm-6 col-12'>
                    <div className='manage-user-div mb-3'>
                        <div className='card'>
                            <div className='card-body'>
                                <div className='user-info-div'>
                                    <div className='info'>
                                        <img src="Images/pic2.jpg" alt="user-avatar"/>
                                        <div className='rating'>
                                            <FaStar />
                                            <span>4.3</span>
                                        </div>
                                        <div className='user-name'>
                                            <p>Serines Deals and Traders</p>
                                        </div>
                                        <div className='user-contact'>
                                            <p>
                                                <FaEnvelope /> jane.doe@xyz.com
                                            </p>
                                            <p>
                                                <FaPhoneAlt /> 9854123547
                                            </p>
                                            <p>
                                                Location: Ganeshguri
                                            </p>
                                        </div>
                                        <div className='user-referral-code'>
                                            <p>Referral Code: 123456</p>
                                        </div>
                                    </div>
                                    <div className='info-delete-btn'>
                                        <FaTrashAlt />
                                    </div>
                                </div>
                                <div className='user-info-footer'>
                                    <div class="form-check form-switch">
                                        <input class="form-check-input" type="checkbox" id="mySwitch" name="darkmode" value="yes" defaultChecked />
                                    </div>
                                    <div className='view-user-full-info'>
                                        <p data-bs-toggle="modal" data-bs-target="#viewDealerDetails">View Details</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 col-sm-6 col-12'>
                    <div className='manage-user-div mb-3'>
                        <div className='card'>
                            <div className='card-body'>
                                <div className='user-info-div'>
                                    <div className='info'>
                                        <img src="Images/pic2.jpg" alt="user-avatar"/>
                                        <div className='rating'>
                                            <FaStar />
                                            <span>4.3</span>
                                        </div>
                                        <div className='user-name'>
                                            <p>Serines Deals and Traders</p>
                                        </div>
                                        <div className='user-contact'>
                                            <p>
                                                <FaEnvelope /> jane.doe@xyz.com
                                            </p>
                                            <p>
                                                <FaPhoneAlt /> 9854123547
                                            </p>
                                            <p>
                                                Location: Ganeshguri
                                            </p>
                                        </div>
                                        <div className='user-referral-code'>
                                            <p>Referral Code: 123456</p>
                                        </div>
                                    </div>
                                    <div className='info-delete-btn'>
                                        <FaTrashAlt />
                                    </div>
                                </div>
                                <div className='user-info-footer'>
                                    <div class="form-check form-switch">
                                        <input class="form-check-input" type="checkbox" id="mySwitch" name="darkmode" value="yes" defaultChecked />
                                    </div>
                                    <div className='view-user-full-info'>
                                        <p data-bs-toggle="modal" data-bs-target="#viewDealerDetails">View Details</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 col-sm-6 col-12'>
                    <div className='manage-user-div mb-3'>
                        <div className='card'>
                            <div className='card-body'>
                                <div className='user-info-div'>
                                    <div className='info'>
                                        <img src="Images/pic2.jpg" alt="user-avatar"/>
                                        <div className='rating'>
                                            <FaStar />
                                            <span>4.3</span>
                                        </div>
                                        <div className='user-name'>
                                            <p>Serines Deals and Traders</p>
                                        </div>
                                        <div className='user-contact'>
                                            <p>
                                                <FaEnvelope /> jane.doe@xyz.com
                                            </p>
                                            <p>
                                                <FaPhoneAlt /> 9854123547
                                            </p>
                                            <p>
                                                Location: Ganeshguri
                                            </p>
                                        </div>
                                        <div className='user-referral-code'>
                                            <p>Referral Code: 123456</p>
                                        </div>
                                    </div>
                                    <div className='info-delete-btn'>
                                        <FaTrashAlt />
                                    </div>
                                </div>
                                <div className='user-info-footer'>
                                    <div class="form-check form-switch">
                                        <input class="form-check-input" type="checkbox" id="mySwitch" name="darkmode" value="yes" defaultChecked />
                                    </div>
                                    <div className='view-user-full-info'>
                                        <p data-bs-toggle="modal" data-bs-target="#viewDealerDetails">View Details</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/************************ Add Dealer Modal *********************/}

            <div className="modal" id="addDealerModal">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title"> Add New Dealer</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body">
                            <form className='form-horizontal'>
                                <div className='row'>
                                    <div className='col-md-6 col-sm-12'>
                                        <div className='mb-3'>
                                            <input type="text" name="userName" className="form-control" placeholder="User name" />
                                        </div>
                                        <div className='mb-3'>
                                            <textarea name="description" className="form-control" rows="7" placeholder="Description:"></textarea>
                                        </div>
                                        <div className='mb-3'>
                                            <input type="text" name="location" className="form-control" placeholder="Location:" />
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-sm-12'>
                                        <div className='mb-3'>
                                            <label class="form-label">Images</label>
                                            <input type="file" name="image" className="form-control" placeholder="User name" />
                                        </div>
                                        <div className='mb-3'>
                                            <textarea name="otherDetails" className="form-control" rows="8" placeholder="Other Details" ></textarea>
                                        </div>
                                    </div>
                                </div>
                                
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" data-bs-dismiss="modal" className='btn common-button'>Save</button>
                        </div>
                    </div>
                </div>
            </div>

            {/************************ View Dealer Details *********************/}
            <div className="modal" id="viewDealerDetails">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div class="modal-header text-center">
                            <h4 class="modal-title">Dealer Details</h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body">
                            <div className='dealer-modal-info-area'>
                                <div className='logo-and-info'>
                                    <div className='logo'>
                                        <img src="Images/pic2.jpg" alt="user-avatar"/>
                                        <div className='rating'>
                                            <FaStar />
                                            <span>4.3</span>
                                        </div>
                                    </div>
                                    <div className='info'>
                                        <div className='user-name'>
                                            <p>Serines Deals and Traders</p>
                                        </div>
                                        <div className='user-contact'>
                                            <p>
                                                <FaEnvelope /> jane.doe@xyz.com
                                            </p>
                                            <p>
                                                <FaPhoneAlt /> 9854123547
                                            </p>
                                            <p>
                                                Location: Ganeshguri
                                            </p>
                                        </div>
                                        <div className='user-referral-code'>
                                            <p>Referral Code: 123456</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='location'>
                                    <iframe title="map-frame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7162.664990144249!2d91.77925802633897!3d26.153298814256594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a591866013303%3A0x9a010eab0d7c7802!2sGaneshguri%2C%20Guwahati%2C%20Assam!5e0!3m2!1sen!2sin!4v1655846753251!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                            <div className='dealer-modal-products'>
                                <h5>Product Catalog</h5>
                                <div className='row'>
                                    <div className='col-md-4 col-sm-12'>
                                        <div className='card mb-3'>
                                            <div className='card-body'>
                                                <img src="Images/product.jpg" alt="product" />
                                                <h6 className='mt-3'>MBC Steel</h6>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-4 col-sm-12'>
                                        <div className='card mb-3'>
                                            <div className='card-body'>
                                                <img src="Images/product.jpg" alt="product" />
                                                <h6 className='mt-3'>MBC Steel</h6>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-4 col-sm-12'>
                                        <div className='card mb-3'>
                                            <div className='card-body'>
                                                <img src="Images/product.jpg" alt="product" />
                                                <h6 className='mt-3'>MBC Steel</h6>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-4 col-sm-12'>
                                        <div className='card mb-3'>
                                            <div className='card-body'>
                                                <img src="Images/product.jpg" alt="product" />
                                                <h6 className='mt-3'>MBC Steel</h6>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-4 col-sm-12'>
                                        <div className='card mb-3'>
                                            <div className='card-body'>
                                                <img src="Images/product.jpg" alt="product" />
                                                <h6 className='mt-3'>MBC Steel</h6>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-4 col-sm-12'>
                                        <div className='card mb-3'>
                                            <div className='card-body'>
                                                <img src="Images/product.jpg" alt="product" />
                                                <h6 className='mt-3'>MBC Steel</h6>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" data-bs-dismiss="modal" className='btn common-button'>Save</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ManageDealer;