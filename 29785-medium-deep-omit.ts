// link: https://github.com/type-challenges/type-challenges/blob/main/questions/29785-medium-deep-omit/README.md

// reference: https://github.com/type-challenges/type-challenges/issues/29866

// Keys extends `${infer F}.${infer R}` to check if Keys is a string with dot, if yes, than check if K extends F, if yes, then omit the R part of T[K], else return T[K]
type DeepOmit<T, Keys> = {
  [K in keyof T as K extends Keys ? never : K]: K extends Keys
    ? never
    : Keys extends `${infer F}.${infer R}`
    ? K extends F
      ? DeepOmit<T[K], R>
      : T[K]
    : T[K];
};
