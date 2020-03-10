import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlbumListComponent } from './components/album-list/album-list.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { ProductDescriptionComponent } from './components/product-description/product-description.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumListComponent,
    ProductPageComponent,
    ProductDescriptionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
