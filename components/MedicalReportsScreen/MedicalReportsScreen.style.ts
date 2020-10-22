import {StyleSheet} from 'react-native';
import {CuraColor} from '../../util';

const MedicalReportsScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingVertical: 15,
  },
  customCard: {
    width: '90%',
    marginBottom: 25,
    alignSelf: 'center',
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 5,
  },
  horizontalWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    flex: 1,
  },
  value: {
    flex: 2,
    textAlign: 'right',
  },
  noReportsIndicator: {
    textAlign: 'center',
    color: '#888888',
    marginTop: 15,
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
  whiteWord: {
    color: 'white',
  },
  spacing: {
    padding: 25,
  },
  individualReportContainer: {
    padding: 15,
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
  reportModalTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 15,
  },
  horizontalLine: {
    borderBottomColor: '#dedede',
    borderBottomWidth: 1,
    marginVertical: 15,
  },
  reportInfoSection: {
    paddingHorizontal: 15,
  },
  boldText: {
    fontWeight: 'bold',
  },
});

export default MedicalReportsScreenStyle;
