//link: https://github.com/type-challenges/type-challenges/blob/main/questions/09616-medium-parse-url-params/README.md

//split string by :, check if rest string has /, if yes, keep ParseUrlParams, if not, return rest string
type ParseUrlParams<T> = T extends `${string}:${infer R}`
  ? R extends `${infer P}/${infer L}`
    ? P | ParseUrlParams<L>
    : R
  : never;
