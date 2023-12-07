// link: https://github.com/type-challenges/type-challenges/blob/main/questions/09142-medium-checkrepeatedchars/README.md

// use string literal to split the string into two parts, and check if the second part contains the first part
type CheckRepeatedChars<T extends string> = T extends `${infer F}${infer R}`
  ? R extends `${string}${F}${string}`
    ? true
    : CheckRepeatedChars<R>
  : false;
