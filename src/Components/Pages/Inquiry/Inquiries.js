import "../Inquiry/Inquiry.css";
import { FaEnvelope , FaPhoneAlt, FaTelegramPlane} from "react-icons/fa";

const Inquiries = () => {


    const partnerTabBtnFunction = () => {
        let inquiryPartnerTab = document.querySelector('.inquiry-partner-btn');
        let inquiryPartnerDiv = document.querySelector('.inquiry-partner');

        let inquiryDealerBtn = document.querySelector('.inquiry-dealer-btn');
        let inquiryDealerDiv = document.querySelector('.inquiry-dealer');

        if(inquiryPartnerTab.classList[0] === 'inquiry-partner-btn'){
            inquiryDealerBtn.classList.remove('inquiry-tab-active')
            inquiryPartnerTab.classList.add('inquiry-tab-active')
            inquiryPartnerDiv.style.display = "block";
            inquiryDealerDiv.style.display = "none";

        }
    }

    const dealerTabBtnFunction = () => {
        let inquiryPartnerTab = document.querySelector('.inquiry-partner-btn');
        let inquiryPartnerDiv = document.querySelector('.inquiry-partner');

        let inquiryDealerBtn = document.querySelector('.inquiry-dealer-btn');
        let inquiryDealerDiv = document.querySelector('.inquiry-dealer');

        if(inquiryDealerBtn.classList[0] === 'inquiry-dealer-btn'){
            inquiryPartnerTab.classList.remove('inquiry-tab-active')
            inquiryDealerBtn.classList.add('inquiry-tab-active')
            inquiryPartnerDiv.style.display = "none";
            inquiryDealerDiv.style.display = "block";
        }
    }

    return (
        <>
            <div className='inquiry-page-header mb-3'>
                <h4>Inquiries</h4>
                <div className='toggle-inquiry-tab'>
                    <p className='inquiry-partner-btn inquiry-tab-active' onClick={partnerTabBtnFunction}>Partner</p>
                    <p className='inquiry-dealer-btn' onClick={dealerTabBtnFunction}>Dealer</p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-8 col-md-6 col-sm-12">
                    <div className='inquiries-list'>
                        <div className="inquiry-partner">
                            <h4>Denial Jhon Partner</h4>
                            <div className="inquiry-info">
                                <p><span>Category:</span> Architecture</p>
                                <p><span><FaEnvelope /> :</span> denialjhon@example.com</p>
                                <p><span><FaPhoneAlt /> :</span> 7895412354</p>
                            </div>
                            <div className="inquiry-description">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                            <div className="message-back">
                                <p>Message Back</p>
                            </div>
                        </div>
                        <div className="inquiry-dealer" style={{display : "none"}}>
                            <h4>John Maddock</h4>
                            <div className="inquiry-info">
                                <p><span>Category:</span> Dealer</p>
                                <p><span><FaEnvelope /> :</span> denialjhon@example.com</p>
                                <p><span><FaPhoneAlt /> :</span> 7895412354</p>
                            </div>
                            <div className="inquiry-description">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            </div>
                            <div className="message-back">
                                <p>Message Back</p>
                            </div>
                        </div>
                        <hr />
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className='inquiry-message'>
                        <div className="user">
                            <h6>Denial John Partner</h6>
                            <p>Subject: example</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna.
                            </p>
                        </div>
                        <div className="admin">
                            <h6>Admin</h6>
                            <p>Subject: example</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore.
                            </p>
                            <div className="input-group mb-3">
                                <input type="text" class="form-control mt-3" placeholder="Message here..." />
                                <button className="btn btn-success mt-3" type="submit">
                                    <FaTelegramPlane />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Inquiries;