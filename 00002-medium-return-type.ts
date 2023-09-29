//link: https://github.com/type-challenges/type-challenges/blob/main/questions/00002-medium-return-type/README.md

//use infer to get the return type of a function
type MyReturnType<T extends Function> = T extends (...args: any[]) => infer R
  ? R
  : never;
