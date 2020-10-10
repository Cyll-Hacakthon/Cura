import React, {useState, useEffect} from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Style from './TakeNumber.style';
import {StackNavigationProp} from '@react-navigation/stack';
import TakeNumberStackParamList from '../Parts/TakeNumberContainer/RootStackParamList';
import Firebase from '../../util/firebase';

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
  const [hospitalList, setHospitalList] = useState<hospitalListType>([]);

  useEffect(() => {
    const getHospitalData = async () => {
      setHospitalList(await getHospitals());
    };

    getHospitalData();
  }, []);

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
        {hospitalList.map((hospital, index) => {
          return (
            <Marker
              key={index}
              coordinate={{
                latitude: hospital.location.latitude,
                longitude: hospital.location.longitude,
              }}
              title={hospital.name}
              description={hospital.address}
            />
          );
        })}
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

type hospitalListType = Array<{
  id: string;
  name: string;
  address: string;
  location: {latitude: number; longitude: number};
}>;

const getHospitals = async (): Promise<hospitalListType> => {
  const db = Firebase.firestore();

  let hospitalsList: hospitalListType = [];

  const hospitalsRef = db.collection('hospitals');
  const response = await hospitalsRef.get();

  response.docs.map((doc) => {
    const data = doc.data();
    hospitalsList.push({
      id: doc.id,
      name: data.name,
      address: data.address,
      location: data.location,
    });
  });

  return hospitalsList;
};

export default TakeNumberScreen;
