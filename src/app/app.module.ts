import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './employee/list/list.component';
import { SaveComponent } from './employee/save/save.component';
import { ProductListComponent } from './product/list/list.component';
import { ProductSaveComponent } from './product/save/save.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    SaveComponent,
    ProductListComponent,
    ProductSaveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
