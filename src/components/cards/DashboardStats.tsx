import { useRecoilValue } from 'recoil';
import { customersData, ordersData, unitsData } from '../../store';
import {
  IoBagHandle,
  IoCalendar,
  IoPeople,
  IoCart,
  IoTime,
} from 'react-icons/io5';

const BoxWrapper = ({ children }: any) => {
  return (
    <div className='bg-neutral-700 rounded-sm p-4 col-span-1 md:col-span-5 lg:col-span-2 flex items-center overflow-hidden'>
      {children}
    </div>
  );
};

const DashboardStats = () => {
  const orders = useRecoilValue(ordersData);
  const totalSales = orders
    ?.filter((order: any) => order.status === 'paid')
    .filter((order: any) => {
      const date = new Date(order.createdAt);
      const month = date.getMonth();
      const year = date.getFullYear();
      const today = new Date();
      const thisMonth = today.getMonth();
      const thisYear = today.getFullYear();
      return month === thisMonth && year === thisYear;
    })
    .reduce((acc: any, order: any) => {
      return acc + order.total_cost;
    }, 0)
    .toLocaleString('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    });

  return (
    <div className='grid grid-cols-1 md:grid-cols-5 lg:grid-cols-10 gap-4'>
      <BoxWrapper>
        <div className='rounded-full h-12 w-12 flex items-center justify-center bg-yellow-600'>
          <IoPeople className='text-2xl text-white' />
        </div>
        <div className='pl-4'>
          <span className='text-sm text-white font-light'>New Customers</span>
          <div className='flex items-center'>
            <strong className='text-xl text-neutral-200 font-semibold'>
              0
            </strong>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className='rounded-full h-12 w-12 flex items-center justify-center bg-orange-600'>
          <IoCalendar className='text-2xl text-white' />
        </div>
        <div className='pl-4'>
          <span className='text-sm text-white font-light'>Total Bookings</span>
          <div className='flex items-center'>
            <strong className='text-xl text-neutral-200 font-semibold'>
              0
            </strong>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className='rounded-full h-12 w-12 flex items-center justify-center bg-green-600'>
          <IoCart className='text-2xl text-white' />
        </div>
        <div className='pl-4'>
          <span className='text-sm text-white font-light'>Orders Today</span>
          <div className='flex items-center'>
            <strong className='text-xl text-neutral-200 font-semibold'>
              0
            </strong>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className='rounded-full h-12 w-12 flex items-center justify-center bg-sky-600'>
          <IoBagHandle className='text-2xl text-white' />
        </div>
        <div className='pl-4'>
          <span className='text-sm text-white font-light'>
            Total Sales This Month
          </span>
          <div className='flex items-center'>
            <strong className='text-xl text-neutral-200 font-semibold'>
              {totalSales}
            </strong>
            {/* <span className='text-sm text-green-500 pl-2'>+343</span> */}
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className='rounded-full h-12 w-12 flex items-center justify-center bg-violet-600'>
          <IoTime className='text-2xl text-white' />
        </div>
        <div className='pl-4'>
          <span className='text-sm text-white font-light'>Pending Rent</span>
          <div className='flex items-center'>
            <strong className='text-xl text-neutral-200 font-semibold'>
              0
            </strong>
          </div>
        </div>
      </BoxWrapper>
    </div>
  );
};

export default DashboardStats;
