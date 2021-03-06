import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import Style from './PrescriptionScreen.style';

import PrescriptionItem from './PrescriptionItem';
import {getPrescriptionInfo, PrescriptionType} from './function';

const PrescriptionScreen = () => {
  const [prescriptionList, setPrescriptionList] = useState<
    PrescriptionType[] | null
  >(null);

  useEffect(() => {
    const retrievePrescriptionInfo = async () => {
      getPrescriptionInfo(setPrescriptionList);
    };

    retrievePrescriptionInfo();
  }, []);

  return (
    <ScrollView style={Style.container}>
      {prescriptionList
        ? prescriptionList.map((prescription, index) => {
            return (
              <PrescriptionItem
                dueDate={prescription.dueDate}
                hospital={prescription.hospital}
                limit={prescription.limit}
                medicine={prescription.medicine}
                title={prescription.title}
                takenToday={prescription.takenToday}
                id={prescription.id}
                key={index}
              />
            );
          })
        : null}
    </ScrollView>
  );
};

export default PrescriptionScreen;
