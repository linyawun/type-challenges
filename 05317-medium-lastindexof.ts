//link: https://github.com/type-challenges/type-challenges/blob/main/questions/05317-medium-lastindexof/README.md

//extract the last element of T, and check if it is equal to U, if so, return the length of the rest of T, otherwise, recursively call LastIndexOf with the rest of T
type LastIndexOf<T extends any[], U> = T extends [...infer I, infer L]
  ? Equal<L, U> extends true
    ? I['length']
    : LastIndexOf<I, U>
  : -1;
