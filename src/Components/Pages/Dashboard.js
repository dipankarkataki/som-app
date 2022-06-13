import {FaUsers, FaRegHandshake, FaAddressBook, FaBoxes} from 'react-icons/fa';

const  Dashboard = () =>{
    return (
        <>
            <div className="breadcrumb">
                <p>Dashboard</p>
            </div>
            <div className="content-area">
                <div className="row">
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <span className="user-icon">
                                    <FaUsers/>
                                </span>
                                This is some text within a card body.
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                                <div className="card-body">
                                    <span className="hand-shake-icon">
                                        <FaRegHandshake/>
                                    </span>
                                    This is some text within a card body.
                                </div>
                            </div>
                        </div>
                    <div className="col-md-3">
                        <div className="card">
                                <div className="card-body">
                                    <span className="dealer-icon">
                                        <FaAddressBook/>
                                    </span>
                                    This is some text within a card body.
                                </div>
                            </div>
                        </div>
                    <div className="col-md-3">
                        <div className="card">
                                <div className="card-body">
                                    <span className="product-icon">
                                        <FaBoxes/>
                                    </span>
                                    This is some text within a card body.
                                </div>
                            </div>
                        </div>
                </div>
                
            </div>
        </>
    );
}

export default Dashboard;