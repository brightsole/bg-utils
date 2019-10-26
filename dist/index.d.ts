declare type SelectRandomProps = {
    arrayToSelectFrom?: unknown[];
    resultArray?: unknown[];
    numberToSelect: number;
    maxIndex?: number;
};
declare const selectUniqueRandoms: ({ numberToSelect, resultArray, arrayToSelectFrom, maxIndex, }: SelectRandomProps) => unknown[];
declare const shuffle: (arrayToShuffle: unknown[]) => unknown[];
export { selectUniqueRandoms, shuffle };
