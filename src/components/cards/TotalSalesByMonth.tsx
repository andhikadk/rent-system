import { useRecoilValue } from 'recoil';
import { totalSalesPerMonthData } from '../../store';
import { formatMonth } from './AnalyticStats';

const TotalSalesByMonth = () => {
  const data = useRecoilValue(totalSalesPerMonthData);

  return (
    <div className='bg-neutral-700 p-4 rounded-sm flex flex-col'>
      <div className='flex justify-between'>
        <strong className='text-white font-medium mb-1'>
          Total Sales By Month
        </strong>
        <span className='text-sm text-neutral-400 font-light'>
          last 6 months
        </span>
      </div>
      <div className='mt-4 flex flex-col gap-4'>
        {data.map(({ _id, totalSales, percentageChange }: any) => (
          <div
            key={_id}
            className='flex flex-row bg-neutral-600 p-4 rounded-sm'>
            <div className='flex-1'>{formatMonth(_id)} </div>
            <div>
              {percentageChange !== 0 && (
                <>
                  {percentageChange > 0 ? (
                    <span className='text-green-500 text-xs font-medium mr-2'>
                      +{percentageChange.toFixed(2)}%
                    </span>
                  ) : (
                    <span className='text-red-500 text-xs font-medium mr-2'>
                      {percentageChange.toFixed(2)}%
                    </span>
                  )}
                </>
              )}
              {totalSales.toLocaleString('id-ID', {
                style: 'currency',
                currency: 'IDR',
                minimumFractionDigits: 0,
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TotalSalesByMonth;
