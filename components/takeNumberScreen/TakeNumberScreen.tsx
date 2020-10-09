import React from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Style from './TakeNumber.style';
import {StackNavigationProp} from '@react-navigation/stack';
import TakeNumberStackParamList from '../Parts/TakeNumberContainer/RootStackParamList';

import Card from '../Parts/Card/Card';
import {Text, View, TextInput} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import {TouchableOpacity} from 'react-native-gesture-handler';

type TakeNumberScreenNavigationProp = StackNavigationProp<
  TakeNumberStackParamList,
  'Take Number'
>;

type TakeNumberProps = {
  navigation: TakeNumberScreenNavigationProp;
};

const TakeNumberScreen = ({navigation}: TakeNumberProps) => {
  return (
    <>
      <MapView
        style={Style.mapDisplay}
        provider={PROVIDER_GOOGLE}
        showsUserLocation
        initialRegion={{
          latitude: 5.285153,
          longitude: 100.456238,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          coordinate={{latitude: 5.422016, longitude: 100.313827}}
          title={'Penang Island Hospital'}
          description={
            'Island Hospital, 308 Jalan Macalister, 10450 Georgetown, Pulau Pinang, Malaysia'
          }
        />
      </MapView>
      <View style={Style.uiLayer}>
        <Card style={Style.searchBoxCard}>
          <Text style={Style.searchBoxCardTitle}>Search Hospital</Text>
          <View style={Style.searchInputBox}>
            <TextInput style={Style.searchInput} />
            <MaterialIcons
              style={Style.searchIcon}
              name="search"
              size={25}
              color="black"
            />
          </View>
          <View style={Style.proceedButtonBox}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Queue Information', {hospitalID: 12345});
              }}>
              <Text style={Style.proceedButton}>Proceed</Text>
            </TouchableOpacity>
          </View>
        </Card>
      </View>
    </>
  );
};

export default TakeNumberScreen;
