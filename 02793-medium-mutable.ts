// link: https://github.com/type-challenges/type-challenges/blob/main/questions/02793-medium-mutable/README.md

// reference: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#improvements-for-readonlyarray-and-readonly-tuples
// use -readonly to remove readonly modifier from each property
type Mutable<T> = { -readonly [K in keyof T]: T[K] };
