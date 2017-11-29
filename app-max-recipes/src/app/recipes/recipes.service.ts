import { ShoppinglistService } from '../shopping-list/shopping-list.service';
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class RecipesService {
  private recipes: Recipe[] = [
    new Recipe('Пельмешки',
      'Пельмешки - пальчики оближешь',
      'https://infoeda.com/wp-content/uploads/2017/06/Skolko_varit_pelmeni.jpg',
      [new Ingredient('Тесто', 2), new Ingredient('Мясо', 1)]),
    new Recipe('Вареники',
      'Вареники - пальчики оближешь',
      'https://upload.wikimedia.org/wikipedia/commons/2/21/Warenyky.jpg',
      [new Ingredient('Тесто', 2), new Ingredient('Творог', 1)])
  ];

  recipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppingListService: ShoppinglistService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
