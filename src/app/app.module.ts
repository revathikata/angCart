import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './components/shared/filter.pipe';
import { FormsModule } from '@angular/forms';
import { FunctionsComponent } from './functions/functions.component';
import { AngConceptsComponent } from './functions/ang-concepts/ang-concepts.component';
import { MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CheckpipesPipe } from './checkpipes.pipe';
import { SharedServiceService } from './shared-service.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    ProductsComponent,
    FilterPipe,
    FunctionsComponent,
    AngConceptsComponent,
    CheckpipesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [
    SharedServiceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
