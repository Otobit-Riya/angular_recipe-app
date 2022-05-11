import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeResloveService } from "./recipe-start/recipe-Reslove.service";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipesComponent } from "./recipes.component";
import {Routes} from '@angular/router';


const routes: Routes =[
    { path: '', component: RecipesComponent, 
  canActivate : [AuthGuard],
  children: [
    { path: '', component: RecipeStartComponent },
    { path: 'new', component: RecipeEditComponent },
    { path: ':id', component: RecipeDetailComponent ,resolve: [RecipeResloveService] },
    { path: ':id/edit', component: RecipeEditComponent,resolve: [RecipeResloveService] },
  ] },
     
];

@NgModule({
    imports : [RouterModule.forChild(routes)], 
    exports: [RouterModule]

})
export class RecipeRountingModule {

}