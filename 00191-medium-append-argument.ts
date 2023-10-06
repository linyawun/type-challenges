//link: https://github.com/type-challenges/type-challenges/blob/main/questions/00191-medium-append-argument/README.md

//use ...args to get the arguments
type AppendArgument<Fn extends Function, A> = Fn extends (
  ...args: infer P
) => infer R
  ? (...args: [...P, A]) => R
  : never;
