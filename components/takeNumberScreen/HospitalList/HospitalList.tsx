import React from 'react';
import {Text, View, ScrollView, StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons';
import {CuraColor} from '../../../util';

import Card from '../../Parts/Card/Card';
import {TouchableOpacity} from 'react-native-gesture-handler';

type HospitalListProps = {
  style?: Object;
  hospitalList?: Array<{
    id: string;
    name: string;
    address: string;
    location: {latitude: number; longitude: number};
  }>;
  onHospitalTap: Function;
  toggleList: Function;
};

const HospitalList = ({
  style,
  hospitalList,
  onHospitalTap,
  toggleList,
}: HospitalListProps) => {
  return (
    <Card style={style}>
      <ScrollView>
        {hospitalList?.length !== 0 ? (
          hospitalList?.map((hospital, index) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  onHospitalTap({
                    latitude: hospital.location.latitude,
                    longitude: hospital.location.longitude,
                  });
                }}>
                <ListItem
                  title={hospital.name}
                  description={hospital.address}
                  key={index}
                />
              </TouchableOpacity>
            );
          })
        ) : (
          <Text style={HospitalListStyle.emptyResultStyle}>
            No Hospital Found
          </Text>
        )}
      </ScrollView>
      <View style={HospitalListStyle.hideButton}>
        <TouchableOpacity
          onPress={() => {
            toggleList();
          }}>
          <Text style={HospitalListStyle.hideButtonText}>Close </Text>
        </TouchableOpacity>
      </View>
    </Card>
  );
};

const HospitalListStyle = StyleSheet.create({
  hideButton: {
    marginBottom: -15,
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'red',
    marginHorizontal: 115,
    borderRadius: 15,
  },
  hideButtonText: {
    color: 'red',
  },
  emptyResultStyle: {
    color: '#aaaaaa',
    textAlign: 'center',
    marginBottom: 5,
  },
});

type ListItemProps = {
  title: string;
  description: string;
};

const ListItem = ({title, description}: ListItemProps) => {
  return (
    <View style={ListItemStyle.box}>
      <View>
        <Text style={ListItemStyle.title}>
          {title}
          <Feather name="chevron-right" size={20} color={CuraColor.Green} />
        </Text>
        <Text style={ListItemStyle.description}>{description}</Text>
      </View>
    </View>
  );
};

const ListItemStyle = StyleSheet.create({
  box: {
    paddingVertical: 10,
    display: 'flex',
    borderBottomColor: '#dedede',
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 18,
    display: 'flex',
    justifyContent: 'space-between',
  },
  description: {
    fontSize: 12,
  },
});

export default HospitalList;
