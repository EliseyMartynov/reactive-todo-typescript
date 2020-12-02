export type AddAction = {
  id: string;
  text: string;
}

export type CompleteAction = {
  id: string;
}

export type EditAction = {
  id: string;
  text: string
}

export type DeleteAction = {
  id: string
}

export type ReorderAction = {
  before: number;
  after: number
}
