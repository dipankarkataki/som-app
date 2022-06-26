import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import ManageUser from './Components/Pages/User/ManageUser';
import ManageDealer from './Components/Pages/Dealer/ManageDealer';
import ManagePartner from './Components/Pages/Partner/ManagePartner';
import ManageProduct from './Components/Pages/Product/ManageProduct';
import ManageEvent from './Components/Pages/Event/ManageEvent';
import ManagePartnerWork from './Components/Pages/PartnerWork/ManagePartnerWork';
import TradingAdvice from './Components/Pages/TradingAdvice/TradingAdvice';
import UpcomingProjects from './Components/Pages/UpcomingProject/UpcomingProjects';
import Inquiries from './Components/Pages/Inquiry/Inquiries';
import Feedback from './Components/Pages/Feedback/Feedback';
import OfferAndDiscount from './Components/Pages/OfferAndDiscount/OfferAndDiscount';
import CMS from './Components/Pages/CMS/CMS';
import SteelMarket from './Components/Pages/SteelMarket/SteelMarket';
import GuestLecture from './Components/Pages/Lecture/GuestLecture';
import Tender from './Components/Pages/Tender/Tender';
import Education from './Components/Pages/Education/Education';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Dashboard/>} />
          <Route path="dashboard" element={<Dashboard/>} />
          <Route path="manage-user" element={<ManageUser/>} />
          <Route path="manage-dealer" element={<ManageDealer/>} />
          <Route path="manage-partner" element={<ManagePartner/>} />
          <Route path="manage-product" element={<ManageProduct/>} />
          <Route path="manage-event" element={<ManageEvent/>} />
          <Route path="manage-partner-work" element={<ManagePartnerWork/>} />
          <Route path="trading-advice" element={<TradingAdvice/>} />
          <Route path="upcoming-projects" element={<UpcomingProjects/>} />
          <Route path="inquiries" element={<Inquiries />}/>
          <Route path="feedback" element={<Feedback />}/>
          <Route path="offer-discount" element={<OfferAndDiscount />}/>
          <Route path="cms" element={<CMS />}/>
          <Route path="steel-market" element={<SteelMarket />}/>
          <Route path="guest-lecture" element={<GuestLecture />}/>
          <Route path="tender" element={<Tender />}/>
          <Route path="education" element={<Education />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
