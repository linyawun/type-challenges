// link: https://github.com/type-challenges/type-challenges/blob/main/questions/00007-easy-readonly/README.md

type MyReadonly<T> = {
  //keyof T: the keys of T
  readonly [key in keyof T]: T[key];
};
