import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
    selector :'[appPlaceholeder]'
})

export class PlaceholderDirective {
    constructor ( public  viweContainerRef : ViewContainerRef ){}

}