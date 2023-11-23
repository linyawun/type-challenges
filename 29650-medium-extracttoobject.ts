// link: https://github.com/type-challenges/type-challenges/blob/main/questions/29650-medium-extracttoobject/README.md

// use Omit to remove the key U from T, then use & to add the key U with the value type of T[U] to the object
type ExtractToObject<T, U extends keyof T> = Omit<Omit<T, U> & T[U], never>;
