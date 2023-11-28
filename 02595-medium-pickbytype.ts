// link: https://github.com/type-challenges/type-challenges/blob/main/questions/02595-medium-pickbytype/README.md

// pick the keys of T as T[P] extends U, if true, return P, else return never, use this to pick the key which value is U
type PickByType<T, U> = { [P in keyof T as T[P] extends U ? P : never]: T[P] };
