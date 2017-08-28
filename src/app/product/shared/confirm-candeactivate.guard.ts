import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {ProductEditComponent} from "../product-edit/product-edit.component";

@Injectable()
export class ConfirmCandeactivateGuard implements CanDeactivate<ProductEditComponent> {

  constructor() {}

  canDeactivate(component: ProductEditComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return confirm("Willst du wirklich weg?");
  }
}
