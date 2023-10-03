//link: https://github.com/type-challenges/type-challenges/blob/main/questions/03057-easy-push/README.md

//use unknown[] instead of any[] because unknown[] is more type safe
//typescript can be sure that the type of the array is unknown[], but still remember every element's type
type Push<T extends unknown[], U> = [...T, U];
