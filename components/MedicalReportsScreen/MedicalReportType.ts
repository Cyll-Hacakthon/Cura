export type MedicalReportType = {
  createdAt: {seconds: number; nanoseconds: number};
  doctorName: string;
  hospital: string;
  rx: string;
  specialist: string;
  title: string;
};
