// link: https://github.com/type-challenges/type-challenges/blob/main/questions/00114-hard-camelcase/README.md

// reference: https://github.com/type-challenges/type-challenges/issues/25014

type IsAlphabet<T extends string> = Lowercase<T> extends Uppercase<T>
  ? false
  : true;
// if the first letter is an alphabet, then convert it to uppercase, and then convert the rest of the string to lowercase, if not then just return the string
type CamelCase<
  S extends string,
  Result extends string = ''
> = S extends `${infer Left}${infer Rest}`
  ? IsAlphabet<Left> extends true
    ? Result extends `${infer Prefix}_`
      ? CamelCase<Rest, `${Prefix}${Uppercase<Left>}`>
      : CamelCase<Rest, `${Result}${Lowercase<Left>}`>
    : CamelCase<Rest, `${Result}${Left}`>
  : Result;
