import MainLayout from '../../components/layout/MainLayout';
import DashboardStats from '../../components/cards/DashboardStats';
import TotalSalesPerDay from '../../components/charts/TotalSalesPerDay';
import CustomerType from '../../components/charts/CustomerType';
import PopularUnits from '../../components/cards/PopularUnits';
import TopCustomers from '../../components/cards/TopCustomers';

const Dashboard: React.FC = () => {
  return (
    <MainLayout>
      <h1 className='text-2xl font-bold text-white mb-4'>Dashboard</h1>
      <div className='flex flex-col gap-4'>
        <DashboardStats />
        <div className='grid grid-cols-1 lg:grid-cols-8 gap-4 text-white'>
          <div className='col-span-6 lg:col-span-6'>
            <TotalSalesPerDay />
          </div>
          <div className='col-span-6 lg:col-span-2'>
            <CustomerType />
          </div>
          <div className='col-span-6 lg:col-span-5'>
            {/* <TotalSalesPerMonth /> */}
          </div>
          <div className='col-span-6 lg:col-span-3'>
            <TopCustomers />
          </div>
          <div className='col-span-6 lg:col-span-5'>
            {/* <TotalSalesPerMonth /> */}
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
