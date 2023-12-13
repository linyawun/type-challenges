// link: https://github.com/type-challenges/type-challenges/blob/main/questions/25170-medium-replace-first/README.md

// check if first element in T extends S, if true, replace it with R, else keep it, keep checking the rest elements in T
type ReplaceFirst<T extends readonly unknown[], S, R> = T extends readonly [
  infer F,
  ...infer P
]
  ? F extends S
    ? [R, ...P]
    : [F, ...ReplaceFirst<P, S, R>]
  : [];
