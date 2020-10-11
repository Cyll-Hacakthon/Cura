export type hospitalType = {
  id: string;
  name: string;
  address: string;
  location: {latitude: number; longitude: number};
};

export type hospitalListType = Array<hospitalType>;

export const hospitalSearch = (
  targetString: string,
  hospitalList: hospitalListType,
) => {
  const targetWordArray = targetString.split(' ');

  const processed = hospitalList.map((hospital) => {
    let counter = 0;
    targetWordArray.forEach((word) => {
      const regex = new RegExp(`${word}`, 'gi');
      regex.test(hospital.name) ? counter++ : null;
    });

    return {hospital, count: counter};
  });

  const filtered = processed.filter((hospital) => {
    return hospital.count > 0;
  });

  const sorted = filtered.sort((hosA, hosB) => {
    return hosB.count - hosA.count;
  });

  const removedCount = sorted.map((hospital) => {
    return hospital.hospital;
  });

  return removedCount;
};
