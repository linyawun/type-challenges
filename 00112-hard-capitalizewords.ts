// link: https://github.com/type-challenges/type-challenges/blob/main/questions/00112-hard-capitalizewords/README.md

// reference: https://github.com/type-challenges/type-challenges/issues/19571

// use W to store the result of the capitalized word
// S extends ${infer A}${infer B} ? ... : Capitalize<W> to check if ths string can be split to two parts, if not then return the capitalized word
type CapitalizeWords<
  S extends string,
  W extends string = ''
> = S extends `${infer A}${infer B}`
  ? Uppercase<A> extends Lowercase<A>
    ? `${Capitalize<`${W}${A}`>}${CapitalizeWords<B>}`
    : CapitalizeWords<B, `${W}${A}`>
  : Capitalize<W>;
