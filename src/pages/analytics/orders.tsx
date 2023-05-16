import Analytics from './index';
import ProblemCustomer from '../../components/cards/ProblemCustomer';
import ProblemCount from '../../components/cards/ProblemCount';

const Orders = () => {
  return (
    <Analytics>
      <div className='flex flex-row gap-4'>
        <div className='grid gap-4 w-3/4'>
          <ProblemCustomer />
        </div>
        <div className='grid gap-4 w-1/4'>
          <ProblemCount />
        </div>
      </div>
    </Analytics>
  );
};

export default Orders;
