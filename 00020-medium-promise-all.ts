//link: https://github.com/type-challenges/type-challenges/blob/main/questions/00020-medium-promise-all/README.md

//Promise<{[K in keyof T]: T[K] extends Promise<infer R> ? R : T[K]}> describes the return type of PromiseAll
//if T[K] is a promise, then return the type of the promise, otherwise return T[K]
declare function PromiseAlll<T extends any[]>(
  values: readonly [...T]
): Promise<{ [K in keyof T]: T[K] extends Promise<infer R> ? R : T[K] }>;
