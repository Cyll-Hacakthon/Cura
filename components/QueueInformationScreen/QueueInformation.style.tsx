import {StyleSheet} from 'react-native';
import {CuraColor, Font} from '../../util';

const QueueInformationScreenStyle = StyleSheet.create({
  hospitalName: {
    ...Font.Heading3,
    fontSize: 25,
    color: CuraColor.White,
    textAlign: 'center',
    width: 300,
  },
  hospitalAddress: {
    color: CuraColor.White,
    textAlign: 'center',
  },
  hospitalInfo: {
    marginHorizontal: 50,
    marginTop: 10,
  },
  cardStyle: {
    marginHorizontal: 25,
    marginTop: -35,
  },
  textInputStyle: {
    borderColor: '#dbdbdb',
    borderWidth: 1,
    height: 40,
    borderRadius: 15,
    paddingLeft: 10,
    marginTop: 5,
  },
  questionBox: {
    marginTop: 15,
  },
  inlineStyle: {
    marginHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  buttonBox: {
    backgroundColor: CuraColor.Green,
    marginTop: 15,
    marginHorizontal: 30,
    padding: 10,
    borderRadius: 15,
  },
  buttonText: {
    color: CuraColor.White,
    textAlign: 'center',
  },
});

export default QueueInformationScreenStyle;
