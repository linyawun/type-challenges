//link: https://github.com/type-challenges/type-challenges/blob/main/questions/04471-medium-zip/README.md

//extract the first element of T and U, and put them into a tuple
//keep doing this until T and U are empty
type Zip<T extends any[], U extends any[]> = [T, U] extends [
  [infer L, ...infer RestT],
  [infer R, ...infer RestU]
]
  ? [[L, R], ...Zip<RestT, RestU>]
  : [];
