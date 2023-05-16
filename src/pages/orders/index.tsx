import React from 'react';
import MainLayout from '../../components/layout/MainLayout';
import TableOrder from '../../components/tables/TableOrder';

const Orders: React.FC = () => {
  return (
    <MainLayout>
      <h1 className='text-2xl font-bold text-white mb-4'>Orders</h1>
      <TableOrder />
    </MainLayout>
  );
};

export default Orders;
