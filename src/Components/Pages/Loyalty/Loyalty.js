import { FaMapMarkerAlt, FaTrashAlt } from "react-icons/fa";
import "../Loyalty/Loyalty.css";

const LoyaltyPoints = () => {

    const partnerQuizTabBtnFunction = () => {
        let quizPartnerTab = document.querySelector('.quiz-partner-btn');
        let quizPartnerDiv = document.querySelector('.quiz-partner');

        let quizDealerBtn = document.querySelector('.quiz-dealer-btn');
        let quizDealerDiv = document.querySelector('.quiz-dealer');

        if(quizPartnerTab.classList[0] === 'quiz-partner-btn'){
            quizDealerBtn.classList.remove('quiz-tab-active')
            quizPartnerTab.classList.add('quiz-tab-active')
            quizPartnerDiv.style.display = "block";
            quizDealerDiv.style.display = "none";

        }
    }

    const dealerQuizTabBtnFunction = () => {
        let quizPartnerTab = document.querySelector('.quiz-partner-btn');
        let quizPartnerDiv = document.querySelector('.quiz-partner');

        let quizDealerBtn = document.querySelector('.quiz-dealer-btn');
        let quizDealerDiv = document.querySelector('.quiz-dealer');

        if(quizDealerBtn.classList[0] === 'quiz-dealer-btn'){
            quizPartnerTab.classList.remove('quiz-tab-active')
            quizDealerBtn.classList.add('quiz-tab-active')
            quizPartnerDiv.style.display = "none";
            quizDealerDiv.style.display = "block";
        }
    }



    return (
        <>
            <div className='page-header mb-3'>
                <div className="name">
                    <h4>Loyalty Points</h4>
                    <p className='quiz-partner-btn quiz-tab-active' onClick={partnerQuizTabBtnFunction}>Partner</p>
                    <p className='quiz-dealer-btn' onClick={dealerQuizTabBtnFunction}>Dealer</p>
                </div>
                <button type="button" data-bs-toggle="modal" data-bs-target="#addLoyaltyModal" className='btn common-button'>ADD NEW</button>
            </div>

            <div className="row">
                <div className="col-sm-12">
                    <div className='quiz-list'>
                        <div className="quiz-partner">
                            <div className="row">
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                    <div className="card mb-3">
                                        <div className="card-body">
                                            <h4>Loyalty Points</h4>
                                            <p className="point">700</p>
                                            <div className="description">
                                                <h6>MBC Steel</h6>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
                                                </p>
                                                <p>
                                                    <FaMapMarkerAlt /> Location: Ganeshguri
                                                </p>
                                            </div>
                                            <div className="delete-update">
                                                <FaTrashAlt />
                                                <p>Update</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                    <div className="card mb-3">
                                        <div className="card-body">
                                            <h4>Loyalty Points</h4>
                                            <p className="point">700</p>
                                            <div className="description">
                                                <h6>MBC Steel</h6>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
                                                </p>
                                                <p>
                                                    <FaMapMarkerAlt /> Location: Ganeshguri
                                                </p>
                                            </div>
                                            <div className="delete-update">
                                                <FaTrashAlt />
                                                <p>Update</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                    <div className="card mb-3">
                                        <div className="card-body">
                                            <h4>Loyalty Points</h4>
                                            <p className="point">700</p>
                                            <div className="description">
                                                <h6>MBC Steel</h6>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
                                                </p>
                                                <p>
                                                    <FaMapMarkerAlt /> Location: Ganeshguri
                                                </p>
                                            </div>
                                            <div className="delete-update">
                                                <FaTrashAlt />
                                                <p>Update</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                    <div className="card mb-3">
                                        <div className="card-body">
                                            <h4>Loyalty Points</h4>
                                            <p className="point">700</p>
                                            <div className="description">
                                                <h6>MBC Steel</h6>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
                                                </p>
                                                <p>
                                                    <FaMapMarkerAlt /> Location: Ganeshguri
                                                </p>
                                            </div>
                                            <div className="delete-update">
                                                <FaTrashAlt />
                                                <p>Update</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                    <div className="card mb-3">
                                        <div className="card-body">
                                            <h4>Loyalty Points</h4>
                                            <p className="point">700</p>
                                            <div className="description">
                                                <h6>MBC Steel</h6>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
                                                </p>
                                                <p>
                                                    <FaMapMarkerAlt /> Location: Ganeshguri
                                                </p>
                                            </div>
                                            <div className="delete-update">
                                                <FaTrashAlt />
                                                <p>Update</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                    <div className="card mb-3">
                                        <div className="card-body">
                                            <h4>Loyalty Points</h4>
                                            <p className="point">700</p>
                                            <div className="description">
                                                <h6>MBC Steel</h6>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
                                                </p>
                                                <p>
                                                    <FaMapMarkerAlt /> Location: Ganeshguri
                                                </p>
                                            </div>
                                            <div className="delete-update">
                                                <FaTrashAlt />
                                                <p>Update</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                    <div className="card mb-3">
                                        <div className="card-body">
                                            <h4>Loyalty Points</h4>
                                            <p className="point">700</p>
                                            <div className="description">
                                                <h6>MBC Steel</h6>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
                                                </p>
                                                <p>
                                                    <FaMapMarkerAlt /> Location: Ganeshguri
                                                </p>
                                            </div>
                                            <div className="delete-update">
                                                <FaTrashAlt />
                                                <p>Update</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                    <div className="card mb-3">
                                        <div className="card-body">
                                            <h4>Loyalty Points</h4>
                                            <p className="point">700</p>
                                            <div className="description">
                                                <h6>MBC Steel</h6>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
                                                </p>
                                                <p>
                                                    <FaMapMarkerAlt /> Location: Ganeshguri
                                                </p>
                                            </div>
                                            <div className="delete-update">
                                                <FaTrashAlt />
                                                <p>Update</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                    <div className="card mb-3">
                                        <div className="card-body">
                                            <h4>Loyalty Points</h4>
                                            <p className="point">700</p>
                                            <div className="description">
                                                <h6>MBC Steel</h6>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
                                                </p>
                                                <p>
                                                    <FaMapMarkerAlt /> Location: Ganeshguri
                                                </p>
                                            </div>
                                            <div className="delete-update">
                                                <FaTrashAlt />
                                                <p>Update</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="quiz-dealer" style={{display : "none"}}>
                            <h4>John Maddock</h4>
                        </div>
                    </div>
                </div>
            </div>


            <div className="modal" id="addLoyaltyModal">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title"> Add New Point</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body">
                            <form className='form-horizontal'>
                                <div className='mb-3'>
                                    <input type="text" name="partnerName" className="form-control" placeholder="Partner Name" />
                                </div>
                                <div className='mb-3'>
                                    <input type="text" name="loyaltyPoint" className="form-control" placeholder="Loyalty Point" />
                                </div>
                                <div className='mb-3'>
                                    <input type="text" name="referralPoint" className="form-control" placeholder="Referral Signup Points" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" data-bs-dismiss="modal" className='btn common-button'>ADD POINTS</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoyaltyPoints;