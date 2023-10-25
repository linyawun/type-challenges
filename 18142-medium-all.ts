//link: https://github.com/type-challenges/type-challenges/blob/main/questions/18142-medium-all/README.md

//use number to get the index of the array
type All<T extends any[], N> = Equal<T[number], N>;
