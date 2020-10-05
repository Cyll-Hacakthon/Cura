import {StyleSheet} from 'react-native';
import {CuraColor, Font} from '../../util';

const curaStyle = StyleSheet.create({
  topBox: {
    backgroundColor: CuraColor.Green,
    height: 180,
    borderBottomRightRadius: 60,
    borderBottomLeftRadius: 60,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userImage: {
    height: 65,
    width: 65,
    backgroundColor: CuraColor.White,
    borderRadius: 5,
  },
  profileBox: {
    marginTop: -15,
    display: 'flex',
    flexDirection: 'row',
  },
  nameText: {
    ...Font.Heading3,
    color: CuraColor.White,
  },
  mailText: {
    ...Font.LeadSmall,
    color: CuraColor.White,
  },
  wordBox: {
    marginLeft: 15,
    display: 'flex',
    justifyContent: 'space-between',
  },
  optionSelectionBox: {
    marginTop: -30,
    backgroundColor: CuraColor.White,
    width: 300,
    borderRadius: 15,
    alignSelf: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: {width: 3, height: 20},
    shadowOpacity: 0.8,
    shadowRadius: 15,
    elevation: 3,
  },
  mainButton: {
    backgroundColor: CuraColor.Green,
    width: 65,
    height: 65,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: {width: 20, height: 5},
    shadowOpacity: 0.8,
    shadowRadius: 15,
    elevation: 5,
  },
  mainButtonTitle: {
    textAlign: 'center',
  },
  mainButtonBox: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 50,
    marginVertical: 15,
    justifyContent: 'space-around',
  },
});

export default curaStyle;
