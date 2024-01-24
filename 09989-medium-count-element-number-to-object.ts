// link: https://github.com/type-challenges/type-challenges/blob/main/questions/09989-medium-tong-ji-shu-zu-zhong-de-yuan-su-ge-shu/README.md

// reference: https://github.com/type-challenges/type-challenges/issues/30686

// use Flat to recursively flatten the tuple
// use Count to count the number of each element in the tuple
// use Flat to flatten T in CountElementNumberToObject<T>, and use Count to count the number of each element in the tuple
type Flat<T> = T extends [infer A, ...infer B]
  ? A extends any[]
    ? [...Flat<A>, ...Flat<B>]
    : [A, ...Flat<B>]
  : T;
type Count<T, O, U extends any[] = []> = T extends [infer L, ...infer R]
  ? L extends O
    ? Count<R, O, [...U, O]>
    : Count<R, O, [...U]>
  : U['length'];
type CountElementNumberToObject<T extends any[], U extends any[] = Flat<T>> = {
  [K in U[number]]: Count<U, K>;
};
