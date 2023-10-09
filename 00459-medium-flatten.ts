//link: https://github.com/type-challenges/type-challenges/blob/main/questions/00459-medium-flatten/README.md

//check if the first element is an array, if it is, then flatten it, otherwise, keep it
type Flatten<T extends any[]> = T extends [infer First, ...infer Rest]
  ? First extends any[]
    ? [...Flatten<First>, ...Flatten<Rest>]
    : [First, ...Flatten<Rest>]
  : [];
