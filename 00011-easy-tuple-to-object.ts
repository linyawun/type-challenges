//link: https://github.com/type-challenges/type-challenges/blob/main/questions/00011-easy-tuple-to-object/README.md

//T[number] access the element of the tuple through index
type TupleToObject<T extends readonly (string | number)[]> = {
  [P in T[number]]: P;
};
