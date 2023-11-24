//link: https://github.com/type-challenges/type-challenges/blob/main/questions/01130-medium-replacekeys/README.md

// check if keyof U extends T, if it does, check if keyof Y extends K (keyof U), if it does, return Y[K], if it doesn't, return never, if it doesn't, return U[K]
type ReplaceKeys<U, T, Y> = {
  [K in keyof U]: K extends T ? (K extends keyof Y ? Y[K] : never) : U[K];
};
