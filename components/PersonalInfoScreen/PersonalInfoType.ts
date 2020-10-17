export type PersonalInfoType = {
  age: number;
  bloodType: {
    value: string;
    verified: boolean;
  };
  weight: {
    value: number;
    lastUpdated: string;
  };
  height: {
    value: number;
    lastUpdated: string;
  };
  allergy: Array<string>;
  disability: Array<string>;
  emergencyContact: Array<string>;
  language: Array<string>;
  disease: Array<string>;
};
