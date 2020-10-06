import {StyleSheet} from 'react-native';

const CardStyle = StyleSheet.create({
  card: {
    display: 'flex',
    backgroundColor: 'white',
    borderRadius: 15,
    paddingVertical: 25,
    paddingHorizontal: 20,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: {width: 3, height: 20},
    shadowOpacity: 0.8,
    shadowRadius: 15,
    elevation: 10,
  },
});

export default CardStyle;
