export interface TeaUI {
  teaName: string;
  description: string;
  instructions: string;
  ingredients: string[];
}

export class Tea implements TeaUI {
  teaName: string;
  description: string;
  instructions: string;
  ingredients: string[];

  constructor(
    teaName: string,
    description: string,
    instructions: string,
    ingredients: string[]
  ) {
    this.teaName = teaName;
    this.description = description;
    this.instructions = instructions;
    this.ingredients = ingredients;
  }
}
