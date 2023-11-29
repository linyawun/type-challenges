// link: https://github.com/type-challenges/type-challenges/blob/main/questions/21104-medium-findall/README.md

// reference: https://github.com/type-challenges/type-challenges/issues/29712

type NormalFindAll<
  T extends string,
  S extends string,
  P extends any[] = [],
  R extends number[] = []
> = T extends `${string}${infer L}` //check if T starts with string
  ? T extends `${S}${string}` //check if T starts with S
    ? NormalFindAll<L, S, [...P, 0], [...R, P['length']]> //if true, add 0 to P and add P['length'] to R, to ensure the index of the element
    : NormalFindAll<L, S, [...P, 0], R>
  : R;
type FindAll<T extends string, P extends string> = P extends ''
  ? []
  : NormalFindAll<T, P>;
