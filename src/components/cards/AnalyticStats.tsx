import { useRecoilValue } from 'recoil';
import {
  averageDurationData,
  customersData,
  ordersData,
  unitsData,
} from '../../store';
import {
  IoBagHandle,
  IoCameraSharp,
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

export const formatNumber = (number: number) => {
  let formattedNumber;
  if (number >= 1000000000) {
    formattedNumber = `Rp ${
      Math.round((number / 1000000000) * 10) / 10
    } miliar`;
  } else if (number >= 1000000) {
    formattedNumber = `Rp ${Math.round((number / 1000000) * 10) / 10} juta`;
  } else {
    formattedNumber = `Rp ${Math.round(number / 1000)} ribu`;
  }

  return formattedNumber;
};

export const formatMonth = (date: string): string => {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'Mei',
    'Jun',
    'Jul',
    'Ags',
    'Sep',
    'Okt',
    'Nov',
    'Des',
  ];
  const [year, monthIndex] = date.split('-');
  const month = months[Number(monthIndex) - 1];
  return `${month} ${year}`;
};

const AnalyticStats = () => {
  const customers = useRecoilValue(customersData);
  const units = useRecoilValue(unitsData);
  const orders = useRecoilValue(ordersData);
  const averageDuration = useRecoilValue(averageDurationData);
  const totalCustomers = customers.length;
  const totalUnits = units.length;
  const totalOrders = orders.length;
  const totalSales = orders
    .filter((order: any) => order.status === 'paid')
    .map((order: any) => order.total_cost)
    .reduce((acc: any, order: any) => {
      return acc + order;
    }, 0);

  return (
    <div className='grid grid-cols-1 md:grid-cols-5 lg:grid-cols-10 gap-4'>
      <BoxWrapper>
        <div className='rounded-full h-12 w-12 flex items-center justify-center bg-yellow-600'>
          <IoPeople className='text-2xl text-white' />
        </div>
        <div className='pl-4'>
          <span className='text-sm text-white font-light'>Total Customers</span>
          <div className='flex items-center'>
            <strong className='text-xl text-neutral-200 font-semibold'>
              {totalCustomers}
            </strong>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className='rounded-full h-12 w-12 flex items-center justify-center bg-orange-600'>
          <IoCameraSharp className='text-2xl text-white' />
        </div>
        <div className='pl-4'>
          <span className='text-sm text-white font-light'>Total Units</span>
          <div className='flex items-center'>
            <strong className='text-xl text-neutral-200 font-semibold'>
              {totalUnits}
            </strong>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className='rounded-full h-12 w-12 flex items-center justify-center bg-green-600'>
          <IoCart className='text-2xl text-white' />
        </div>
        <div className='pl-4'>
          <span className='text-sm text-white font-light'>Total Orders</span>
          <div className='flex items-center'>
            <strong className='text-xl text-neutral-200 font-semibold'>
              {totalOrders}
            </strong>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className='rounded-full h-12 w-12 flex items-center justify-center bg-sky-600'>
          <IoBagHandle className='text-2xl text-white' />
        </div>
        <div className='pl-4'>
          <span className='text-sm text-white font-light'>Total Sales</span>
          <div className='flex items-center'>
            <strong className='text-xl text-neutral-200 font-semibold'>
              {/* {totalSales.toLocaleString('id-ID', {
                style: 'currency',
                currency: 'IDR',
                minimumFractionDigits: 0,
              })} */}
              {formatNumber(totalSales)}
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
          <span className='text-sm text-white font-light'>
            Average Duration
          </span>
          <div className='flex items-center'>
            <strong className='text-xl text-neutral-200 font-semibold'>
              {averageDuration[0]?.averageDuration
                ? averageDuration[0].averageDuration.toFixed(2)
                : 0}{' '}
              jam
            </strong>
          </div>
        </div>
      </BoxWrapper>
    </div>
  );
};

export default AnalyticStats;
