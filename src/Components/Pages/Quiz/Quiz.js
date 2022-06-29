import "../Quiz/Quiz.css";

const Quiz = () => {
    
    let progresStartValue = 0;
    let progresEndValue = 50;
    let speed = 50;

    let fullProgresStartValue = 0;
    let fullProgresEndValue = 100;

    let progress = setInterval(() => {
        let circularProgressBar = document.querySelector('.circular-progress-bar');
        let progressValueContainer = document.querySelector('.progress-value-container');

        progresStartValue++;
        progressValueContainer.textContent = `${progresStartValue}%`;
        circularProgressBar.style.background = `conic-gradient(
            rgb(230, 77, 6) ${progresStartValue * 3.6}deg,
            #000 ${progresStartValue * 3.6}deg
        )`;
        if (progresStartValue == progresEndValue) {
          clearInterval(progress);
        }
      }, speed);

    let fullProgress = setInterval(() => {
        let fullCircularProgressBar = document.querySelector('.full-circular-progress-bar');
        let fullProgressValueContainer = document.querySelector('.full-progress-value-container');

        fullProgresStartValue++;
        fullProgressValueContainer.textContent = `${fullProgresStartValue}%`;
        fullCircularProgressBar.style.background = `conic-gradient(
            rgb(230, 77, 6) ${fullProgresStartValue * 3.6}deg,
             #000 ${fullProgresStartValue * 3.6}deg
        )`;
        if (fullProgresStartValue == fullProgresEndValue) {
          clearInterval(fullProgress);
        }
      }, speed);

    return (
        <>
            <div className='page-header mb-3'>
                <h4>Quiz</h4>
                <button type="button" data-bs-toggle="modal" data-bs-target="#addQuizModal" className='btn common-button'>ADD NEW</button>
            </div>

            <div className="row">
                <div className="col-lg-8 col-md-7 col-sm-12">
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <div className="card question-card mb-3">
                                <div className="card-body">
                                    <div className="question-title mb-2">
                                        <h4>Question Set 1</h4>
                                    </div>
                                    <div className="question-description">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.
                                        </p>
                                    </div>
                                    <p className="number-of-question">Number of question: 25</p>
                                    <div className="edit-delete">
                                        <span>Edit</span>
                                        <span>Delete</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="card question-card mb-3">
                                <div className="card-body">
                                    <div className="question-title mb-2">
                                        <h4>Question Set 2</h4>
                                    </div>
                                    <div className="question-description">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.
                                        </p>
                                    </div>
                                    <p className="number-of-question">Number of question: 25</p>
                                    <div className="edit-delete">
                                        <span>Edit</span>
                                        <span>Delete</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="card question-card mb-3">
                                <div className="card-body">
                                    <div className="question-title mb-2">
                                        <h4>Question Set 3</h4>
                                    </div>
                                    <div className="question-description">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.
                                        </p>
                                    </div>
                                    <p className="number-of-question">Number of question: 25</p>
                                    <div className="edit-delete">
                                        <span>Edit</span>
                                        <span>Delete</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="card question-card mb-3">
                                <div className="card-body">
                                    <div className="question-title mb-2">
                                        <h4>Question Set 4</h4>
                                    </div>
                                    <div className="question-description">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.
                                        </p>
                                    </div>
                                    <p className="number-of-question">Number of question: 25</p>
                                    <div className="edit-delete">
                                        <span>Edit</span>
                                        <span>Delete</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="card question-card mb-3">
                                <div className="card-body">
                                    <div className="question-title mb-2">
                                        <h4>Question Set 5</h4>
                                    </div>
                                    <div className="question-description">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.
                                        </p>
                                    </div>
                                    <p className="number-of-question">Number of question: 25</p>
                                    <div className="edit-delete">
                                        <span>Edit</span>
                                        <span>Delete</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="card question-card mb-3">
                                <div className="card-body">
                                    <div className="question-title mb-2">
                                        <h4>Question Set 6</h4>
                                    </div>
                                    <div className="question-description">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.
                                        </p>
                                    </div>
                                    <p className="number-of-question">Number of question: 25</p>
                                    <div className="edit-delete">
                                        <span>Edit</span>
                                        <span>Delete</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="card question-card mb-3">
                                <div className="card-body">
                                    <div className="question-title mb-2">
                                        <h4>Question Set 7</h4>
                                    </div>
                                    <div className="question-description">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.
                                        </p>
                                    </div>
                                    <p className="number-of-question">Number of question: 25</p>
                                    <div className="edit-delete">
                                        <span>Edit</span>
                                        <span>Delete</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="card question-card mb-3">
                                <div className="card-body">
                                    <div className="question-title mb-2">
                                        <h4>Question Set 8</h4>
                                    </div>
                                    <div className="question-description">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.
                                        </p>
                                    </div>
                                    <p className="number-of-question">Number of question: 25</p>
                                    <div className="edit-delete">
                                        <span>Edit</span>
                                        <span>Delete</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-5 col-sm-12">
                    <div className="card mb-3">
                        <div className="card-body">
                            <h6>Attempts by Partner Dealers</h6>
                            <div className="indicators  mt-3 mb-3">
                                <div className="partner">
                                    <span></span>
                                    <span>Partner</span>
                                </div>
                                <div className="dealer">
                                    <span></span>
                                    <span>Dealer</span>
                                </div>
                            </div>
                            <div className="question-bar-progress mb-3">
                                <p>Question set 1</p>
                                <div className="bars">
                                    <div className="bar-1 mb-2">
                                        <span>50 %</span>
                                    </div>
                                    <div className="bar-2">
                                        <span>100%</span>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="question-bar-progress mb-3">
                                <p>Question set 2</p>
                                <div className="bars">
                                    <div className="bar-1 mb-2">
                                        <span>50 %</span>
                                    </div>
                                    <div className="bar-2">
                                        <span>100%</span>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="question-bar-progress mb-3">
                                <p>Question set 3</p>
                                <div className="bars">
                                    <div className="bar-1 mb-2">
                                        <span>50 %</span>
                                    </div>
                                    <div className="bar-2">
                                        <span>100%</span>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <div className="progress-div">
                                <div className="circular-progress-bar">
                                    <div className="progress-value-container">
                                        0%
                                    </div>
                                </div>
                                <p className="mt-2">Total Attempts</p>
                            </div>
                            
                            <div className="progress-div">
                                <div className="full-circular-progress-bar">
                                    <div className="full-progress-value-container">
                                        0%
                                    </div>
                                </div>
                                <p className="mt-2">Dealer And Partner Attempts</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>


            <div className="modal" id="addQuizModal">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title"> Add New Quiz</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body">
                            <form className='form-horizontal'>
                                <div className='mb-3'>
                                    <input type="text" name="quizTitle" className="form-control" placeholder="Quiz Title" />
                                </div>
                                <div className='mb-3'>
                                    <input type="text" name="quizQuestion" className="form-control" placeholder="Question" />
                                </div>
                                <div className='mb-3'>
                                    <input type="text" name="quizOption" className="form-control" placeholder="Option" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" data-bs-dismiss="modal" className='btn common-button'>ADD QUIZ SET</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Quiz;