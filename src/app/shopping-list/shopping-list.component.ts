import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LogIn } from '../login.service';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit , OnDestroy {
  ingredients: Ingredient[];
  private igChengeSub : Subscription;

  constructor(private slService: ShoppingListService, private loginService :LogIn){ }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.igChengeSub=this.slService.ingredientsChanged
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }
      );
      this.loginService.printLog('helo from shopping')
  }

  onEditItem(index:number){
    this.slService.startedEditing.next(index);

  }

  ngOnDestroy(): void {
      this.igChengeSub.unsubscribe();
  }

}
