// link: https://github.com/type-challenges/type-challenges/blob/main/questions/02759-medium-requiredbykeys/README.md

// default K is all keys of T
// use -? to make keys required
// use infer I to avoid type blowup and deal with distribution type
type RequiredByKeys<T, K = keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P];
} & {
  [P in keyof T as P extends K ? P : never]-?: T[P];
} extends infer I
  ? { [P in keyof I]: I[P] }
  : never;
