//link: https://github.com/type-challenges/type-challenges/blob/main/questions/00043-easy-exclude/README.md

//if T extends U, then never, else T
type MyExclude<T, U> = T extends U ? never : T;
