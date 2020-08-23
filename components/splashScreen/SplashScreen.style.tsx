import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export default StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 80,
    color: Colors.white,
    fontFamily: 'Rubik',
  },
  subtitle: {
    fontSize: 20,
    color: Colors.white,
    fontFamily: 'Rubik',
  },
});
