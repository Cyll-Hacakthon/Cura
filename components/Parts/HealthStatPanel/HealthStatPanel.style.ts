import {StyleSheet} from 'react-native';

const HealthStatPanelStyle = StyleSheet.create({
  customCardStyle: {
    borderRadius: 15,
    marginHorizontal: 5,
    height: 225,
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    paddingVertical: 15,
    marginBottom: 20,
  },
  horizontalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 30,
  },
  infoText: {
    color: 'white',
    fontSize: 15,
    marginLeft: 10,
    flex: 5,
  },
  iconCustomStyle: {
    flex: 1,
  },
  fixTouchOpac: {
    height: 225,
  },
});

export default HealthStatPanelStyle;
