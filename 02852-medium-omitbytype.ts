//link: https://github.com/type-challenges/type-challenges/blob/main/questions/02852-medium-omitbytype/README.md

// check if key of T as T[P] extends U, if true, return never, else return P
type OmitByType<T, U> = { [P in keyof T as T[P] extends U ? never : P]: T[P] };
