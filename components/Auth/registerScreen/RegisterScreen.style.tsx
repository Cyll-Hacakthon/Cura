import {StyleSheet} from 'react-native';
import {CuraColor, Font} from '../../../util';

const RegisterScreenStyle = StyleSheet.create({
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
});

export default RegisterScreenStyle;
