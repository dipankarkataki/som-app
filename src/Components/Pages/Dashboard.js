import {FaUsers, FaRegHandshake, FaAddressBook, FaBoxes} from 'react-icons/fa';

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
                                <h5 class="card-title text-center">Last 3 New Users</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <div className="card list-dealer-card">
                                <div className="card-body">
                                    <h5 class="card-title text-center">Last 3 New Dealers</h5>
                                </div>
                            </div>
                        </div>
                    <div className="col-md-4 col-sm-12">
                        <div className="card list-partner-card">
                                <div className="card-body">
                                    <h5 class="card-title text-center">Last 3 New Partners</h5>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;