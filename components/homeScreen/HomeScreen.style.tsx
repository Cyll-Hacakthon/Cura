import {StyleSheet} from 'react-native';
import {CuraColor} from '../../util';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CuraColor.White,
  },
  navbar: {
    flex: 0.15,
  },
  topBox: {
    backgroundColor: CuraColor.Green,
    height: 180,
    color: CuraColor.White,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
  },
  welcomeWord: {
    fontFamily: 'Rubik',
    color: CuraColor.White,
  },
  userName: {
    fontFamily: 'Rubik',
    color: CuraColor.White,
    fontSize: 35,
  },
  nameBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '85%',
  },
  content: {},
});
