import Analytics from './index';
import TotalSalesByMonth from '../../components/cards/TotalSalesByMonth';
import PaymentType from '../../components/charts/PaymentType';
import CustomerType from '../../components/charts/CustomerType';
import TotalOrdersPerDayChart from '../../components/charts/TotalOrdersPerDay';
import TotalSalesPerDayChart from '../../components/charts/TotalSalesPerDay';

const Summary = () => {
  return (
    <Analytics>
      <div className='flex flex-row gap-4'>
        <div className='grid gap-4 w-3/4'>
          <TotalOrdersPerDayChart />
          <TotalSalesPerDayChart />
        </div>
        <div className='grid gap-4 w-1/4'>
          <TotalSalesByMonth />
          <PaymentType />
          <CustomerType />
        </div>
      </div>
      {/* <div className='grid grid-cols-1 lg:grid-cols-8 gap-4 text-white'>
        <div className='col-span-6 lg:col-span-6'>
          <TotalOrdersPerDayChart />
        </div>
        <div className='col-span-6 lg:col-span-2'>
          <PaymentType />
        </div>
        <div className='col-span-6 lg:col-span-6'>
          <TotalSalesByMonth />
        </div>
        <div className='col-span-6 lg:col-span-2'>
          <CustomerType />
        </div>
      </div> */}
    </Analytics>
  );
};

export default Summary;
