
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { sharedModule } from "../shared/shared.module";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { ShoppingListComponent } from "./shopping-list.component";

@NgModule({
    declarations : [
        ShoppingListComponent,
        ShoppingEditComponent,
    ],
    //providers: [LogIn],
    imports : [
        FormsModule,
        RouterModule.forChild([
             { path: '', component: ShoppingListComponent },
        ]),
        sharedModule
    ]

})
export class shoppingListModule {
    
}