import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UsertableComponent } from './components/usertable/usertable.component';
import { ExampleMaterialModule } from './material-module';
import { UserService } from './services/user.service';
import { ColumnValueFilterComponent } from './components/column-value-filter/column-value-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    UsertableComponent,
    ColumnValueFilterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ExampleMaterialModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
