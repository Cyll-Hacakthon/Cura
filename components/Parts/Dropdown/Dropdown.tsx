import React from 'react';
import {Text} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Style from './Dropdown.style';

type Props = {
  items: Array<{label: any; value: any}>;
  selectedItem: any;
  handleChange?: Function;
  placeholder: string;
  searchablePlaceholder?: string;
};

const Dropdown = ({
  items,
  selectedItem,
  handleChange,
  placeholder,
  searchablePlaceholder,
}: Props) => {
  return (
    <DropDownPicker
      items={items}
      defaultValue={selectedItem}
      placeholder={placeholder}
      style={Style.pickerStyle}
      containerStyle={Style.containerStyle}
      itemStyle={Style.itemStyle}
      dropDownStyle={Style.dropdownStyle}
      onChangeItem={(newItem) => {
        if (handleChange) {
          handleChange(newItem.value);
        }
      }}
      searchable={searchablePlaceholder ? true : false}
      searchablePlaceholder={searchablePlaceholder}
      searchablePlaceholderTextColor="gray"
      searchableError={() => <Text>Not Found</Text>}
    />
  );
};

export default Dropdown;
