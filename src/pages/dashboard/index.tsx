import { useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import MainLayout from '../../components/layout/MainLayout';
import DashboardStats from '../../components/cards/DashboardStats';
import TransactionChart from '../../components/charts/TotalSalesPerDay';
import CustomerType from '../../components/charts/CustomerType';
import PopularUnits from '../../components/cards/PopularUnits';
import TopCustomers from '../../components/cards/TopCustomers';

const Dashboard: React.FC = () => {
  const location = useLocation();
  if (location.state) {
    Swal.fire({
      title: location.state.message,
      icon: location.state.type,
      timer: 3000,
    });
    location.state = undefined;
  }

  return (
    <MainLayout>
      <h1 className='text-2xl font-bold text-white mb-4'>Dashboard</h1>
      <div className='flex flex-col gap-4'>
        <DashboardStats />
        <div className='grid grid-cols-1 lg:grid-cols-8 gap-4 text-white'>
          <div className='col-span-6 lg:col-span-6'>
            <TransactionChart />
          </div>
          <div className='col-span-6 lg:col-span-2'>
            <CustomerType />
          </div>
          <div className='col-span-6 lg:col-span-5'>
            <TransactionChart />
          </div>
          <div className='col-span-6 lg:col-span-3'>
            <TopCustomers />
          </div>
          <div className='col-span-6 lg:col-span-5'>
            <TransactionChart />
          </div>
          <div className='col-span-6 lg:col-span-3'>
            <PopularUnits />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
