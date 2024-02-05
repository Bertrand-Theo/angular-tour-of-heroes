import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here, permet le databinding et de faire en sorte que les components ne soit pas en standalone

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [ // Les component de l'app
    HeroesComponent
  ],
  imports: [ // Les packages
    CommonModule,
    FormsModule
  ],
  providers: [], //Les services de provider utiliser
  exports: [ //Le component pouvant être utiliser et afficher par d'autre Ngmodules
    HeroesComponent,
  ],
  bootstrap: [AppComponent] //Le component de lancement de l'app
})
export class AppModule { }
