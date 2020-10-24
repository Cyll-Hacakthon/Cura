import React, {useEffect, useState} from 'react';
import {ScrollView, Text} from 'react-native';
import Style from './FollowUpScreen.style';
import Firebase from '../../util/firebase';
import {getFollowUpData} from './function';

import FollowUpItem from './FollowUpItem';

type FollowUpType = {
  title: string;
  hospital: string;
  date: Firebase.firestore.Timestamp;
  doctor: string;
};

const FollowUpScreen = () => {
  const [followUpList, setFollowUpList] = useState<FollowUpType[] | null>(null);
  useEffect(() => {
    const getFollowUpInformation = async () => {
      setFollowUpList(await getFollowUpData());
    };

    getFollowUpInformation();
  }, []);

  return (
    <ScrollView style={Style.container}>
      {followUpList ? (
        followUpList.map((followUp, index) => {
          return <FollowUpItem key={index} followUpInfo={followUp} />;
        })
      ) : (
        <Text style={Style.loadingIndicator}>Loading...</Text>
      )}
    </ScrollView>
  );
};

export default FollowUpScreen;
