//link: https://github.com/type-challenges/type-challenges/blob/main/questions/18220-medium-filter/README.md

//split the array into two parts, one part is the first element, the other part is the rest of the array
//check if first element is extends the target, if yes, keep it, if not, remove it
type Filter<T extends any[], P> = T extends [infer F, ...infer R]
  ? F extends P
    ? [F, ...Filter<R, P>]
    : Filter<R, P>
  : [];
