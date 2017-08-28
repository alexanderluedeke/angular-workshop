import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductDescriptionBoxComponent } from './product-description-box/product-description-box.component';
import { ProductTitleComponent } from './product-title/product-title.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDataService } from "./shared/product-data.service";
import { HttpClientModule } from '@angular/common/http';
import { routing} from "./app.routing";
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ProductNewComponent } from './product/product-new/product-new.component';
import {ConfirmCandeactivateGuard} from "./product/shared/confirm-candeactivate.guard";
import { PrettyCurrencyPipe } from './product/shared/pretty-currency.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductDescriptionBoxComponent,
    ProductTitleComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductNewComponent,
    PrettyCurrencyPipe // is known in the whole module
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [ProductDataService, ConfirmCandeactivateGuard], // list of services
  bootstrap: [AppComponent]
})
export class AppModule { }
