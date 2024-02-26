// link: https://github.com/type-challenges/type-challenges/blob/main/questions/00223-hard-isany/README.md

// reference: https://github.com/type-challenges/type-challenges/issues/232
// any is a set of type of every single type, so 1 & any is also all the types
type IsAny<T> = 0 extends 1 & T ? true : false;
