// link: https://github.com/type-challenges/type-challenges/blob/main/questions/01978-medium-percentage-parser/README.md

// use CheckOperator to check if the first character is '+' or '-', if yes, then it is the operator, else it is an empty string
// use CheckPercentage to check if the last character is '%', if yes, then it is the percentage, else it is an empty string
// use PercentageParser to parse the operator and the percentage
type CheckOperator<T> = T extends '+' | '-' ? T : never;
type CheckPercentage<T> = T extends `${infer F}%` ? [F, '%'] : [T, ''];
type PercentageParser<A extends string> = A extends `${CheckOperator<
  infer L
>}${infer R}`
  ? [L, ...CheckPercentage<R>]
  : ['', ...CheckPercentage<A>];
