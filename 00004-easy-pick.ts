//link: https://github.com/type-challenges/type-challenges/blob/main/questions/00004-easy-pick/README.md

//K extends keyof T: K is a subset of T's keys
//key in K: the elements in K
type MyPick<T, K extends keyof T> = { [key in K]: T[key] };
