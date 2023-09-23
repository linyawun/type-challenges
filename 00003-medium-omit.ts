//link: https://github.com/type-challenges/type-challenges/blob/main/questions/00003-medium-omit/README.md

// as key: specify the type of key
//key in keyof T as key extends K ? never : key: if key is a subset of K, then never, else key
type MyOmit<T, K extends keyof T> = {
  [key in keyof T as key extends K ? never : key]: T[key];
};
