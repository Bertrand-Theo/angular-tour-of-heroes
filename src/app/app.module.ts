import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here, permet le databinding et de faire en sorte que les components ne soit pas en standalone

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppComponent
  ],
  providers: [],
  exports: [HeroesComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
