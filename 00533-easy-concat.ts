//link: https://github.com/type-challenges/type-challenges/blob/main/questions/00533-easy-concat/README.md

//use readonly unknown[] to represent tuple
type Concat<T extends readonly unknown[], U extends readonly unknown[]> = [
  ...T,
  ...U
];
