//link: https://github.com/type-challenges/type-challenges/blob/main/questions/00599-medium-merge/README.md

//use key of S first to override the key of F
type Merge<F, S> = {
  [K in keyof F | keyof S]: K extends keyof S
    ? S[K]
    : K extends keyof F
    ? F[K]
    : never;
};
