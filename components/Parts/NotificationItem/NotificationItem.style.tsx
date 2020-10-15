import {StyleSheet} from 'react-native';
import {CuraColor} from '../../../util';

const NotificationItemStyle = StyleSheet.create({
  container: {
    marginBottom: 10,
    padding: 15,
    paddingTop: 2,
    backgroundColor: '#fafafa',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  time: {
    color: 'grey',
    fontSize: 12,
  },
  horizontalWrap: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  senderUpdate: {
    fontSize: 12,
    paddingHorizontal: 10,
    borderRadius: 5,
    color: 'white',
    backgroundColor: CuraColor.Green,
  },
  senderRemind: {
    fontSize: 12,
    paddingHorizontal: 10,
    borderRadius: 5,
    color: 'white',
    backgroundColor: '#E5B25D',
  },
  senderWarning: {
    fontSize: 12,
    paddingHorizontal: 10,
    borderRadius: 5,
    color: 'white',
    backgroundColor: '#D74E09',
  },
  newIndicator: {
    fontWeight: 'normal',
    backgroundColor: CuraColor.Green,
    fontSize: 10,
    color: 'white',
    borderRadius: 5,
    padding: 5,
    alignSelf: 'center',
  },
});

export default NotificationItemStyle;
