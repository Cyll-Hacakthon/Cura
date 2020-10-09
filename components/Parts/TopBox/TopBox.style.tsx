import {StyleSheet} from 'react-native';
import {CuraColor} from '../../../util';

const TopBoxStyle = StyleSheet.create({
  topBox: {
    backgroundColor: CuraColor.Green,
    height: 180,
    borderBottomRightRadius: 60,
    borderBottomLeftRadius: 60,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TopBoxStyle;
