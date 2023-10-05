//link: https://github.com/type-challenges/type-challenges/blob/main/questions/00016-medium-pop/README.md

//use [] to solve Expect<Equal<Pop<[]>, []>> case
type Pop<T extends unknown[]> = T extends [...infer U, infer L] ? U : [];
