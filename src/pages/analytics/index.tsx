import React from 'react';
import MainLayout from '../../components/layout/MainLayout';
import AnalyticStats from '../../components/cards/AnalyticStats';

const Analytics: React.FC = () => {
  return (
    <MainLayout>
      <h1 className='text-2xl font-bold text-white mb-4'>Analytics</h1>
      <div className='flex flex-col gap-4'>
        <AnalyticStats />
        {/* <div className='grid grid-cols-1 lg:grid-cols-8 gap-4 text-white'>
          <div className='col-span-6 lg:col-span-6'>
            <TransactionChart />
          </div>
          <div className='col-span-6 lg:col-span-2'>
            <CustomerType />
          </div>
        </div> */}
      </div>
    </MainLayout>
  );
};

export default Analytics;
