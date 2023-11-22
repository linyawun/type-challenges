//link: https://github.com/type-challenges/type-challenges/blob/main/questions/04803-medium-trim-right/README.md

// use template literal to check if the last character is ' ', '\n' or '\t', if so, use TrimRight to check the string without the last character
type TrimRight<S extends string> = S extends `${infer F}${' ' | '\n' | '\t'}`
  ? TrimRight<F>
  : S;
