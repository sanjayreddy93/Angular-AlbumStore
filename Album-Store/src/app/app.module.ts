import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { ProductDescriptionComponent } from './components/product-description/product-description.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProductPageComponent,
    ProductDescriptionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      [{path:'welcome', component:ProductPageComponent},
    {path:'albums', component: ProductDescriptionComponent}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
