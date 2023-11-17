//link: https://github.com/type-challenges/type-challenges/blob/main/questions/27932-medium-mergeall/README.md

//use recursive Merge to merge all the types
type MergeAll<XS, P = []> = XS extends [infer F, ...infer Rest]
  ? MergeAll<Rest, Merge<P, F>>
  : P;

//recursively merge the types
type Merge<F, S> = {
  [P in keyof F | keyof S]: P extends keyof S
    ? P extends keyof F
      ? S[P] | F[P]
      : S[P]
    : P extends keyof F
    ? F[P]
    : never;
};
