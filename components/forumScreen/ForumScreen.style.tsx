import {StyleSheet} from 'react-native';
import {CuraColor} from '../../util';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CuraColor.White,
  },
  navbar: {
    flex: 0.1,
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
  title: {
    position: 'absolute',
    padding: 30,
    marginTop: 5,
    color: 'white',
  },
  addButton: {
    position: 'absolute',
    alignSelf: 'flex-end',
    padding: 30,
    marginTop: 15,
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: '#fff',
    position: 'absolute',
    borderRadius: 10,
    marginTop: 100,
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    width: '75%',
    padding: 10,
    backgroundColor: '#fff',
    color: '#424242',
  },
});
