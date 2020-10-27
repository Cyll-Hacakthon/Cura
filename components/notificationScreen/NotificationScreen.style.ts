import {StyleSheet} from 'react-native';

const NotificationScreenStyle = StyleSheet.create({
  container: {
    paddingTop: 55,
  },
  noNotificationIndicator: {
    textAlign: 'center',
    color: 'grey',
  },
  modalContainer: {
    padding: 15,
    flex: 1,
  },
  modalTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    flex: 6,
    marginBottom: 5,
  },
  modalCloseButton: {
    // position: 'absolute',
    // top: 10,
    // right: 10,
    textAlign: 'center',
    paddingHorizontal: 8,
    paddingVertical: 5,
    backgroundColor: 'red',
    borderRadius: 10,
    color: 'white',
    alignSelf: 'flex-start',
    flex: 1,
  },
  modalContent: {
    marginTop: 15,
  },
  modalTimestamp: {
    marginTop: 10,
  },
  horizontalLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#dedede',
    marginVertical: 15,
  },
  horizontalWrap: {
    flexDirection: 'row',
  },
});

export default NotificationScreenStyle;
