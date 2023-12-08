// link: https://github.com/type-challenges/type-challenges/blob/main/questions/25270-medium-transpose/README.md
// reference: https://github.com/type-challenges/type-challenges/issues/25297

// use M[0] to get the first row and to ensure the final array's length is the same as the first row's length
// [Y in keyof M]: K extends keyof M[Y] ? M[Y][K] : never means that if the current row's length is less than the first row's length, then the current element is never, else it is the current element
type Transpose<M extends number[][], R = M['length'] extends 0 ? [] : M[0]> = {
  [K in keyof R]: {
    [Y in keyof M]: K extends keyof M[Y] ? M[Y][K] : never;
  };
};
