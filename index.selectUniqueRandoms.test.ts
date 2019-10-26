import test from 'ava';
import { selectUniqueRandoms } from './index';

test('selects the correct number from an array of options', t => {
  t.deepEqual(
    2,
    selectUniqueRandoms({ numberToSelect: 2, arrayToSelectFrom: [2, 3, 4] })
      .length
  );
});

test('only selects from the possible array of options', t => {
  const coolArray = [{ a: 'a' }, { b: 'b' }, { dinglebop: 'floobjam' }];

  Array.from(Array(1000)).forEach(() => {
    const selection = selectUniqueRandoms({
      numberToSelect: 1,
      arrayToSelectFrom: coolArray,
    })[0];
    t.truthy(coolArray.find(e => e === selection));
  });
});

test('leaves original array intact', t => {
  const longArray = Array.from(Array(2000)).map((_, i) => i);

  // grab all elements in the array: (IE: shuffle it)
  selectUniqueRandoms({
    numberToSelect: longArray.length,
    arrayToSelectFrom: longArray,
  });

  // check the index remains the same in the original array after operation
  longArray.forEach((val, i) => {
    t.deepEqual(i, val);
  });
});
