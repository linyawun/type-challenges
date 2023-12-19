// link: https://github.com/type-challenges/type-challenges/blob/main/questions/03062-medium-shift/README.md

// use infer to get the first element of the array, and the rest of the array
type Shift<T extends any[]> = T extends [infer F, ...infer R] ? [...R] : [];
