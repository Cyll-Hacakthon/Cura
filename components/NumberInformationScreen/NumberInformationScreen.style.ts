import {StyleSheet} from 'react-native';
import {CuraColor} from '../../util';

const NumberInformationScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  customCard: {
    width: '95%',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 23,
    marginBottom: 15,
  },
  horizontalWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  label: {
    fontWeight: 'bold',
    marginRight: 15,
  },
  value: {
    flex: 1,
    textAlign: 'right',
  },
  horizontalLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#aeaeae',
    marginVertical: 5,
    marginBottom: 10,
  },
  cancelButton: {
    backgroundColor: 'red',
    borderRadius: 10,
    color: 'white',
    textAlign: 'center',
    alignSelf: 'center',
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginTop: 25,
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  modalQuestion: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  goBackButton: {
    backgroundColor: CuraColor.Green,
    borderRadius: 10,
    color: 'white',
    textAlign: 'center',
    alignSelf: 'center',
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginTop: 25,
  },
});

export default NumberInformationScreenStyle;
