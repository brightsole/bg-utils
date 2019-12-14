import test from 'ava';
import { selectUniqueIndices } from './index';

test('selects the correct number from an array of indices', t => {
  t.deepEqual(
    2,
    selectUniqueIndices({ numberToSelect: 2, max: 1000 })
      .length
  );
});

test('only selects from the possible array of options', t => {
  const indices = Array.from(Array(1001).keys());

  Array.from(Array(1000)).forEach(() => {
    const selection = selectUniqueIndices({
      numberToSelect: 1,
      max: 1000,
    })[0];
    t.true(typeof indices.find(e => e === selection) === 'number');
  });
});
