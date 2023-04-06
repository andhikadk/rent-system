import React from 'react';
import MainLayout from '../../components/layout/MainLayout';
import Breadcrumb from '../../components/common/Breadcrumb';

const AddCustomer: React.FC = () => {
  return (
    <MainLayout>
      <h1 className='text-2xl font-bold text-white'>Add Customer</h1>
      <Breadcrumb />
    </MainLayout>
  );
};

export default AddCustomer;
