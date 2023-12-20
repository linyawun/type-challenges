// link: https://github.com/type-challenges/type-challenges/blob/main/questions/04179-medium-flip/README.md

// values of T can be string, number, boolean
// use template literal to transform the values of T to string
type Flip<T extends Record<string, string | number | boolean>> = {
  [K in keyof T as `${T[K]}`]: K;
};
