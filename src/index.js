import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import Dashboard from './Components/Pages/Dashboard';
import ManageUser from './Components/Pages/ManageUser';
import ManageDealer from './Components/Pages/ManageDealer';
import ManagePartner from './Components/Pages/ManagePartner';
import ManageProduct from './Components/Pages/ManageProduct';

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
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
