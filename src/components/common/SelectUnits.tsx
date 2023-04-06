import AsyncSelect from 'react-select/async';
import axios from 'axios';
import { Units } from './SelectTypes';

const SelectUnits = ({ onChange }: { onChange: (units: Units) => void }) => {
  const getUnits = async (inputValue: string) => {
    try {
      const { data } = await axios.get(`/units/?search=${inputValue}`);
      const options = data.data.map((unit: { _id: string; name: string }) => ({
        value: unit._id,
        label: unit.name,
      }));
      return options;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AsyncSelect
      // @ts-expect-error
      onChange={onChange}
      loadOptions={getUnits}
      cacheOptions
      defaultOptions
      isMulti
    />
  );
};

export default SelectUnits;
