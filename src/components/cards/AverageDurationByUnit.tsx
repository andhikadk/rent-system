import { useRecoilValue } from 'recoil';
import { averageDurationByUnit } from '../../store';

const PopularUnitByDay = () => {
  const res = useRecoilValue<
    [
      {
        averageDuration: number;
        unit: string;
      }
    ]
  >(averageDurationByUnit);

  return (
    <div className='max-h-[30rem] bg-neutral-700 p-4 rounded-sm flex flex-col'>
      <div className='flex justify-between'>
        <strong className='text-white font-medium mb-1'>
          Average Duration by Unit
        </strong>
      </div>
      {/* make card to show duration (hours) and unit name in below duration */}
      <div id='card' className='overflow-auto mt-4 flex flex-col gap-2'>
        {res.map((item) => (
          <div
            key={item.unit}
            className='flex justify-between items-center text-white bg-neutral-600 rounded-sm p-2'>
            <span>{item.unit}</span>
            <span className='text-green-500 text-sm font-medium'>
              {Math.floor(item.averageDuration)} hours
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularUnitByDay;
