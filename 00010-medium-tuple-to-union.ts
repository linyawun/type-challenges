//link: https://github.com/type-challenges/type-challenges/blob/main/questions/00010-medium-tuple-to-union/README.md

//T[number] can get the union type of T by indexing
type TupleToUnion<T extends readonly any[]> = T[number];
