// link: https://github.com/type-challenges/type-challenges/blob/main/questions/04260-medium-nomiwase/README.md

// use literal expression to split string and convert to union type
type StringToUnion<S extends string> = S extends `${infer F}${infer R}`
  ? F | StringToUnion<R>
  : S;
// use conditional type to check if CurrentChar extends CurrentChar, if true, return `${CurrentChar}${AllCombinations<'', Exclude<CharUnion, CurrentChar>> | ''}`, else return never
//AllCombinations<'', Exclude<CharUnion, CurrentChar>> | '' is to check if CharUnion is empty, if true, return '', else return AllCombinations<'', Exclude<CharUnion, CurrentChar>>
//AllCombinations use Exclude to remove CurrentChar from CharUnion, and use recursion to get all combinations
type AllCombinations<
  S extends string,
  CharUnion extends string = StringToUnion<S>,
  CurrentChar extends string = CharUnion
> = CurrentChar extends CurrentChar
  ? `${CurrentChar}${AllCombinations<'', Exclude<CharUnion, CurrentChar>> | ''}`
  : never;
