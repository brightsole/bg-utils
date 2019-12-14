"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var selectRandom = function (max) {
    return Math.floor(Math.random() * (max + 1));
};
;
var selectUniqueRandoms = function (_a) {
    var numberToSelect = _a.numberToSelect, _b = _a.resultArray, resultArray = _b === void 0 ? [] : _b, arrayToSelectFrom = _a.arrayToSelectFrom;
    if (resultArray.length === numberToSelect)
        return resultArray;
    var random = selectRandom(arrayToSelectFrom.length - 1);
    var result = resultArray.concat(arrayToSelectFrom[random]);
    var remaining = __spreadArrays(arrayToSelectFrom.slice(0, random), arrayToSelectFrom.slice(random + 1));
    return selectUniqueRandoms({
        numberToSelect: numberToSelect,
        resultArray: result,
        arrayToSelectFrom: remaining
    });
};
exports.selectUniqueRandoms = selectUniqueRandoms;
var selectUniqueIndices = function (_a) {
    var max = _a.max, numberToSelect = _a.numberToSelect;
    var indices = Array.from(Array(max + 1).keys());
    var random = selectRandom(indices.length - 1);
    var result = [].concat(indices[random]);
    var remains = __spreadArrays(indices.slice(0, random), indices.slice(random + 1));
    return selectUniqueRandoms({
        numberToSelect: numberToSelect,
        resultArray: result,
        arrayToSelectFrom: remains
    });
};
exports.selectUniqueIndices = selectUniqueIndices;
var randomizeArray = function (arrayToShuffle) {
    return selectUniqueRandoms({
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
