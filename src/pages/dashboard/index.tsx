import MainLayout from '../../components/layout/MainLayout';
import DashboardStats from '../../components/cards/DashboardStats';
import TotalSalesPerDay from '../../components/charts/TotalSalesPerDay';
import PopularUnits from '../../components/cards/PopularUnits';
import TopCustomers from '../../components/cards/TopCustomers';
import RecentOrders from '../../components/tables/RecentOrders';

const Dashboard: React.FC = () => {
  return (
    <MainLayout>
      <h1 className='text-2xl font-bold text-white mb-4'>Dashboard</h1>
      <div className='flex flex-col gap-4'>
        <DashboardStats />
        <div className='grid grid-cols-1 lg:grid-cols-10 gap-4 text-white'>
          <div className='col-span-1 lg:col-span-7'>
            <TotalSalesPerDay />
          </div>
          <div className='col-span-1 lg:col-span-3'>
            <TopCustomers />
          </div>
          <div className='col-span-1 lg:col-span-7'>
            <RecentOrders />
          </div>
          <div className='col-span-1 lg:col-span-3'>
            <PopularUnits />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
