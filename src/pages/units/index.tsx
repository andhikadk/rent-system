import React from 'react';
import MainLayout from '../../components/layout/MainLayout';
import TableUnit from '../../components/tables/TableUnit';

const Units: React.FC = () => {
  return (
    <MainLayout>
      <h1 className='text-2xl font-bold text-white mb-4'>Units</h1>
      <TableUnit />
    </MainLayout>
  );
};

export default Units;
