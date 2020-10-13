import {StyleSheet, Dimensions} from 'react-native';
import {CuraColor} from '../../../util';

const SelectionBoxStyle = StyleSheet.create({
  selectionBox: {
    flexDirection: 'row',
    padding: 10,
    height: 180,
    width: (30 / 100) * Dimensions.get('screen').width,
    borderRadius: 15,
    marginLeft: 0,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: {width: 3, height: 20},
    shadowOpacity: 0.8,
    shadowRadius: 15,
    elevation: 3,
    backgroundColor: CuraColor.White,
  },
  recordTypeText: {
    fontSize: 15,
    color: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    flexDirection: 'row-reverse',
    marginTop: 50,
  },
});

export default SelectionBoxStyle;
