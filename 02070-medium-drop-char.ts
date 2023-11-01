//link: https://github.com/type-challenges/type-challenges/blob/main/questions/02070-medium-drop-char/README.md

// use string template to check if the string contains the character, if it does, remove it, if it doesn't, return the string
type DropChar<S, C extends string> = S extends `${infer L}${C}${infer R}`
  ? DropChar<`${L}${R}`, C>
  : S;
