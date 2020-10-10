import React, {useState, useEffect} from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Style from './TakeNumber.style';
import {StackNavigationProp} from '@react-navigation/stack';
import TakeNumberStackParamList from '../Parts/TakeNumberContainer/RootStackParamList';
import Firebase from '../../util/firebase';

import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';

import Card from '../Parts/Card/Card';
import {Text, View, TextInput, Keyboard} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import HospitalListCard from './HospitalList/HospitalList';

type TakeNumberScreenNavigationProp = StackNavigationProp<
  TakeNumberStackParamList,
  'Take Number'
>;

type TakeNumberProps = {
  navigation: TakeNumberScreenNavigationProp;
};

const TakeNumberScreen = ({navigation}: TakeNumberProps) => {
  const [hospitalList, setHospitalList] = useState<hospitalListType>([]);
  const [focusedLocation, setFocusedLocation] = useState({
    latitude: 5.285153,
    longitude: 100.456238,
  });
  const [showHospitalListCard, setShowHospitalListCard] = useState(false);

  useEffect(() => {
    const getHospitalData = async () => {
      setHospitalList(await getHospitals());
    };

    const getLocation = async () => {
      const {status} = await Permissions.askAsync(Permissions.LOCATION);

      if (status !== 'granted') {
        console.log("This bullshit won't work");
      }

      const userLocation = await Location.getCurrentPositionAsync({
        accuracy: 2, // LocationAccuracy enum don't work...
      });
      setFocusedLocation({
        latitude: userLocation.coords.latitude,
        longitude: userLocation.coords.longitude,
      });
    };

    getHospitalData();
    getLocation();
  }, []);

  const onHospitalTap = (coord: {latitude: number; longitude: number}) => {
    setFocusedLocation({latitude: coord.latitude, longitude: coord.longitude});
    setShowHospitalListCard(false);
  };

  return (
    <>
      <MapView
        style={Style.mapDisplay}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        region={{
          latitude: focusedLocation.latitude,
          longitude: focusedLocation.longitude,
          latitudeDelta: 0.01, //0.0922
          longitudeDelta: 0.01, //0.0421
        }}
        initialRegion={{
          latitude: focusedLocation.latitude,
          longitude: focusedLocation.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {hospitalList.map((hospital, index) => {
          return (
            <Marker
              key={index}
              pinColor="blue"
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
      {showHospitalListCard ? (
        <View style={Style.uiLayerList}>
          <HospitalListCard
            style={Style.listCardStyle}
            hospitalList={hospitalList}
            onHospitalTap={onHospitalTap}
            toggleList={setShowHospitalListCard}
          />
        </View>
      ) : null}
      <View style={Style.uiLayer}>
        <Card style={Style.searchBoxCard}>
          <View style={Style.searchInputBox}>
            <TextInput
              style={Style.searchInput}
              placeholder="Search Hospital"
            />
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
                Keyboard.dismiss();
                setShowHospitalListCard(true);
              }}>
              <Text style={Style.proceedButton}>Search</Text>
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
