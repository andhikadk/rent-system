import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import Analytics from './pages/analytics';
import Orders from './pages/orders';
import Customers from './pages/customers';
import AddCustomer from './pages/customers/add';
import Units from './pages/units';
import Settings from './pages/settings';
import NotFound from './pages/404';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Dashboard />} />
        <Route path='/analytics' element={<Analytics />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/customers' element={<Customers />} />
        <Route path='/customers/add' element={<AddCustomer />} />
        <Route path='/units' element={<Units />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
