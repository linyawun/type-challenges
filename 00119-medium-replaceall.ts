//link: https://github.com/type-challenges/type-challenges/blob/main/questions/00119-medium-replaceall/README.md

type ReplaceAll<
  S extends string,
  From extends string,
  To extends string
> = From extends ''
  ? S
  : S extends `${infer R}${From}${infer L}`
  ? `${R}${To}${ReplaceAll<L, From, To>}` //keep replacing the right side, until there is no From
  : S;
