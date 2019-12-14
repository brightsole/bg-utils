const selectRandom = (max: number): number =>
  Math.floor(Math.random() * (max + 1));

interface SelectRandomProps<Card> {
  arrayToSelectFrom?: Card[];
  resultArray?: Card[];
  numberToSelect: number;
};
const selectUniqueRandoms = <Card>({
  numberToSelect,
  resultArray = [],
  arrayToSelectFrom,
}: SelectRandomProps<Card>): Card[] => {
  if (resultArray.length === numberToSelect) return resultArray;

  const random = selectRandom(arrayToSelectFrom.length - 1);

  const result = resultArray.concat(arrayToSelectFrom[random]);
  const remaining = [
    ...arrayToSelectFrom.slice(0, random),
    ...arrayToSelectFrom.slice(random + 1),
  ];

  return selectUniqueRandoms({
    numberToSelect,
    resultArray: result,
    arrayToSelectFrom: remaining,
  });
};

type GenerateUniqueProps = {
  max: number;
  numberToSelect: number;
};
const selectUniqueIndices = ({
  max,
  numberToSelect,
}: GenerateUniqueProps): number[] => {
  const indices = Array.from(Array(max + 1).keys());

  const random = selectRandom(indices.length - 1);

  const result = [].concat(indices[random]);
  const remains = [
    ...indices.slice(0, random),
    ...indices.slice(random + 1),
  ];

  return selectUniqueRandoms({
    numberToSelect,
    resultArray: result,
    arrayToSelectFrom: remains,
  });
};

const randomizeArray = <Card>(arrayToShuffle: Card[]): Card[] =>
  selectUniqueRandoms({
      arrayToSelectFrom: arrayToShuffle,
      numberToSelect: arrayToShuffle.length,
    });

const applyMultiple = (startingValue: any, times: number, appliedFunction) =>
  Array.from(Array(times)).reduce(
    result => appliedFunction(result),
    startingValue
  );

const shuffle = <Card>(arrayToShuffle: Card[]): Card[] =>
  applyMultiple(arrayToShuffle, 7, randomizeArray);

export { selectUniqueRandoms, selectUniqueIndices, shuffle };
