//link: https://github.com/type-challenges/type-challenges/blob/main/questions/03192-medium-reverse/README.md

// use infer to get the first element of the array, reverse the rest of the array, and then add the first element to the end of the reversed array
type Reverse<T extends any[]> = T extends [infer F, ...infer R]
  ? [...Reverse<R>, F]
  : [];
