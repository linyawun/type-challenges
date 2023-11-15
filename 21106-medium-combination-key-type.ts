//link: https://github.com/type-challenges/type-challenges/blob/main/questions/21106-medium-zu-he-jian-lei-xing-combination-key-type/README.md#combination-key-type--

//use infer to get the first element and the rest of the elements of the array
//use R[number] to get the union of the rest of the elements
type Combs<T extends string[]> = T extends [
  infer F extends string,
  ...infer R extends string[]
]
  ? `${F} ${R[number]}` | Combs<R>
  : never;
