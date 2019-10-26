"use strict";
exports.__esModule = true;
var selectRandom = function (max) {
    return Math.floor(Math.random() * (max + 1));
};
var selectUniqueRandoms = function (_a) {
    var numberToSelect = _a.numberToSelect, _b = _a.resultArray, resultArray = _b === void 0 ? [] : _b, arrayToSelectFrom = _a.arrayToSelectFrom, _c = _a.maxIndex, maxIndex = _c === void 0 ? arrayToSelectFrom.length : _c;
    if (resultArray.length === numberToSelect)
        return resultArray;
    var remaining = arrayToSelectFrom || Array.from(Array(maxIndex + 1).keys());
    var random = selectRandom(remaining.length - 1);
    var result = resultArray.concat(remaining[random]);
    var remains = remaining.slice(0, random).concat((remaining.length === random ? [] : remaining.slice(random + 1)));
    return selectUniqueRandoms({
        numberToSelect: numberToSelect,
        resultArray: result,
        arrayToSelectFrom: remains
    });
};
exports.selectUniqueRandoms = selectUniqueRandoms;
var randomizeArray = function (arrayToShuffle) {
    return selectUniqueRandoms({
        maxIndex: arrayToShuffle.length,
        arrayToSelectFrom: arrayToShuffle,
        numberToSelect: arrayToShuffle.length
    });
};
var applyMultiple = function (startingValue, times, appliedFunction) {
    return Array.from(Array(times)).reduce(function (result) { return appliedFunction(result); }, startingValue);
};
var shuffle = function (arrayToShuffle) {
    return applyMultiple(arrayToShuffle, 7, randomizeArray);
};
exports.shuffle = shuffle;
