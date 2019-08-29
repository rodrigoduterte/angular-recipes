import {Ingredient} from './ingredient.model';

export interface Direction {
    task: string
}

export enum Category {
    'dessert',
    'appetizers',
    'meal',
    'soup',
    'pastry'
}

export interface Recipe {
    recipeName: string;
    recipeCategory: Category;
    recipePhoto: string;
    ingredients: Ingredient[];
    directions: Direction[];
}
