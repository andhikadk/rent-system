import React from 'react';
import MainLayout from '../../components/layout/MainLayout';
import TableCustomer from '../../components/tables/TableCustomer';

const Customers: React.FC = () => {
  return (
    <MainLayout>
      <h1 className='text-2xl font-bold text-white mb-4'>Customers</h1>
      <TableCustomer />
    </MainLayout>
  );
};

export default Customers;
