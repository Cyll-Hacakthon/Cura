import React, {useState} from 'react';
import {View, ScrollView, Text} from 'react-native';
import Style from './MedicalReportsScreen.style';
import {MedicalReportType} from './MedicalReportType';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons';

import Card from '../Parts/Card/Card';

const MedicalReportsScreen = () => {
  const [medicalReports, setMedicalReports] = useState<
    MedicalReportType[] | null
  >(null);

  return (
    <>
      <ScrollView style={Style.container}>
        {!medicalReports ? (
          <ReportCard
            title="Unknown Sharp Headache"
            hospital="Pantai Hospital Penang"
            specialist="Neurology"
            doctor="Dr. Nassim Nicholas Taleb"
            date="9 Oct 2020 3:30 pm"
          />
        ) : (
          <Text style={Style.noReportsIndicator}>
            No Medical Reports Available Yet
          </Text>
        )}
      </ScrollView>
      <View style={Style.searchButton}>
        <Text style={Style.whiteWord}>Search </Text>
        <Feather name="search" size={20} color="white" />
      </View>
    </>
  );
};

type InformationBarProps = {
  label: string;
  value: string;
};

const InformationBar = ({label, value}: InformationBarProps) => {
  return (
    <View style={Style.horizontalWrap}>
      <Text style={Style.label}>{label}</Text>
      <Text style={Style.value}>{value}</Text>
    </View>
  );
};

type ReportCardProps = {
  title: string;
  hospital: string;
  specialist: string;
  doctor: string;
  date: string;
};

const ReportCard = ({
  title,
  hospital,
  specialist,
  doctor,
  date,
}: ReportCardProps) => {
  return (
    <TouchableOpacity>
      <Card style={Style.customCard}>
        <Text style={Style.cardTitle}>{title}</Text>
        <InformationBar label="Hospital" value={hospital} />
        <InformationBar label="Specialist" value={specialist} />
        <InformationBar label="Doctor" value={doctor} />
        <InformationBar label="Date" value={date} />
      </Card>
    </TouchableOpacity>
  );
};

export default MedicalReportsScreen;
