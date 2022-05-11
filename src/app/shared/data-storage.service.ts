import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, tap } from "rxjs";
import { AuthService } from "../auth/auth.service";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";

@Injectable({ providedIn: 'root' })
export class DataStorageService {
    constructor(private http: HttpClient, private recipeService: RecipeService, private authService: AuthService) { }

    storeRecipes() {
        const recipes = this.recipeService.getRecipes();
        this.http
            .put(
                'https://ng-recipe-book-a8f28-default-rtdb.firebaseio.com/recipes.json'
                , recipes
            )
            .subscribe(response => {
                console.log(response)
            });

    }

    fatchRecipe() {


        return this.http
            .get<Recipe[]>(
                'https://ng-recipe-book-a8f28-default-rtdb.firebaseio.com/recipes.json'

            ).pipe(
                map(recipes => {
                    return recipes.map(recipes => {
                        return {
                            ...recipes,
                            ingredients: recipes.ingredients ? recipes.ingredients : []
                        };
                    });
                }),
                tap(recipes => {
                    this.recipeService.setRecipe(recipes);
                })
            );

    }
}