// link: https://github.com/type-challenges/type-challenges/blob/main/questions/28333-medium-public-type/README.md

// check if keyof T is starts with '_', if true, return never, else return keyof T
type PublicType<T extends object> = {
  [K in keyof T as K extends `_${string}` ? never : K]: T[K];
};
