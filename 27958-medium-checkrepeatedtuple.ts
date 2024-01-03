//link: https://github.com/type-challenges/type-challenges/blob/main/questions/27958-medium-checkrepeatedtuple/README.md

// check if first element is in the rest of the tuple, if yes, return true, else check the rest of the tuple
type CheckRepeatedTuple<T extends unknown[]> = T extends [infer L, ...infer R]
  ? L extends R[number]
    ? true
    : CheckRepeatedTuple<R>
  : false;
