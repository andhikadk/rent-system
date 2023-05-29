import { useRecoilValue } from 'recoil';
import { popularUnitByDayData } from '../../store';

interface Unit {
  date: string;
  day: string;
  units: string[];
}

const mostFrequentUnits = (units: Unit[]) => {
  // Membuat objek untuk menyimpan unit-unit yang paling banyak muncul per hari
  const mostFrequentUnits: { [day: string]: string } = {};

  // Objek untuk memetakan nama hari ke nilai numerik
  const dayMappings: { [day: string]: number } = {
    Senin: 1,
    Selasa: 2,
    Rabu: 3,
    Kamis: 4,
    Jumat: 5,
    Sabtu: 6,
    Minggu: 7,
  };

  // Mengelompokkan dan mencari unit-unit yang paling banyak muncul per hari
  units.forEach((item) => {
    const { day, units } = item;

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
    mostFrequentUnits[day] = mostFrequentUnit;
  });

  let mostFrequentUnitWithDay = [];

  // Menampilkan hasil pengelompokan dengan penandaan hari
  for (const day in mostFrequentUnits) {
    mostFrequentUnitWithDay.push({
      day: dayMappings[day],
      dayName: day,
      unit: mostFrequentUnits[day],
    });
  }

  return mostFrequentUnitWithDay;
};

const PopularUnitByDay = () => {
  const units = useRecoilValue<Unit[]>(popularUnitByDayData);

  return (
    <div className='h-full bg-neutral-700 p-4 rounded-sm flex flex-col'>
      <div className='flex justify-between'>
        <strong className='text-white font-medium mb-1'>
          Popular Unit By Day
        </strong>
        {/* <span className='text-xs text-neutral-400 font-light'>24h rates</span> */}
      </div>
      <div className='mt-4 flex flex-col gap-4'>
        {mostFrequentUnits(units)
          .sort((a, b) => a.day - b.day)
          .map((item) => (
            <div
              key={item.day}
              className='flex flex-row items-center bg-neutral-600 rounded-sm p-2'>
              {/* <div className='w-10 h-10 min-w-[2.5rem] bg-gray-200 rounded-sm'>
                <img
                  className='w-full h-full object-cover rounded-sm'
                  src='https://source.unsplash.com/100x100?camera'
                  alt='unit'
                />
              </div> */}
              <div className='flex-1'>
                <p className='text-sm text-white'>{item.unit}</p>
              </div>
              <div className='text-sm font-medium text-neutral-300 pl-1.5'>
                <span className='text-green-500 text-sm font-medium'>
                  {item.dayName}
                </span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PopularUnitByDay;
