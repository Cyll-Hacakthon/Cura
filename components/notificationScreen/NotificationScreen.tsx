import React, {useEffect, useState} from 'react';
import {View, Text, Modal} from 'react-native';
import Style from './NotificationScreen.style';
import {Feather} from '@expo/vector-icons';
import {getNotificationList} from './function';

import NotificationItem from '../Parts/NotificationItem/NotificationItem';
import {NotificationType, formatTimestamp} from './function';

const NotificationScreen = () => {
  const [notificationList, setNotificationList] = useState<Array<
    NotificationType
  > | null>(null);

  const [
    selectedNotification,
    setSelectedNotification,
  ] = useState<NotificationType | null>(null);

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const retrieveNotifications = async () => {
      setNotificationList(await getNotificationList());
    };

    retrieveNotifications();
  }, [selectedNotification]);

  return (
    <>
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
                    onPress={() => {
                      setSelectedNotification({
                        title: data.title,
                        content: data.content,
                        category: data.category,
                        timestamp: data.timestamp,
                        sender: data.sender,
                      });
                    }}
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
      {selectedNotification && (
        <Modal visible={true}>
          <View style={Style.modalContainer}>
            <Text style={Style.modalTitle}>{selectedNotification.title}</Text>
            <Text>From : {selectedNotification.sender}</Text>
            <Text style={Style.modalTimestamp}>
              <Feather name="clock" color="grey" />{' '}
              {formatTimestamp(selectedNotification.timestamp.toDate())}
            </Text>
            <View style={Style.horizontalLine} />
            <Text>Message :</Text>
            <Text style={Style.modalContent}>
              {selectedNotification.content}
            </Text>
            <Text
              style={Style.modalCloseButton}
              onPress={() => {
                setSelectedNotification(null);
              }}>
              Close
            </Text>
          </View>
        </Modal>
      )}
    </>
  );
};

export default NotificationScreen;
