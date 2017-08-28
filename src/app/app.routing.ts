import {ModuleWithProviders} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {ProductEditComponent} from "./product/product-edit/product-edit.component";
import {ProductNewComponent} from "./product/product-new/product-new.component";
import {ConfirmCandeactivateGuard} from "./product/shared/confirm-candeactivate.guard";

// Define routes
export const appRoutes: Routes = [{
  path: 'products',
  component: ProductListComponent
}, // The order is meaningful!
  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full' // checks if full url matches path
  },
  {
    path: 'products/new',
    component: ProductNewComponent
  },
  {
    path: 'products/:id',
    component: ProductDetailComponent
  }, {
    path: 'products/:id/edit',
    component: ProductEditComponent,
    canDeactivate: [ConfirmCandeactivateGuard]
  }];

// Create a new module with configured router
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
