import Analytics from './index';
import TotalSalesByMonth from '../../components/cards/TotalSalesByMonth';
import PaymentType from '../../components/charts/PaymentType';

const Summary = () => {
  return (
    <Analytics>
      <div className='grid grid-cols-1 lg:grid-cols-8 gap-4 text-white'>
        <div className='col-span-6 lg:col-span-3'>
          <PaymentType />
        </div>
        <div className='col-span-6 lg:col-span-5'>
          {' '}
          <TotalSalesByMonth />
        </div>
      </div>
    </Analytics>
  );
};

export default Summary;
