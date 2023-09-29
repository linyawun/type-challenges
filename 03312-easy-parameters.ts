//link: https://github.com/type-challenges/type-challenges/blob/main/questions/03312-easy-parameters/README.md

type MyParameters<T extends (...args: any[]) => any> = T extends (
  ...args: infer R
) => any
  ? R
  : never;
