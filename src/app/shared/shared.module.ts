import { CommonModule } from "@angular/common";
import { Placeholder } from "@angular/compiler/src/i18n/i18n_ast";
import { NgModule } from "@angular/core";
import { LogIn } from "../login.service";
import { AlertComponent } from "./alert/alert.component";
import { DropdownDirective } from "./dropdown.directive";
import { lodingSpinneromponet } from "./Loding-Spinner/loding-Spiner.componet";
import { PlaceholderDirective } from "./Placeholder/Placeholder.directive";

@NgModule({
    declarations : [
        AlertComponent,
        lodingSpinneromponet,
        PlaceholderDirective,
        DropdownDirective
    ],
    imports:[
        CommonModule
    ],
    providers: [LogIn],
    exports :[
        AlertComponent,
        lodingSpinneromponet,
        PlaceholderDirective,
        DropdownDirective,
        CommonModule
    ]
})

export class sharedModule {
    
}