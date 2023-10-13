//link: https://github.com/type-challenges/type-challenges/blob/main/questions/00527-medium-append-to-object/README.md

//key extends keyof T | U means that key can be any key of T or U
//K extends keyof T to check if K is a key of T
type AppendToObject<T, U extends string | number | symbol, V> = {
  [K in keyof T | U]: K extends keyof T ? T[K] : V;
};
