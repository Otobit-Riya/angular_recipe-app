import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AuthInterCepterService } from "./auth/auth-interceter.service";
import { LogIn } from "./login.service";
import { RecipeModule } from "./recipes/recipes.module";
import { shoppingListModule } from "./shopping-list/shopping-list.module";

@NgModule({
    providers :[
        
        shoppingListModule,
        RecipeModule,
        {
            provide : HTTP_INTERCEPTORS,
            useClass : AuthInterCepterService,
            multi : true
        },
    ]
})
export class coremodule{
     
}