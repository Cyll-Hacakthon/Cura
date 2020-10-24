import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import Style from './PrescriptionScreen.style';

import PrescriptionItem from './PrescriptionItem';

const PrescriptionScreen = () => {
  return (
    <ScrollView style={Style.container}>
      <PrescriptionItem />
    </ScrollView>
  );
};

export default PrescriptionScreen;
