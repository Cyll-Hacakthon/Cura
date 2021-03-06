import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Style from './NotificationItem.style';
import {Feather} from '@expo/vector-icons';

type NotificationItemProps = {
  title: string;
  content: string;
  sender: string;
  timestamp: Date;
  category: string;
  onPress: Function;
};

const NotificationItem = ({
  title,
  content,
  sender,
  timestamp,
  category,
  onPress,
}: NotificationItemProps) => {
  let selectedCategoryStyle;
  switch (category) {
    case 'update':
      selectedCategoryStyle = Style.senderUpdate;
      break;
    case 'remind':
      selectedCategoryStyle = Style.senderRemind;
      break;
    case 'warning':
      selectedCategoryStyle = Style.senderWarning;
      break;
  }

  const timestampDisplay = formatTimestamp(timestamp);

  return (
    <TouchableOpacity
      onPress={() => {
        onPress();
      }}>
      <View style={Style.container}>
        <View style={Style.horizontalWrap}>
          <Text style={Style.title}>{title}</Text>
        </View>
        <Text ellipsizeMode={'tail'} numberOfLines={2}>
          {content}
        </Text>
        <View style={Style.horizontalWrap}>
          <Text style={selectedCategoryStyle}>{sender}</Text>
          <Text style={Style.time}>
            <Feather name="clock" color="grey" /> {timestampDisplay}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const formatTimestamp = (timestamp: Date) => {
  const timestampHour = timestamp.getHours();
  const timestampMinute = timestamp.getMinutes();

  const date = timestamp.getDate();
  const month = timestamp.toDateString().split(' ')[1];
  const year = timestamp.getFullYear();
  const hour = timestampHour > 12 ? timestampHour - 12 : timestampHour;
  const minute = timestampMinute < 10 ? `0${timestampMinute}` : timestampMinute;

  const ampm = timestampHour > 11 ? 'pm' : 'am';

  return `${date} ${month} ${year} ${hour}:${minute} ${ampm}`;
};

export default NotificationItem;
