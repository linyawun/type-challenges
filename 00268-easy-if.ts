//link: https://github.com/type-challenges/type-challenges/blob/main/questions/00268-easy-if/README.md

//if C is true, return T, else return F
type If<C extends boolean, T, F> = C extends true ? T : F;
