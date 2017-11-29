import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppinglistService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Мука', 50),
    new Ingredient('Соль', 100)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(item: Ingredient) {
    this.ingredients.push(item);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(items: Ingredient[]) {
    this.ingredients.push(...items);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
