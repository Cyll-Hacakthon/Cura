import {StyleSheet} from 'react-native';
import {CuraColor} from '../../util';

const TakeNumberScreenStyle = StyleSheet.create({
  mapDisplay: {
    flex: 1,
  },
  uiLayer: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    top: '70%',
    left: 0,
    right: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  searchBoxCard: {
    marginBottom: '8%',
  },
  searchBoxCardTitle: {
    color: CuraColor.Green,
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 15,
    marginTop: -10,
  },
  searchInputBox: {
    width: 200,
    height: 35,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 15,
    paddingLeft: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchInput: {
    flex: 1,
  },
  searchIcon: {
    padding: 5,
    paddingRight: 10,
  },
  proceedButtonBox: {
    marginTop: 15,
    backgroundColor: CuraColor.Green,
    paddingVertical: 5,
    borderRadius: 15,
    marginHorizontal: 35,
  },
  proceedButton: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
});

export default TakeNumberScreenStyle;
