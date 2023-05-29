import { useRecoilValue } from 'recoil';
import { priceRangeData } from '../../store';

const PriceRange = () => {
  // const priceRange = useRecoilValue<[]>(priceRangeData);

  return (
    <div className='flex flex-col p-4 rounded-sm min-h-fit bg-neutral-700'>
      <div className='flex justify-between'>
        <strong className='mb-1 font-medium text-white'>Price Range</strong>
      </div>
      <div className='flex flex-col gap-4 mt-4'></div>
    </div>
  );
};

export default PriceRange;
