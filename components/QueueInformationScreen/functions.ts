import Firebase from '../../util/firebase';

export const getHospitalInformation = async (
  hospitalID: string,
  setHospitalName: Function,
  setHospitalAddress: Function,
  setSpecialists: Function,
  setDoctors: Function,
) => {
  const hospitalRef = Firebase.firestore()
    .collection('hospitals')
    .doc(hospitalID);

  const hospitalDoc = await hospitalRef.get();

  if (!hospitalDoc) {
    console.log('no such document :(');
    return;
  }

  const hospitalData = hospitalDoc.data();
  if (!hospitalData) {
    console.log('unable to get data :(');
    return;
  }
  setHospitalName(hospitalData.name);
  setHospitalAddress(hospitalData.address);
  setSpecialists(
    Object.keys(hospitalData.doctors).map((string) => {
      return {
        label: string.charAt(0).toUpperCase() + string.slice(1),
        value: string,
      };
    }),
  );

  setDoctors(await formatDoctorsList(hospitalData.doctors));
};

const formatDoctorsList = async (doctorList: any) => {
  const doctorsMap: any = {};
  for (const specialist in doctorList) {
    for (const doctorDocument of doctorList[specialist]) {
      const doctorRef = await doctorDocument.get();

      if (typeof doctorsMap[specialist] === 'undefined') {
        doctorsMap[specialist] = [];
      }
      await doctorsMap[specialist].push({
        label: doctorRef.data().name,
        value: doctorRef.id,
      });
    }
  }

  return doctorsMap;
};
