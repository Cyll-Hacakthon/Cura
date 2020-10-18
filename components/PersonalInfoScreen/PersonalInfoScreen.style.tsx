import {StyleSheet} from 'react-native';
import {CuraColor} from '../../util';

const PersonalInfoScreenStyle = StyleSheet.create({
  container: {
    padding: 10,
  },
  horizontalLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#bbbbbb',
    marginVertical: 10,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 15,
  },
  horizontalWrap: {
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  username: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
  },
  email: {
    color: 'white',
  },
  infoLabel: {
    flex: 2,
    alignSelf: 'flex-start',
  },
  infoValue: {
    flex: 5,
    backgroundColor: '#eaeaea',
    paddingVertical: 5,
    borderRadius: 10,
  },
  infoValueText: {
    textAlign: 'center',
  },
  editButton: {
    backgroundColor: CuraColor.Green,
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 15,
    position: 'absolute',
    bottom: 10,
    right: 10,
    color: 'white',
  },
  profileSection: {
    backgroundColor: CuraColor.Green,
    paddingLeft: 15,
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  infoSection: {
    marginBottom: 50,
    backgroundColor: 'white',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  greenBorder: {
    borderColor: CuraColor.Green,
    borderWidth: 1,
  },
});

export default PersonalInfoScreenStyle;
