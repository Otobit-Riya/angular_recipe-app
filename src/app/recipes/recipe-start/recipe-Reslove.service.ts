import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { DataStorageService } from "src/app/shared/data-storage.service";
import { Recipe } from "../recipe.model";
import { RecipeService } from "../recipe.service";

@Injectable({providedIn : 'root'})
export class RecipeResloveService implements Resolve<Recipe[]>{
    constructor(private dataStorageService : DataStorageService,private recipeService : RecipeService)
    {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)   {
        const recipe = this.recipeService.getRecipes();


        if( recipe.length === 0){
            return this.dataStorageService.fatchRecipe();

        }else{
            return recipe;
        }
       
        
    }
}