import { useRecoilValue } from 'recoil';
import { popularUnitByMonthData } from '../../store';

interface Unit {
  date: string;
  day: string;
  units: string[];
}

const mostFrequentUnits = (units: Unit[]) => {
  // change date to month name
  const monthMappings: { [month: string]: string } = {
    1: 'Januari',
    2: 'Februari',
    3: 'Maret',
    4: 'April',
    5: 'Mei',
    6: 'Juni',
    7: 'Juli',
    8: 'Agustus',
    9: 'September',
    10: 'Oktober',
    11: 'November',
    12: 'Desember',
  };

  // Membuat objek untuk menyimpan unit-unit yang paling banyak muncul per hari
  const mostFrequentUnits: { [month: string]: string } = {};

  // Mengelompokkan dan mencari unit-unit yang paling banyak muncul per hari
  units.forEach((item) => {
    const { date, units } = item;

    // Menghitung frekuensi kemunculan setiap unit
    const unitCount: { [unit: string]: number } = {};
    units.forEach((unit) => {
      unitCount[unit] = (unitCount[unit] || 0) + 1;
    });

    // Menemukan unit dengan frekuensi kemunculan tertinggi
    let maxCount = 0;
    let mostFrequentUnit = '';
    for (const unit in unitCount) {
      if (unitCount[unit] > maxCount) {
        maxCount = unitCount[unit];
        mostFrequentUnit = unit;
      }
    }

    // Menyimpan unit yang paling banyak muncul per hari
    mostFrequentUnits[date] = mostFrequentUnit;
  });

  let mostFrequentUnitWithMonth = [];

  // Menampilkan hasil pengelompokan dengan penandaan hari
  for (const month in mostFrequentUnits) {
    mostFrequentUnitWithMonth.push({
      month: monthMappings[month],
      unit: mostFrequentUnits[month],
    });
  }

  return mostFrequentUnitWithMonth;
};

const PopularUnitByDay = () => {
  const units = useRecoilValue<Unit[]>(popularUnitByMonthData);
  const date = ['January', 'Desember'];

  return (
    <div className='h-fit bg-neutral-700 p-4 rounded-sm flex flex-col'>
      <div className='flex'>
        <strong className='text-white font-medium mb-1'>
          Popular Unit By Month
        </strong>
        {/* <span className='text-xs text-neutral-400 font-light'>24h rates</span> */}
      </div>
      <div className='mt-4 flex flex-col gap-4'>
        {mostFrequentUnits(units).map((item, i) => (
          <div
            key={item.month}
            className='flex flex-row items-center gap-4 bg-neutral-600 rounded-sm p-2'>
            <div className='w-10 h-10 min-w-[2.5rem] bg-gray-200 rounded-sm'>
              <img
                className='w-full h-full object-cover rounded-sm'
                src='https://source.unsplash.com/100x100?iphone'
                alt='unit'
              />
            </div>
            <div className='flex-1'>
              <p className='text-sm text-white'>{item.unit}</p>
            </div>
            <div className='text-sm font-medium text-neutral-300 pl-1.5'>
              <span className='text-green-500 text-sm font-medium'>
                {date[i]}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularUnitByDay;
