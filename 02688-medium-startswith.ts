//link: https://github.com/type-challenges/type-challenges/blob/main/questions/02688-medium-startswith/README.md

//use template literal type to get the first character of the string
type StartsWith<
  T extends string,
  U extends string
> = T extends `${U}${infer Rest}` ? true : false;
