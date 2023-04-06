import React, { useState } from 'react';
import SelectUnitCategories from '../components/common/SelectUnitCategories';
import SelectUnits from '../components/common/SelectUnits';
import { Category, Units } from '../components/common/SelectTypes';
import MainLayout from '../components/layout/MainLayout';

const SelectUnit: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );
  const [selectedUnit, setSelectedUnit] = useState<Units | null>(null);

  const handleCategoryChange = (category: Category) => {
    setSelectedCategory(category);
  };

  const handleUnitChange = (units: Units) => {
    setSelectedUnit(units);
  };

  return (
    <MainLayout>
      <div className='flex flex-col h-screen w-screen justify-center items-center'>
        <h1 className='text-3xl font-bold text-white mb-4'>React Select</h1>
        <div className='flex flex-row gap-4 w-full justify-center items-center'>
          <div className='w-1/4'>
            <h2 className='text-xl text-white text-center mb-4'>
              Unit Categories
            </h2>
            <SelectUnitCategories onChange={handleCategoryChange} />
            {selectedCategory && (
              <p className='text-white text-center mt-4'>
                {selectedCategory.label}
              </p>
            )}
          </div>
          <div className='w-1/4'>
            <h2 className='text-xl text-white text-center mb-4'>Units</h2>
            <SelectUnits onChange={handleUnitChange} />
            {selectedUnit?.map((unit) => (
              <p className='text-white text-center mt-4'>{unit.label}</p>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default SelectUnit;
