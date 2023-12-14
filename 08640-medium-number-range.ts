// link: https://github.com/type-challenges/type-challenges/blob/main/questions/08640-medium-number-range/README.md

// reference: https://github.com/type-challenges/type-challenges/issues/9988

// utils can get a tuple of 0 to L, for example, Utils<3> is [0, 1, 2]
// C['length'] extends L to check if the length of C is equal to L, if true, return R, else, keep going
// use Exclude to get the rest of the number, for example, NumberRange<2, 5> is 3 | 4 | 5
type Utils<L, C extends any[] = [], R = L> = C['length'] extends L
  ? R
  : Utils<L, [...C, 0], C['length'] | R>;

type NumberRange<L, H> = L | Exclude<Utils<H>, Utils<L>>;
