import {StyleSheet} from 'react-native';
import {CuraColor, Font} from '../../util';

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
  forumContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  forumBoxStyle: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 20,
    borderRadius: 20,
    height: 90,
    width: '85%',
    backgroundColor: CuraColor.Green,
    elevation: 5,
  },
  forumImage: {
    width: 47,
    height: 47,
    backgroundColor: CuraColor.White,
    borderRadius: 5,
  },
  forumImagBox: {
    padding: 10,
  },
  forumText: {
    color: 'white',
  },
  forumTextBox: {
    flex: 1,
    padding: 10,
  },
});
