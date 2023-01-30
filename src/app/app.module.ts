import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';

import { defineCustomElements } from '@emdgroup-liquid/liquid/dist/loader';

if (typeof window !== 'undefined') {
  // @ts-ignore
  window.__LD_ASSET_PATH__ = window.location.origin + '/liquid/';
  defineCustomElements(window);
}

@NgModule({
  declarations: [AppComponent, FooterComponent, FormComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
