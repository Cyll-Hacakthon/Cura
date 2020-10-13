import {StyleSheet} from 'react-native';
import {CuraColor, Font} from '../../../util';
import {Dimensions} from 'react-native';

const RegisterScreenStyle = StyleSheet.create({
  customCardStyle: {
    height: (75 / 100) * Dimensions.get('screen').height,
  },
  titleText: {
    ...Font.Heading3,
    ...Font.Bold,
    color: 'white',
    marginBottom: 20,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 8,
    width: 250,
    borderRadius: 10,
    marginTop: 15,
    height: 40,
  },
  inputBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    alignItems: 'center',
  },
  addressInputBox: {
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 8,
    borderRadius: 10,
    width: 120,
    height: 40,
  },
  dateInputStyle: {
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 8,
    width: 250,
    borderRadius: 10,
    height: 40,
  },
  buttonStyle: {
    backgroundColor: CuraColor.Green,
    borderRadius: 15,
    padding: 8,
    marginTop: 15,
    marginBottom: 10,
    marginHorizontal: 15,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: {width: 3, height: 20},
    shadowOpacity: 0.8,
    shadowRadius: 15,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
  horizontalBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  underlineText: {
    textDecorationLine: 'underline',
    color: 'blue',
  },
  labelText: {
    marginTop: 15,
  },
  horizontalLine: {
    marginLeft: 10,
    flex: 1,
    marginBottom: 8,
    //borderTopColor: 'grey',
    //borderTopWidth: 1,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  labelBox: {
    flexDirection: 'row',
  },
});

export default RegisterScreenStyle;
