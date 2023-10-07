//link: https://github.com/type-challenges/type-challenges/blob/main/questions/00898-easy-includes/README.md

//take the first element of the array and check if it is equal to the target, keep checking until the array is empty
type Includes<T extends readonly unknown[], U> = T extends [
  infer First,
  ...infer Rest
]
  ? Equal<First, U> extends true
    ? true
    : Includes<Rest, U>
  : false;
