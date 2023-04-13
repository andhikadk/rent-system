import React from 'react';
import Analytics from './index';

const Units = () => {
  return (
    <Analytics>
      <h1 className='text-2xl font-bold text-white mb-4'>Analytics Units</h1>
      <ul className='text-white'>
        <li>rentang harga</li>
        <li>unit populer per kategori</li>
      </ul>
    </Analytics>
  );
};

export default Units;
