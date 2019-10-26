const selectRandom = (max: number): number =>
  Math.floor(Math.random() * (max + 1));

type SelectRandomProps = {
  arrayToSelectFrom: unknown[];
  resultArray?: unknown[];
  numberToSelect: number;
  maxIndex?: number;
};
const selectUniqueRandoms = ({
  numberToSelect,
  resultArray = [],
  arrayToSelectFrom,
  maxIndex = arrayToSelectFrom.length,
}: SelectRandomProps): unknown[] => {
  if (resultArray.length === numberToSelect) return resultArray;
  const remaining = arrayToSelectFrom || Array.from(Array(maxIndex + 1).keys());

  const random = selectRandom(remaining.length - 1);

  const result = resultArray.concat(remaining[random]);
  const remains = [
    ...remaining.slice(0, random),
    ...(remaining.length === random ? [] : remaining.slice(random + 1)),
  ];

  return selectUniqueRandoms({
    numberToSelect,
    resultArray: result,
    arrayToSelectFrom: remains,
  });
};

const randomizeArray = (arrayToShuffle: unknown[]): unknown[] =>
  selectUniqueRandoms({
    maxIndex: arrayToShuffle.length,
    arrayToSelectFrom: arrayToShuffle,
    numberToSelect: arrayToShuffle.length,
  });

const applyMultiple = (startingValue, times, appliedFunction) =>
  Array.from(Array(times)).reduce(
    result => appliedFunction(result),
    startingValue
  );

const shuffle = (arrayToShuffle: unknown[]): unknown[] =>
  applyMultiple(arrayToShuffle, 7, randomizeArray);

export { selectUniqueRandoms, shuffle };
