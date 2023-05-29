import { useRecoilValue } from 'recoil';
import { popularUnitsData } from '../../store';
import { PopularUnit } from '../../types';

const PopularUnits = () => {
  const popularUnits = useRecoilValue<PopularUnit[]>(popularUnitsData);

  return (
    <div className='min-h-[22rem] bg-neutral-700 p-4 rounded-sm flex flex-col'>
      <div className='flex justify-between'>
        <strong className='text-white font-medium mb-1'>Popular Units</strong>
        <span className='text-xs text-neutral-400 font-light'>24h rates</span>
      </div>
      <div className='mt-4 flex flex-col gap-4'>
        {popularUnits
          .map((unit) => (
            <div
              key={unit._id}
              className='flex flex-row items-center bg-neutral-600 rounded-sm p-2'>
              {/* <div className='w-10 h-10 min-w-[2.5rem] bg-gray-200 rounded-sm'>
                <img
                  className='w-full h-full object-cover rounded-sm'
                  src='https://source.unsplash.com/100x100?camera'
                  alt='unit'
                />
              </div> */}
              <div className='flex-1'>
                <p className='text-sm text-white'>{unit.name}</p>
                <span className='text-green-500 text-xs font-medium'>
                  {unit.totalOrder} orders
                </span>
              </div>
              <div className='text-sm font-medium text-neutral-300 pl-1.5'>
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
