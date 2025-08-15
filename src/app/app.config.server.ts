import { mergeApplicationConfig, ApplicationConfig, APP_INITIALIZER } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { provideServerRoutesConfig } from '@angular/ssr';
import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';
import { HttpClientModule } from '@angular/common/http';

const serverConfig: ApplicationConfig = {
  
  providers: [
    provideServerRendering(),
    provideServerRoutesConfig(serverRoutes),
   
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
