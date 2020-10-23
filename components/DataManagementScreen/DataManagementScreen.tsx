import React, {useEffect, useState} from 'react';
import {Text, View, ScrollView, Modal} from 'react-native';
import Style from './DataManagementScreen.style';
import {Feather} from '@expo/vector-icons';
import {
  retrieveDataAccessHistory,
  retrieveMedicalReport,
  formatTimestamp,
  DataAccessObjectType,
} from './functions';

import Card from '../Parts/Card/Card';
import Gradient from '../Parts/GradientBackground/GradientBackground';
import {ReportCard} from '../MedicalReportsScreen/MedicalReportsScreen';
import {TouchableOpacity} from 'react-native-gesture-handler';

const DataManagementScreen = () => {
  const [dataAccessHistory, setDataAccessHistory] = useState<
    DataAccessObjectType[] | null
  >(null);
  const [
    selectedHistory,
    setSelectedHistory,
  ] = useState<DataAccessObjectType | null>(null);

  useEffect(() => {
    const getDataAccessHistory = async () => {
      setDataAccessHistory(await retrieveDataAccessHistory());
    };

    getDataAccessHistory();
  }, []);

  const listAllHistoryAsCards = () => {
    return dataAccessHistory?.map((accessHistory, index) => {
      return (
        <InfoCard
          key={index}
          accessHistoryObject={accessHistory}
          setSelectedHistory={setSelectedHistory}
        />
      );
    });
  };

  return (
    <>
      <ScrollView>
        <View style={Style.container}>{listAllHistoryAsCards()}</View>
      </ScrollView>
      {selectedHistory && (
        <AccessHistoryInfoModal
          setSelectedHistory={setSelectedHistory}
          selectedHistory={selectedHistory}
        />
      )}
      <View style={Style.searchButton}>
        <Text style={Style.whiteText}>
          <Feather name="search" />
          Search
        </Text>
      </View>
    </>
  );
};

type InfoCardProps = {
  accessHistoryObject: DataAccessObjectType;
  setSelectedHistory: Function;
};

const InfoCard = (props: InfoCardProps) => {
  const {accessHistoryObject, setSelectedHistory} = props;

  const title =
    accessHistoryObject.type === 'access'
      ? 'Medical Information Accessed'
      : 'Medical Information Edited';

  const formatedDate = formatTimestamp(accessHistoryObject.date.toDate());
  return (
    <TouchableOpacity onPress={() => setSelectedHistory(accessHistoryObject)}>
      <Card style={Style.customCard}>
        <View style={Style.cardInfoSection}>
          <Text style={Style.cardTitle}>{title}</Text>
          <Text>
            <Feather name="user" /> {accessHistoryObject.doctor}
          </Text>
          <Text>
            <Feather name="clock" /> {formatedDate}
          </Text>
        </View>
        <Text style={Style.cardDetailButton}>
          Details
          <Feather name="chevron-right" />
        </Text>
      </Card>
    </TouchableOpacity>
  );
};

type AccessHistoryInfoModalProps = {
  setSelectedHistory: Function;
  selectedHistory: DataAccessObjectType;
};

const AccessHistoryInfoModal = (props: AccessHistoryInfoModalProps) => {
  const {setSelectedHistory, selectedHistory} = props;
  const [medicalReports, setMedicalReports] = useState<any>([]);

  useEffect(() => {
    const getMedicalReports = async () => {
      setMedicalReports(
        await retrieveMedicalReport(selectedHistory.reportAccessed),
      );
    };

    getMedicalReports();
  }, [selectedHistory, setMedicalReports]);

  const title =
    selectedHistory.type === 'access'
      ? 'Medical Information Accessed'
      : 'Medical Information Edited';

  const formatedDate = formatTimestamp(selectedHistory.date.toDate());

  const loadMedicalReportCard = () => {
    return medicalReports?.map((report: any) => {
      return (
        <ReportCard
          title={report.title}
          date={report.createdAt}
          doctor={report.doctorName}
          specialist={report.specialist}
          hospital={report.hospital}
        />
      );
    });
  };

  return (
    <Modal>
      <Gradient type={'Light'} style={Style.gradientCustom}>
        <View style={Style.historyModalContainer}>
          <Card style={Style.historyModalInfoSection}>
            <Text
              style={Style.modalCloseButton}
              onPress={() => setSelectedHistory(null)}>
              Close
            </Text>
            <Text style={Style.historyModalTitle}>{title}</Text>
            <Text>
              <Feather name="user" /> {selectedHistory.doctor}
            </Text>
            <Text>
              <Feather name="clock" /> {formatedDate}
            </Text>
          </Card>
          {loadMedicalReportCard()}
        </View>
      </Gradient>
    </Modal>
  );
};

export default DataManagementScreen;
