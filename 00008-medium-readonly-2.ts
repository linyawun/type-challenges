//link: https://github.com/type-challenges/type-challenges/blob/main/questions/00008-medium-readonly-2/README.md

//use = keyof T to set default type parameter, prevent error when K is empty
//Omit to extract the properties that are not readonly
//Pick to extract the properties that are readonly
type MyReadonly2<T, K extends keyof T = keyof T> = Omit<T, K> &
  Readonly<Pick<T, K>>;
