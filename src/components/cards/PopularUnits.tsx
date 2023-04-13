import { useRecoilValue } from 'recoil';
import { popularUnitsData } from '../../store';
import { PopularUnit } from '../../types';

const PopularUnits = () => {
  const popularUnits = useRecoilValue<PopularUnit[]>(popularUnitsData);

  return (
    <div className='min-h-[22rem] bg-neutral-700 p-4 rounded-sm flex flex-col'>
      <strong className='text-white font-medium mb-1'>Popular Units</strong>
      <div className='mt-4 flex flex-col gap-4'>
        {popularUnits
          .map((unit) => (
            <div key={unit._id} className='flex flex-row'>
              <div className='w-10 h-10 min-w-[2.5rem] bg-gray-200 rounded-sm'>
                <img
                  className='w-full h-full object-cover rounded-sm'
                  src='https://source.unsplash.com/100x100?camera'
                  alt='unit'
                />
              </div>
              <div className='ml-4 flex-1'>
                <p className='text-sm text-white'>{unit.name}</p>
                <span className='text-green-500 text-xs font-medium'>
                  {unit.totalOrder} orders
                </span>
              </div>
              <div className='text-sm font-medium text-gray-400 pl-1.5'>
                {unit.rates?.['24h']?.toLocaleString('id-ID', {
                  style: 'currency',
                  currency: 'IDR',
                  minimumFractionDigits: 0,
                })}
              </div>
            </div>
          ))
          .slice(0, 5)}
      </div>
    </div>
  );
};

export default PopularUnits;
