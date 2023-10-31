//link: https://github.com/type-challenges/type-challenges/blob/main/questions/04484-medium-istuple/README.md

//check if it has length property, if it does, check if it's a number, if it is, return true, if it's not, return false
type IsTuple<T> = T extends readonly any[]
  ? number extends T['length']
    ? true
    : false
  : false;
