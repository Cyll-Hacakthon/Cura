import {StyleSheet} from 'react-native';
import {CuraColor} from '../../util';

export default StyleSheet.create({
  container: {
    backgroundColor: CuraColor.Green,
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  navText: {
    color: CuraColor.White,
  },
});
