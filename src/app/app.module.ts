import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  providers: [],
  entryComponents: [ButtonComponent]
})
export class AppModule {
  constructor( private injector: Injector ) {}

  ngDoBootstrap() {
    const customButton: any = createCustomElement(ButtonComponent, { injector: this.injector });
    customElements.define('app-button-test', customButton);
  }
}
