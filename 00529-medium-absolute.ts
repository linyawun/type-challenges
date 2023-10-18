//link: https://github.com/type-challenges/type-challenges/blob/main/questions/00529-medium-absolute/README.md

//use `` to convert number to string
type Absolute<T extends number | string | bigint> =
  `${T}` extends `-${infer RightWords}` ? RightWords : `${T}`;
