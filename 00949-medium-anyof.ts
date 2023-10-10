//link: https://github.com/type-challenges/type-challenges/blob/main/questions/00949-medium-anyof/README.md

//use type Falsey to define the falsey types
type Falsey = false | 0 | '' | null | undefined | [] | { [key: string]: never };
type AnyOf<T extends readonly any[]> = T extends Falsey[] ? false : true;
