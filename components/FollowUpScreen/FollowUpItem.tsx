import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Feather} from '@expo/vector-icons';
import {CuraColor} from '../../util';
import Firebase from '../../util/firebase';

type FollowUpItemProps = {
  followUpInfo: {
    title: string;
    hospital: string;
    doctor: string;
    date: Firebase.firestore.Timestamp;
  };
};

const FollowUpItem = ({followUpInfo}: FollowUpItemProps) => {
  const {title, hospital, doctor, date} = followUpInfo;

  const formatedTime = formatTimestamp(date.toDate());
  return (
    <View style={Style.container}>
      <View style={Style.horizontalWrap}>
        <Text style={Style.title}>{formatedTime}</Text>
        <View style={Style.titleLine} />
      </View>
      <View style={Style.horizontalWrap}>
        <Feather name="info" style={Style.icon} />
        <Text>Follow Up : {title}</Text>
      </View>
      <View style={Style.horizontalWrap}>
        <Feather name="map-pin" style={Style.icon} />
        <Text>{hospital}</Text>
      </View>
      <View style={Style.horizontalWrap}>
        <Feather name="user" style={Style.icon} />
        <Text>{doctor}</Text>
      </View>
    </View>
  );
};

const formatTimestamp = (timestamp: Date) => {
  const date = timestamp.getDate();
  const month = timestamp.toDateString().split(' ')[1];
  const year = timestamp.getFullYear();

  return `${date} ${month} ${year}`;
};

export default FollowUpItem;

const Style = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginBottom: 18,
  },
  titleLine: {
    borderBottomColor: CuraColor.DarkGreen,
    borderBottomWidth: 1,
    flex: 1,
    marginBottom: 15,
    marginLeft: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
    color: CuraColor.DarkGreen,
  },
  horizontalWrap: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  icon: {
    paddingTop: 3,
    marginRight: 8,
  },
});
