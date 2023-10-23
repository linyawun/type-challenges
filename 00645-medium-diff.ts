//link: https://github.com/type-challenges/type-challenges/blob/main/questions/00645-medium-diff/README.md

//use & to combine two objects, use | to union the keys of two objects, use Omit to remove the keys that are in the union of two objects
//reference: https://github.com/type-challenges/type-challenges/issues/3014
type Diff<O, O1> = Omit<O & O1, keyof (O | O1)>;
