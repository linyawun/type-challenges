//link: https://github.com/type-challenges/type-challenges/blob/main/questions/03196-medium-flip-arguments/README.md

//define a reverse type to reverse the elements of an array
type Reverse<T extends any[]> = T extends [infer F, ...infer R]
  ? [...Reverse<R>, F]
  : [];

//use Reverse type to reverse the arguments of a function
type FlipArguments<T extends (...args: any[]) => any> = T extends (
  ...args: infer P
) => infer U
  ? (...args: Reverse<P>) => U
  : never;
