// link: https://github.com/type-challenges/type-challenges/blob/main/questions/01367-medium-remove-index-signature/README.md

// reference: https://github.com/type-challenges/type-challenges/issues/13328
// use type extends K to check if the type is concrete key, because only string will extends string, number will extends number, symbol will extends symbol, other concrete key will not
type RemoveIndexSignature<T> = {
  [k in keyof T as string extends k
    ? never
    : number extends k
    ? never
    : symbol extends k
    ? never
    : k]: T[k];
};
