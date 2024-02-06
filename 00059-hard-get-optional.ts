// link: https://github.com/type-challenges/type-challenges/blob/main/questions/00059-hard-get-optional/README.md

// use Required<T>[P] to filter out the keys that are required
type GetOptional<T> = {
  [K in keyof T as T[K] extends Required<T>[K] ? never : K]: T[K];
};
