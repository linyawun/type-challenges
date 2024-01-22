// link: https://github.com/type-challenges/type-challenges/blob/main/questions/05821-medium-maptypes/README.md

// use R extends { mapFrom: T[K] } to handle if R is union type
type MapTypes<T, R extends { mapFrom: any; mapTo: any }> = {
  [K in keyof T]: T[K] extends R['mapFrom']
    ? R extends { mapFrom: T[K] }
      ? R['mapTo']
      : never
    : T[K];
};
