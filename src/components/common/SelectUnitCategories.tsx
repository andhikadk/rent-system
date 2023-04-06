import axios from 'axios';
import AsyncCreatableSelect from 'react-select/async-creatable';
import { Category } from './SelectTypes';

const SelectUnitCategories = ({
  onChange,
}: {
  onChange: (category: Category) => void;
}) => {
  const getUnitCategories = async (inputValue: string) => {
    try {
      const { data } = await axios.get(
        `/units/categories?search=${inputValue}`
      );
      const options = data.data.map((category: [string]) => ({
        value: category,
        label: category,
      }));
      return options;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AsyncCreatableSelect
      // @ts-expect-error
      onChange={onChange}
      loadOptions={getUnitCategories}
      defaultOptions
      isClearable
    />
  );
};

export default SelectUnitCategories;
