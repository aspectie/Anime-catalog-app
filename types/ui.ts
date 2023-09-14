export type TOption = {
  value: string;
  title: string;
}

export type TTab<Type> = {
  [Properties in keyof Type]: Type[Properties]
}

export type TColumn<Type> = {
  [Keys in keyof Type]: Type[Keys]
}