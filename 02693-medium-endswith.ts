//link: https://github.com/type-challenges/type-challenges/blob/main/questions/02693-medium-endswith/README.md

//use template literal type to check if the string ends with the substring
type EndsWith<T extends string, U extends string> = T extends `${string}${U}`
  ? true
  : false;
