import {StyleSheet} from 'react-native';

const DropdownStyle = StyleSheet.create({
  containerStyle: {
    height: 40,
    marginTop: 5,
  },
  pickerStyle: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  itemStyle: {
    justifyContent: 'flex-start',
  },
  dropdownStyle: {
    backgroundColor: '#fafafa',
    marginTop: -8,
  },
});

export default DropdownStyle;
