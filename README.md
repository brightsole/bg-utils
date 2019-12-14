# bg-utils

### What are they?
<details>
  <summary>
    tl;dr: an ever expanding set of utils that are useful in many areas of board game development
  </summary>
  <br />

  | Method | Props | Description |
  | :---------------: | :--------------- | :--------------- |
  | shuffle | ([any]) | Randomly shuffles an array of inputs of any type, *very* random |
  | selectUniqueRandoms |  | Non-repeatingly selects any number of elements, randomly from an array |
  |  | arrayToSelectFrom | the array of items to randomly pick from |
  |  | numberToSelect | the number of random selections to make |
  | selectUniqueIndices |  | Non-repeatingly selects a number of numbers from 0 to max index |
  |  | numberToSelect | the number of indices to return in an array |
  |  | max | the highest number that can be returned |

</details>
<br/>

### How to use them?
<details>
  <summary>
    tl;dr: <TODO><code>`npm i @brightsole/bg-utils`</code>
  </summary>
  <br />

  import it, and start using the functions within!

  ```js
    import { selectUniqueRandoms } from '@brightsole/bg-utils';

    const aFewRandoms = selectUniqueRandoms({ max: 3, numberToSelect: 2 });
    console.log(aFewRandoms);
  ```

</details>
<br/>

### TODO:
nothing! No plan here, just a bucket to collect random useful methods for consumption elsewhere

</br>
<a href="https://www.buymeacoffee.com/Ao9uzMG" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-yellow.png" alt="Buy Me A Coffee" style="height: 51px !important;width: 217px !important;" ></a>
