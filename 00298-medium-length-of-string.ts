//link: https://github.com/type-challenges/type-challenges/blob/main/questions/00298-medium-length-of-string/README.md

//first trasform the string into an array of characters
//then get the length of the array
type StringToArray<S extends string> = S extends `${infer First}${infer Rest}`
  ? [First, ...StringToArray<Rest>]
  : [];
type LengthOfString<S extends string> = StringToArray<S>['length'];
