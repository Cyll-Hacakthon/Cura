import {StyleSheet} from 'react-native';
import {CuraColor} from '../../util';

const DataManagementScreenStyle = StyleSheet.create({
  container: {
    paddingTop: 15,
  },
  customCard: {
    margin: 15,
    flexDirection: 'row',
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 5,
  },
  cardInfoSection: {
    flex: 3,
  },
  cardDetailButton: {
    flex: 1,
    textAlign: 'center',
    alignSelf: 'center',
  },
  modalCloseButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: 'red',
    position: 'absolute',
    right: 10,
    top: 15,
    color: 'white',
    borderRadius: 10,
    zIndex: 50,
  },
  historyModalContainer: {
    //paddingHorizontal: 15,
    //paddingVertical: 15,
  },
  historyModalTitle: {
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 15,
  },
  historyModalInfoSection: {
    width: '100%',
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
    marginBottom: 20,
  },
  gradientCustom: {
    justifyContent: 'flex-start',
  },
  searchButton: {
    position: 'absolute',
    right: 15,
    bottom: 15,
    justifyContent: 'space-between',
    borderRadius: 10,
    backgroundColor: CuraColor.Green,
    padding: 5,
    paddingHorizontal: 15,
    flexDirection: 'row',
  },
  whiteText: {
    color: 'white',
  },
});

export default DataManagementScreenStyle;
