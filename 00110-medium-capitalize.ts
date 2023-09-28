//link: https://github.com/type-challenges/type-challenges/blob/main/questions/00110-medium-capitalize/README.md

type MyCapitalize<S extends string> = S extends `${infer First}${infer Last}` //extract the first letter and rest of the string
  ? `${Uppercase<First>}${Last}`
  : S;
