//link: https://github.com/type-challenges/type-challenges/blob/main/questions/05117-medium-without/README.md

// U can be string or array, so convert it to union type,in order to use extends
// split the array T to check every element's type,if it extends U, then remove it, else keep it
type toUnion<T> = T extends any[] ? T[number] : T;
type Without<T, U> = T extends [infer F, ...infer R]
  ? F extends toUnion<U>
    ? Without<R, U>
    : [F, ...Without<R, U>]
  : [];
