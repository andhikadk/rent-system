import React from 'react';
import Analytics from './index';

const Orders = () => {
  return (
    <Analytics>
      <h1 className='text-2xl font-bold text-white mb-4'>Analytics Orders</h1>
      <ul className='text-white'>
        <li>persentase pembayaran (tunai/bca)</li>
        <li>jumlah pesanan per bulan/hari</li>
        <li>persentase durasi</li>
        <li>persentase sewa di hari kerja/libur</li>
      </ul>
    </Analytics>
  );
};

export default Orders;
