import React, {useEffect, useState} from 'react';
import {View, ScrollView, Text, Modal} from 'react-native';
import Style from './MedicalReportsScreen.style';
import {MedicalReportType} from './MedicalReportType';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons';

import Card from '../Parts/Card/Card';
import DatePicker from 'react-native-datepicker';

import {retrieveMedicalReports} from './functions';

const MedicalReportsScreen = () => {
  const [medicalReports, setMedicalReports] = useState<
    MedicalReportType[] | null
  >(null);
  const [
    selectedReport,
    setSelectedReport,
  ] = useState<MedicalReportType | null>(null);

  const [settingModalVisible, setSettingModalVisible] = useState(false);

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
        <Text
          style={Style.whiteWord}
          onPress={() => setSettingModalVisible(true)}>
          Search{' '}
        </Text>
        <Feather name="search" size={20} color="white" />
      </View>
      {selectedReport && (
        <IndividualReportModal
          report={selectedReport}
          onClose={() => {
            setSelectedReport(null);
          }}
        />
      )}
      <SearchSettingModal
        visible={settingModalVisible}
        closeModal={() => {
          setSettingModalVisible(false);
        }}
      />
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

export const ReportCard = ({
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

type IndividualReportModalType = {
  report: MedicalReportType;
  onClose: Function;
};

const IndividualReportModal = ({
  onClose,
  report,
}: IndividualReportModalType) => {
  const {
    title,
    hospital,
    assessment,
    createdAt,
    doctorName,
    rx,
    specialist,
    plan,
  } = report;
  return (
    <Modal>
      <View style={Style.individualReportContainer}>
        <Text
          style={Style.modalCloseButton}
          onPress={() => {
            onClose();
          }}>
          Close
        </Text>
        <Text style={Style.reportModalTitle}>{title}</Text>
        <InformationBar label={'Hospital'} value={hospital} />
        <InformationBar label={'Doctor'} value={doctorName} />
        <InformationBar label={'Specialist'} value={specialist} />
        <InformationBar label={'Visit Date'} value={createdAt} />
        <View style={Style.horizontalLine} />
        <Text style={Style.boldText}>Assessment</Text>
        <Text> </Text>
        <Text>{assessment}</Text>
        <View style={Style.horizontalLine} />
        <Text style={Style.boldText}>Prescription</Text>
        <Text> </Text>
        <Text>{rx}</Text>
        <View style={Style.horizontalLine} />
        <Text style={Style.boldText}>Future Plan</Text>
        <Text> </Text>
        <Text>{plan}</Text>
      </View>
    </Modal>
  );
};

type InputBarProps = {
  inputType: 'Text' | 'Date';
  label: string;
  placeholder?: string;
};

const InputBar = ({inputType, label, placeholder}: InputBarProps) => {
  let inputComponent =
    inputType === 'Text' ? (
      <TextInput placeholder={placeholder} style={Style.inputStyle} />
    ) : (
      <DatePicker
        androidMode="spinner"
        date={'6-11-20'}
        format="DD-MM-YYYY"
        placeholder="Birthdate"
        showIcon={false}
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{dateInput: Style.dateInputStyle}}
      />
    );

  return (
    <View style={Style.inputBarHorizontalWrap}>
      <Text>{label}</Text>
      {inputComponent}
    </View>
  );
};

type SearchSettingModalProps = {
  closeModal: Function;
  visible: boolean;
};

const SearchSettingModal = ({closeModal, visible}: SearchSettingModalProps) => {
  return (
    <Modal visible={visible}>
      <Text
        style={Style.modalCloseButton}
        onPress={() => {
          closeModal();
        }}>
        Close
      </Text>
      <View style={Style.settingModalContainer}>
        <Text style={Style.reportModalTitle}>Search Setting</Text>
        <InputBar inputType="Text" label="Title" />
        <InputBar inputType="Text" label="Doctor" />
        <InputBar inputType="Text" label="Hospital" />
        <InputBar inputType="Date" label="From" />
        <InputBar inputType="Date" label="To" />
        <Text style={Style.modalSearchButton}>Search</Text>
      </View>
    </Modal>
  );
};

export default MedicalReportsScreen;
