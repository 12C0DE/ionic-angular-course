import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnits',
      imageUrl:
        'https://i.pinimg.com/originals/a7/3d/6e/a73d6e4ac85c6a822841e449b24c78e1.jpg',
      imgredients: ['french fires', 'prok meat', 'salad'],
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl:
        'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      imgredients: ['french toast', 'hos', 'tomato'],
    },
  ];

  constructor() {}

  getRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return { ...this.recipes.find((r) => r.id === recipeId) };
  }

  deleteRecipe(recipeId: string) {
    this.recipes = { ...this.recipes.filter((r) => r.id !== recipeId) };
  }
}
