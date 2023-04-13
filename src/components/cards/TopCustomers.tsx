import { useRecoilValue } from 'recoil';
import { topCustomersData } from '../../store';
import { TopCustomer } from '../../types';
import { Link } from 'react-router-dom';

const TopCustomers = () => {
  const customers = useRecoilValue<TopCustomer>(topCustomersData);

  return (
    <div className='min-h-[22rem] bg-neutral-700 p-4 rounded-sm flex flex-col'>
      <div className='flex justify-between'>
        <strong className='text-white font-medium mb-1'>Top Customers</strong>
        <Link
          to='/analytics/top-customers'
          className='text-sm text-blue-500 hover:text-blue-600 font-light'>
          view all
        </Link>
      </div>
      <div className='mt-4 flex flex-col gap-4'>
        {customers
          .map((customer) => (
            <div key={customer._id} className='flex flex-row'>
              <div className='w-10 h-10 min-w-[2.5rem] bg-gray-200 rounded-sm'>
                <img
                  className='w-full h-full object-cover rounded-sm'
                  src='https://xsgames.co/randomusers/avatar.php?g=male'
                  alt='customer'
                />
              </div>
              <div className='ml-4 flex-1'>
                <p className='text-sm text-white'>{customer._id}</p>
                <span className='text-green-500 text-xs font-medium'>
                  {customer.totalOrder} orders
                </span>
              </div>
              <div className='text-sm font-medium text-gray-400 pl-1.5'>
                {customer.totalCost.toLocaleString('id-ID', {
                  style: 'currency',
                  currency: 'IDR',
                  minimumFractionDigits: 0,
                })}
              </div>
            </div>
          ))
          .slice(0, 5)}
      </div>
    </div>
  );
};

export default TopCustomers;
