import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { useRecoilValue } from 'recoil';
import { totalOrdersPerDayData } from '../../store';

const TotalOrdersPerDayChart = () => {
  const data = useRecoilValue(totalOrdersPerDayData);
  const totalOrders = [...data].reverse();

  return (
    <div className='h-[22rem] bg-neutral-700 p-4 rounded-sm flex flex-col flex-1'>
      <div className='flex justify-between'>
        <strong className='text-white font-medium'>
          Total Orders
          <span className='text-xs font-light text-neutral-400'>
            {' '}
            (per day)
          </span>
        </strong>
        <span className='text-sm text-neutral-400 font-light'>
          last {totalOrders.length} days
        </span>
      </div>
      <div className='mt-3 w-full flex-1 text-xs'>
        <ResponsiveContainer width='100%' height='100%'>
          <BarChart
            data={totalOrders}
            margin={{
              top: 15,
              right: 10,
              left: 10,
              bottom: 0,
            }}>
            <CartesianGrid strokeDasharray='3 3 0 0' vertical={false} />
            <XAxis dataKey='date' />
            <YAxis />
            <Tooltip />
            <Bar dataKey='total' fill='#0284c7' />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TotalOrdersPerDayChart;
