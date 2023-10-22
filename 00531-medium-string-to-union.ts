//link: https://github.com/type-challenges/type-challenges/blob/main/questions/00531-medium-string-to-union/README.md

//keep splitting the string into two parts, the first part is the first character, the second part is the rest of the string, and union them together
type StringToUnion<T extends string> = T extends `${infer F}${infer R}`
  ? F | StringToUnion<R>
  : never;
