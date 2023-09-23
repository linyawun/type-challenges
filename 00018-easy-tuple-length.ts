// link: https://github.com/type-challenges/type-challenges/blob/main/questions/00018-easy-tuple-length/README.md

//the element in tuple can be any type
type Length<T extends any[]> = T['length'];
