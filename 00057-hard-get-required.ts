// link: https://github.com/type-challenges/type-challenges/blob/main/questions/00057-hard-get-required/README.md

// reference: https://github.com/type-challenges/type-challenges/issues/285

// use as to filter out the keys that are not required
// Required is a utility type that makes all properties of T required, and Required<T>[P] is the type of the property P of T after applying Required
type GetRequired<T> = {
  [P in keyof T as T[P] extends Required<T>[P] ? P : never]: T[P];
};
