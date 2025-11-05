import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import {Project} from './components/project/project';
import { Fishinos } from './pages/fishinos/fishinos';
import { Home } from './pages/home/home';
import { Header } from './components/header/header';

@NgModule({
  declarations: [
    App,
    Fishinos,
    Home,
    Header,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Project
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
