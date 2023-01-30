import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { defineCustomElements } from '@emdgroup-liquid/liquid/dist/loader'

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
