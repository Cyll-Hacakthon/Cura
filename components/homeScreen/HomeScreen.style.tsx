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
  userImage: {
    width: 50,
    height: 50,
    backgroundColor: CuraColor.White,
    borderRadius: 25,
    alignSelf: 'flex-end',
  },
  userImageBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginTop: 10,
    justifyContent: 'space-between',
  },
  questionListTitle: {
    ...Font.Heading3,
    ...Font.Bold,
    textAlign: 'center',
  },
});
