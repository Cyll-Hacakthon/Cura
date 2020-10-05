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
    borderRadius: 5,
    alignSelf: 'flex-end',
  },
  userImageBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectionBox: {
    flexDirection: 'row',
    padding: 10,
    height: 180,
    width: '40%',
    borderRadius: 15,
    marginLeft: '6%',
    marginTop: -20,
    marginBottom: 50,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: {width: 3, height: 20},
    shadowOpacity: 0.8,
    shadowRadius: 15,
    elevation: 3,
    backgroundColor: CuraColor.White,
  },
  rowContainer: {
    flexDirection: 'row',
  },
  recordTypeText: {
    color: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    flexDirection: 'row-reverse',
    marginTop: 10,
  },
  questionListTitle: {
    ...Font.Heading3,
    ...Font.Bold,
    textAlign: 'center',
  },
});
