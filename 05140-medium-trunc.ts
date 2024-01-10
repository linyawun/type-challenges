// link: https://github.com/type-challenges/type-challenges/blob/main/questions/05140-medium-trunc/README.md

// use Fill0 to fill 0 to the left of the number
type Fill0<T extends string | number> = `${T}` extends `.${infer R}`
  ? `0.${R}`
  : `${T}`;
type Trunc<T extends number | string> = Fill0<T> extends `${infer F}.${infer R}`
  ? F
  : `${T}`;
