//link: https://github.com/type-challenges/type-challenges/blob/main/questions/00189-easy-awaited/README.md

//Solution 1:
//problem: it does not work for nested Promise
type MyAwaited1<T> = T extends Promise<infer K> ? K : never;

//Solution 2:
//PromiseLike is a type that can use then method
//recurse the return type until it is not a PromiseLike
type MyAwaited<T> = T extends PromiseLike<infer U> ? MyAwaited<U> : T;