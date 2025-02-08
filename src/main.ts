import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { initFlowbite } from 'flowbite';

// تهيئة Flowbite بعد تحميل التطبيق
bootstrapApplication(AppComponent, appConfig)
  .then(() => initFlowbite())
  .catch(err => console.error(err));