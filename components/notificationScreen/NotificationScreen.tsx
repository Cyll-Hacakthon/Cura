import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import Style from './NotificationScreen.style';
import {Feather} from '@expo/vector-icons';
import {getNotificationList} from './function';

import NotificationItem from '../Parts/NotificationItem/NotificationItem';
import {NotificationType} from './function';

const NotificationScreen = () => {
  const [notificationList, setNotificationList] = useState<Array<
    NotificationType
  > | null>([]);

  useEffect(() => {
    const retrieveNotifications = async () => {
      setNotificationList(await getNotificationList());
    };

    retrieveNotifications();
  }, []);

  return (
    <View style={Style.container}>
      {notificationList ? (
        notificationList.length !== 0 ? (
          <>
            {notificationList.map((data, index) => {
              const timestamp = new Date(data.timestamp.toDate());
              return (
                <NotificationItem
                  key={index}
                  title={data.title}
                  content={data.content}
                  sender={data.sender}
                  timestamp={timestamp}
                  category={data.category}
                />
              );
            })}
          </>
        ) : (
          <Text style={Style.noNotificationIndicator}>
            <Feather name="smile" color="grey" size={15} />
            {'  '}
            You Have No Notifications To See.
          </Text>
        )
      ) : (
        <Text style={Style.noNotificationIndicator}>Loading...</Text>
      )}
    </View>
  );
};

export default NotificationScreen;
