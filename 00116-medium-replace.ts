//link: https://github.com/type-challenges/type-challenges/blob/main/questions/00116-medium-replace/README.md

type Replace<
  S extends string,
  From extends string,
  To extends string
> = From extends '' //if From is empty string, then return S
  ? S
  : S extends `${infer R}${From}${infer L}` //extract the left and right side of From
  ? `${R}${To}${L}` //replace From with To, remaining the left and right side
  : S;
