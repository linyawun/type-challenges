// link: https://github.com/type-challenges/type-challenges/blob/main/questions/03326-medium-bem-style-string/README.md

// reference: https://github.com/type-challenges/type-challenges/issues/14092

// T[number] can get the union of all the elements in the tuple
// need to check if the array is empty, if it is empty, it will return ''
type IsNever<T> = [T] extends [never] ? true : false;
type IsUnion<U> = IsNever<U> extends true ? '' : U;
type BEM<
  B extends string,
  E extends string[],
  M extends string[]
> = `${B}${IsUnion<`__${E[number]}`>}${IsUnion<`--${M[number]}`>}`;
