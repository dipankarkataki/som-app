import "../User/User.css";
import {FaTrashAlt, FaEnvelope, FaPhoneAlt} from 'react-icons/fa';

const ManageUser = () => { 
    return (
        <>
            <div className='page-header mb-3'>
                <h4>Manage Users</h4>
                <button type="button" data-bs-toggle="modal" data-bs-target="#addUserModal" className='btn common-button'>ADD NEW</button>
            </div>
            <div className='row mt-4'>
                <div className='col-lg-3 col-md-4 col-sm-6 col-12'>
                    <div className='manage-user-div mb-3'>
                        <div className='card'>
                            <div className='card-body'>
                                <div className='user-info-div'>
                                    <div className='info'>
                                        <img src="Images/5.jpg" alt="user-avatar"/>
                                        <div className='user-name'>
                                            <p>Jane Doe</p>
                                        </div>
                                        <div className='user-contact'>
                                            <p>
                                                <FaEnvelope /> jane.doe@xyz.com
                                            </p>
                                            <p>
                                                <FaPhoneAlt /> 9854123547
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
                                        <p>View Details</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-3 col-md-4 col-sm-6 col-12'>
                    <div className='manage-user-div mb-3'>
                        <div className='card'>
                            <div className='card-body'>
                                <div className='user-info-div'>
                                    <div className='info'>
                                        <img src="Images/5.jpg" alt="user-avatar"/>
                                        <div className='user-name'>
                                            <p>Jane Doe</p>
                                        </div>
                                        <div className='user-contact'>
                                            <p>
                                                <FaEnvelope /> jane.doe@xyz.com
                                            </p>
                                            <p>
                                                <FaPhoneAlt /> 9854123547
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
                                        <p>View Details</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-3 col-md-4 col-sm-6 col-12'>
                    <div className='manage-user-div mb-3'>
                        <div className='card'>
                            <div className='card-body'>
                                <div className='user-info-div'>
                                    <div className='info'>
                                        <img src="Images/5.jpg" alt="user-avatar"/>
                                        <div className='user-name'>
                                            <p>Jane Doe</p>
                                        </div>
                                        <div className='user-contact'>
                                            <p>
                                                <FaEnvelope /> jane.doe@xyz.com
                                            </p>
                                            <p>
                                                <FaPhoneAlt /> 9854123547
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
                                        <p>View Details</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-3 col-md-4 col-sm-6 col-12'>
                    <div className='manage-user-div mb-3'>
                        <div className='card'>
                            <div className='card-body'>
                                <div className='user-info-div'>
                                    <div className='info'>
                                        <img src="Images/5.jpg" alt="user-avatar"/>
                                        <div className='user-name'>
                                            <p>Jane Doe</p>
                                        </div>
                                        <div className='user-contact'>
                                            <p>
                                                <FaEnvelope /> jane.doe@xyz.com
                                            </p>
                                            <p>
                                                <FaPhoneAlt /> 9854123547
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
                                        <p>View Details</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-3 col-md-4 col-sm-6 col-12'>
                    <div className='manage-user-div mb-3'>
                        <div className='card'>
                            <div className='card-body'>
                                <div className='user-info-div'>
                                    <div className='info'>
                                        <img src="Images/5.jpg" alt="user-avatar"/>
                                        <div className='user-name'>
                                            <p>Jane Doe</p>
                                        </div>
                                        <div className='user-contact'>
                                            <p>
                                                <FaEnvelope /> jane.doe@xyz.com
                                            </p>
                                            <p>
                                                <FaPhoneAlt /> 9854123547
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
                                        <p>View Details</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-3 col-md-4 col-sm-6 col-12'>
                    <div className='manage-user-div mb-3'>
                        <div className='card'>
                            <div className='card-body'>
                                <div className='user-info-div'>
                                    <div className='info'>
                                        <img src="Images/5.jpg" alt="user-avatar"/>
                                        <div className='user-name'>
                                            <p>Jane Doe</p>
                                        </div>
                                        <div className='user-contact'>
                                            <p>
                                                <FaEnvelope /> jane.doe@xyz.com
                                            </p>
                                            <p>
                                                <FaPhoneAlt /> 9854123547
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
                                        <p>View Details</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-3 col-md-4 col-sm-6 col-12'>
                    <div className='manage-user-div mb-3'>
                        <div className='card'>
                            <div className='card-body'>
                                <div className='user-info-div'>
                                    <div className='info'>
                                        <img src="Images/5.jpg" alt="user-avatar"/>
                                        <div className='user-name'>
                                            <p>Jane Doe</p>
                                        </div>
                                        <div className='user-contact'>
                                            <p>
                                                <FaEnvelope /> jane.doe@xyz.com
                                            </p>
                                            <p>
                                                <FaPhoneAlt /> 9854123547
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
                                        <p>View Details</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-3 col-md-4 col-sm-6 col-12'>
                    <div className='manage-user-div mb-3'>
                        <div className='card'>
                            <div className='card-body'>
                                <div className='user-info-div'>
                                    <div className='info'>
                                        <img src="Images/5.jpg" alt="user-avatar"/>
                                        <div className='user-name'>
                                            <p>Jane Doe</p>
                                        </div>
                                        <div className='user-contact'>
                                            <p>
                                                <FaEnvelope /> jane.doe@xyz.com
                                            </p>
                                            <p>
                                                <FaPhoneAlt /> 9854123547
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
                                        <p>View Details</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal" id="addUserModal">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header text-center">
                            <h4 class="modal-title">Add New User</h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">
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
                        <div class="modal-footer">
                            <button type="button" data-bs-dismiss="modal" className='btn common-button'>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ManageUser;