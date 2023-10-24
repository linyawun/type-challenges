//link: https://github.com/type-challenges/type-challenges/blob/main/questions/01042-medium-isnever/README.md

//extends is used to check conditional types
//the arguments of extends are expected to be a range of types
//wrap T and never in an array to ensure that the arguments of extends are a range of types
type IsNever<T> = [T] extends [never] ? true : false;
