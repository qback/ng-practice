import { RecipesService } from '../../recipes.service';
import { Recipe } from '../../recipe.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;
  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
  }

  onSelect() {
    this.recipesService.recipeSelected.emit(this.recipe);
  }
}
