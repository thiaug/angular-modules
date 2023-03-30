import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication, platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app.module';

platformBrowser()
  .bootstrapModule(AppModule)
  .catch((err)=>console.error(err));
