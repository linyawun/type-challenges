// link: https://github.com/type-challenges/type-challenges/blob/main/questions/09286-medium-firstuniquecharindex/README.md

// reference: https://github.com/type-challenges/type-challenges/issues/20858

// first, check if the string is empty, if so, return -1
// N extends `${infer F1}${infer S}` to get the first character of the string
// T extends `${string}${F1}${string}${F1}${string}` to check if the first character is unique, if so, return the length of the array, if not, keep check the next character
// use R to store the array of unknown, and use R['length'] to get the length of the array, length can get the index of the element
type FirstUniqueCharIndex<
  T extends string,
  N extends string = T,
  R extends unknown[] = []
> = T extends ''
  ? -1
  : N extends `${infer F1}${infer S}`
  ? T extends `${string}${F1}${string}${F1}${string}`
    ? FirstUniqueCharIndex<T, S, [...R, unknown]>
    : R['length']
  : -1;
