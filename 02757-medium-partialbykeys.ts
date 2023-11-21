//link: https://github.com/type-challenges/type-challenges/blob/main/questions/02757-medium-partialbykeys/README.md

//reference: https://github.com/type-challenges/type-challenges/issues/2814
//type intersectionToObj transform {a: string} & {b: number} to {a: string, b: number}
//type PartialByKeys<T, K extends keyof T = keyof T> means that if K is not specified, then K is keyof T
//use & to combine two objects, one is the object keys that are not in K, the other is the object keys that are in K and the value is optional
type intersectionToObj<T> = { [K in keyof T]: T[K] };
type PartialByKeys<T, K extends keyof T = keyof T> = intersectionToObj<
  { [P in Exclude<keyof T, K>]: T[P] } & { [P in K]?: T[P] }
>;
