// link: https://github.com/type-challenges/type-challenges/blob/main/questions/16259-medium-to-primitive/README.md

// check if the type is an object, if it is, check if it is a function, if it is, return Function, else, return the object with the same keys but with primitive values
// use valueOf to get the primitive value of the object
type ToPrimitive<T> = T extends object
  ? T extends (...args: never[]) => unknown
    ? Function
    : {
        [Key in keyof T]: ToPrimitive<T[Key]>;
      }
  : T extends { valueOf: () => infer P }
  ? P
  : T;
