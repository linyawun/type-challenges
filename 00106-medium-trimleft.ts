//link: https://github.com/type-challenges/type-challenges/blob/main/questions/00106-medium-trimleft/README.md

//define what is whitespace
type WhiteSpace = ' ' | '\n' | '\t';
//keep trimming the left side of the string until its left side is not whitespace
type TrimLeft<S extends string> = S extends `${WhiteSpace}${infer Words}`
  ? TrimLeft<Words>
  : S;
