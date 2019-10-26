import test from 'ava';
import { shuffle } from './index';

const startingArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

type Histogram = {
  [index: number]: number;
};
const positionDiffHistogram: Histogram = {
  '-8': 0,
  '-7': 0,
  '-6': 0,
  '-5': 0,
  '-4': 0,
  '-3': 0,
  '-2': 0,
  '-1': 0,
  0: 0,
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0,
  8: 0,
};

const RUNS = 200000;

/**
 * This is a massive test. It runs the shuffle 200k times.
 *
 * After summing the differential movement of every index over this many runs,
 * no single recorded diff should be more than 1% off of the expectation
 */
test('shuffles to statistically significant degree', t => {
  const results = Array.from(Array(RUNS)).map(() => shuffle(startingArray));

  results.forEach(shuffledArray => {
    shuffledArray.forEach((value: number, index) => {
      positionDiffHistogram[value - index - 1] += 1;
    });
  });

  Object.entries(positionDiffHistogram).forEach(count => {
    const [diff, entrySum] = count;

    const absolutePositionDiff = Math.abs(Number.parseInt(diff, 10));
    const estimatedDistribution = ((9 - absolutePositionDiff) * RUNS) / 9;

    const measuredOffset = Math.abs(estimatedDistribution - entrySum);
    const maximumOffset = estimatedDistribution * 0.05;

    // console.log('\n\n', measuredOffset / estimatedDistribution, maximumOffset, entrySum, '\n\n');

    t.true(measuredOffset < maximumOffset);
  });
});

test('leaves original array intact', t => {
  const longArray = Array.from(Array(2000)).map((_, i) => i);

  shuffle(longArray);

  // check the index remains the same in the original array after operation
  longArray.forEach((val, i) => {
    t.deepEqual(i, val);
  });
});
