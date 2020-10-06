import {StyleSheet} from 'react-native';
import {CuraColor, Font} from '../../../util';

const LoginScreenStyle = StyleSheet.create({
  titleText: {
    ...Font.Heading3,
    ...Font.Bold,
    color: 'white',
    marginBottom: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullScreen: {
    flex: 1,
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
  buttonStyle: {
    backgroundColor: CuraColor.Green,
    borderRadius: 15,
    padding: 8,
    marginTop: 35,
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
  signUpTextbar: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
  },
  signUpButton: {
    textDecorationLine: 'underline',
    color: 'blue',
  },
});

export default LoginScreenStyle;
