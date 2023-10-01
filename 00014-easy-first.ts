//link: https://github.com/type-challenges/type-challenges/blob/main/questions/00014-easy-first/README.md

//use length to check if the array is empty
type First<T extends any[]> = T['length'] extends 0 ? never : T[0];
