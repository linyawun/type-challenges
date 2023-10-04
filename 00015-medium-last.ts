//link: https://github.com/type-challenges/type-challenges/blob/main/questions/00015-medium-last/README.md

//use _ to represent the rest of the array, which is just a placeholder
type Last<T extends any[]> = T extends [...infer _, infer r] ? r : never;
