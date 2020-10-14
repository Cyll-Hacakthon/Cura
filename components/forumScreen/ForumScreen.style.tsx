import {StyleSheet, Dimensions} from 'react-native';
import {CuraColor} from '../../util';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CuraColor.White,
    zIndex: 0,
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
    paddingTop: 30,
    alignItems: 'center',
  },
  panel: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    //borderWidth: 1,
  },
  title: {
    color: 'white',
  },
  addButton: {
    alignSelf: 'center',
  },
  searchSection: {
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginRight: 5,
  },
  categoryBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    width: (45 / 100) * Dimensions.get('screen').width,
    padding: 10,
    backgroundColor: '#fff',
    color: '#424242',
    borderRadius: 10,
  },
  categoryDropdownCustom: {
    height: 50,
    marginTop: 0,
    borderRadius: 10,
  },
  questionPanelTopMargin: {
    marginTop: 15,
  },
});
