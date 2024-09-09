// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Pages/Signup'; // Import statement for Signup
import Navbar from './Pages/Navbar';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import Table from './Pages/Table';
import Campaign from './Pages/Campaign';
import Targeting from './Pages/Targeting';
import Creative from './Pages/Creative'
import DataAnalysis from './Pages/DataAnalysis';
import BudgetControl from './Pages/BudgetControl';
import PaymentProcess from './Pages/PaymentProcess';
import Placement from './components/Placement';
import CompanyBankDetails from './Pages/CompanyDetails';
import TransactionHistory from './Pages/TransactionHistory';
import ProfilePage from './Pages/ProfilePage';



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Navbar" element={<Navbar />} />
        <Route path="/" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="/Table" element={<Table/>} />
        <Route path="/Campaign" element={<Campaign/>} />
        <Route path="/Targeting" element={<Targeting/>} />
        <Route path="/Creative" element={<Creative/>} />
        <Route path="/DataAnalysis" element={<DataAnalysis/>} />
        <Route path="/Budgetcontrol" element={<BudgetControl/>} />
        <Route path="/Payment" element={<PaymentProcess/>} />
        <Route path="/Placement" element={<Placement/>} />
        <Route path="/CompanyDetails" element={<CompanyBankDetails/>} />
        <Route path="/TransactionHistory" element={<TransactionHistory/>} />
        <Route path="/ProfilePage" element={<ProfilePage/>} />

      </Routes>
    </Router>
  );
};

export default App;


