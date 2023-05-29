import AverageDurationByUnit from '../../components/cards/AverageDurationByUnit';
import PopularUnitByDay from '../../components/cards/PopularUnitByDay';
import Analytics from './index';

const Units = () => {
  return (
    <Analytics>
      <div className='flex flex-row gap-4'>
        <div className='grid gap-4 w-2/4'>
          <AverageDurationByUnit />
        </div>
        <div className='grid gap-4 w-2/4'>
          <PopularUnitByDay />
        </div>
      </div>
    </Analytics>
  );
};

export default Units;
