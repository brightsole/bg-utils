interface SelectRandomProps<Card> {
    arrayToSelectFrom?: Card[];
    resultArray?: Card[];
    numberToSelect: number;
}
declare const selectUniqueRandoms: <Card>({ numberToSelect, resultArray, arrayToSelectFrom, }: SelectRandomProps<Card>) => Card[];
declare type GenerateUniqueProps = {
    max: number;
    numberToSelect: number;
};
declare const selectUniqueIndices: ({ max, numberToSelect, }: GenerateUniqueProps) => number[];
declare const shuffle: <Card>(arrayToShuffle: Card[]) => Card[];
export { selectUniqueRandoms, selectUniqueIndices, shuffle };
