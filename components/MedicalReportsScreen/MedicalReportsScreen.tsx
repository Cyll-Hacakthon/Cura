import React, {useEffect, useState} from 'react';
import {View, ScrollView, Text} from 'react-native';
import Style from './MedicalReportsScreen.style';
import {MedicalReportType} from './MedicalReportType';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons';

import Card from '../Parts/Card/Card';

import {retrieveMedicalReports} from './functions';

const MedicalReportsScreen = () => {
  const [medicalReports, setMedicalReports] = useState<
    MedicalReportType[] | null
  >(null);
  const [selectedReport, setSelectedReport] = useState<MedicalReportType>();

  const handleReportSelect = (reportId: string) => {
    const filteredReports = medicalReports!?.filter((report) => {
      return report.id === reportId;
    });

    setSelectedReport(filteredReports[0]);
  };

  useEffect(() => {
    const getMedicalReports = async () => {
      setMedicalReports(await retrieveMedicalReports());
    };

    getMedicalReports();
  }, []);

  const loadMedicalReports = () => {
    return medicalReports?.map((report, index) => {
      return (
        <ReportCard
          date={report.createdAt}
          doctor={report.doctorName}
          hospital={report.hospital}
          specialist={report.specialist}
          title={report.title}
          key={index}
          onPress={() => handleReportSelect(report.id)}
        />
      );
    });
  };

  return (
    <>
      <ScrollView style={Style.container}>
        {medicalReports ? (
          medicalReports.length !== 0 ? (
            loadMedicalReports()
          ) : (
            <Text style={Style.noReportsIndicator}>
              No Reports Available Yet...
            </Text>
          )
        ) : (
          <Text style={Style.noReportsIndicator}>Loading...</Text>
        )}
        <View style={Style.spacing} />
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
  onPress: Function;
};

const ReportCard = ({
  title,
  hospital,
  specialist,
  doctor,
  date,
  onPress,
}: ReportCardProps) => {
  return (
    <TouchableOpacity onPress={() => onPress()}>
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
