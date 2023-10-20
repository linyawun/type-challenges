//link: https://github.com/type-challenges/type-challenges/blob/main/questions/00612-medium-kebabcase/README.md

//check if S2 is lowercase, if so, keep concat string, else add a dash
type KebabCase<S extends string> = S extends `${infer S1}${infer S2}`
  ? S2 extends Uncapitalize<S2>
    ? `${Uncapitalize<S1>}${KebabCase<S2>}`
    : `${Uncapitalize<S1>}-${KebabCase<S2>}`
  : S;
