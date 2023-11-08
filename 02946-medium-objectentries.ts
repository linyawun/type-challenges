//link: https://github.com/type-challenges/type-challenges/blob/main/questions/02946-medium-objectentries/README.md

//use Required<T> to get the required properties of T
//use keyof to get the keys of T
//use [K, U[K]] to get the key-value pair of T
//use [keyof U] to get the union of the key-value pairs of T
type ObjectEntries<T, U = Required<T>> = {
  [K in keyof U]: [K, U[K] extends never ? undefined : U[K]];
}[keyof U];
