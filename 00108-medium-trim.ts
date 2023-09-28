//link: https://github.com/type-challenges/type-challenges/blob/main/questions/00108-medium-trim/README.md

//define what is whitespace
type Space = ' ' | '\n' | '\t';
//check if the string starts or ends with whitespace
type Trim<S extends string> = S extends
  | `${Space}${infer Word}`
  | `${infer Word}${Space}`
  ? Trim<Word>
  : S;
