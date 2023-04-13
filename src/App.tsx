import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import Analytics from './pages/analytics/summary';
import AnalyticsOrders from './pages/analytics/orders';
import AnalyticsCustomers from './pages/analytics/customers';
import AnalyticsUnits from './pages/analytics/units';
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
        <Route path='/analytics/orders' element={<AnalyticsOrders />} />
        <Route path='/analytics/customers' element={<AnalyticsCustomers />} />
        <Route path='/analytics/units' element={<AnalyticsUnits />} />
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
