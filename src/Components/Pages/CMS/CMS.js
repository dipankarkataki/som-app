import "../CMS/CMS.css";
import { FaPlus } from "react-icons/fa";

const CMS = () => {
    return (
        <>
            <div className='page-header mb-3'>
                <h4>CMS</h4>
            </div>
            <div className="row">
                <div className="col-md-8 col-sm-12">
                    <div className="about-us">
                        <h5 className="mb-3">About us</h5>
                        <div className="row">
                            <div className="col-md-7 col-sm-12">
                                <div className="mb-2">
                                    <label className="form-label">Main Header:</label>
                                    <input type="text" name="mainHeader" Placeholder="Type here..." className="form-control"/>
                                </div>
                                <div className="mb-2">
                                    <textarea name="contentAboutUs" rows="4"  className="form-control" placeholder="Content here..."></textarea>
                                </div>
                            </div>
                            <div className="col-md-5 col-sm-12">
                                <div className="about-us-img mt-2">
                                    <label className="form-label"><FaPlus /></label>&nbsp;&nbsp;
                                    <label className="form-label">Add Image</label>
                                </div>
                                {/* <input type="file" className="form-control" name="aboutUsImg" /> */}
                            </div>
                        </div>
                    </div>

                    <hr className="mt-4 mb-4"/>

                    <div className="how-it-works">
                        <h5>How It Works</h5>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="mb-2">
                                    <label className="form-label">Main Header:</label>
                                    <input type="text" name="helpMainHeader" Placeholder="Type here..." className="form-control"/>
                                </div>
                                <div className="mb-2">
                                    <textarea name="contentHelp" rows="4"  className="form-control" placeholder="Content here..."></textarea>
                                </div>
                                <div className="how-it-works-img mt-2">
                                    <label className="form-label"><FaPlus /></label>&nbsp;&nbsp;
                                    <label className="form-label">Add Image</label>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="mb-2">
                                    <label className="form-label">Main Header:</label>
                                    <input type="text" name="helpMainHeader" Placeholder="Type here..." className="form-control"/>
                                </div>
                                <div className="mb-2">
                                    <textarea name="contentHelp" rows="4"  className="form-control" placeholder="Content here..."></textarea>
                                </div>
                                <div className="how-it-works-img mt-2">
                                    <label className="form-label"><FaPlus /></label>&nbsp;&nbsp;
                                    <label className="form-label">Add Image</label>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="mb-2">
                                    <label className="form-label">Main Header:</label>
                                    <input type="text" name="helpMainHeader" Placeholder="Type here..." className="form-control"/>
                                </div>
                                <div className="mb-2">
                                    <textarea name="contentHelp" rows="4"  className="form-control" placeholder="Content here..."></textarea>
                                </div>
                                <div className="how-it-works-img mt-2">
                                    <label className="form-label"><FaPlus /></label>&nbsp;&nbsp;
                                    <label className="form-label">Add Image</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className="mt-4 mb-4"/>

                    <div className="help mb-3">
                        <h5>Help</h5>
                        <div className="row">
                            <div className="col-md-7 col-sm-12">
                                <div className="mb-2">
                                    <label className="form-label">Main Header:</label>
                                    <input type="text" name="helpMainHeader" Placeholder="Type here..." className="form-control"/>
                                </div>
                                <div className="mb-2">
                                    <textarea name="contentHelp" rows="4"  className="form-control" placeholder="Content here..."></textarea>
                                </div>
                            </div>
                            <div className="col-md-5 col-sm-12">
                                <div className="help-img mt-2">
                                    <label className="form-label"><FaPlus /></label>&nbsp;&nbsp;
                                    <label className="form-label">Add Image</label>
                                </div>
                                {/* <input type="file" className="form-control" name="aboutUsImg" /> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-12">
                    <h5 className="mb-4">Contact Us Messages</h5>
                    <div className="message-div mb-3">
                        <p className="user-name">Alok Das</p>
                        <div className="user-contact-info">
                            <span>7894561234</span>
                            <span>example@xyz.com</span>
                        </div>
                        <p className="subject">
                            Subject: <span>Lorem ipsum dolor sit amet, consectetur.</span>
                        </p>
                        <p className="msg-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        </p>
                    </div>
                    <div className="message-div mb-3">
                        <p className="user-name">Alok Das</p>
                        <div className="user-contact-info">
                            <span>7894561234</span>
                            <span>example@xyz.com</span>
                        </div>
                        <p className="subject">
                            Subject: <span>Lorem ipsum dolor sit amet, consectetur.</span>
                        </p>
                        <p className="msg-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        </p>
                    </div>
                    <div className="message-div mb-3">
                        <p className="user-name">Alok Das</p>
                        <div className="user-contact-info">
                            <span>7894561234</span>
                            <span>example@xyz.com</span>
                        </div>
                        <p className="subject">
                            Subject: <span>Lorem ipsum dolor sit amet, consectetur.</span>
                        </p>
                        <p className="msg-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        </p>
                    </div>
                    <div className="message-div mb-3">
                        <p className="user-name">Alok Das</p>
                        <div className="user-contact-info">
                            <span>7894561234</span>
                            <span>example@xyz.com</span>
                        </div>
                        <p className="subject">
                            Subject: <span>Lorem ipsum dolor sit amet, consectetur.</span>
                        </p>
                        <p className="msg-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        </p>
                    </div>
                    <div className="message-div mb-3">
                        <p className="user-name">Alok Das</p>
                        <div className="user-contact-info">
                            <span>7894561234</span>
                            <span>example@xyz.com</span>
                        </div>
                        <p className="subject">
                            Subject: <span>Lorem ipsum dolor sit amet, consectetur.</span>
                        </p>
                        <p className="msg-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        </p>
                    </div>
                    <div className="message-div mb-3">
                        <p className="user-name">Alok Das</p>
                        <div className="user-contact-info">
                            <span>7894561234</span>
                            <span>example@xyz.com</span>
                        </div>
                        <p className="subject">
                            Subject: <span>Lorem ipsum dolor sit amet, consectetur.</span>
                        </p>
                        <p className="msg-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CMS;