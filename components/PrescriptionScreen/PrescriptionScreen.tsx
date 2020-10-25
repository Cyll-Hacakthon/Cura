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
      setPrescriptionList(await getPrescriptionInfo());
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
                medicines={prescription.medicines}
                title={prescription.title}
                key={index}
              />
            );
          })
        : null}
    </ScrollView>
  );
};

export default PrescriptionScreen;
