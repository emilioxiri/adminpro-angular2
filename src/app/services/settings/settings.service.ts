import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  settings: Settings = {
    themeURL: 'assets/css/colors/default.css',
    theme: 'default'
  };

  constructor(@Inject(DOCUMENT) private document) {
    this.loadSettings();
   }

  saveSettings() {
    localStorage.setItem('settings', JSON.stringify(this.settings));
  }

  loadSettings() {
    if (localStorage.getItem('settings')) {
      this.settings = JSON.parse(localStorage.getItem('settings'));
    }
    this.applyTheme(this.settings.theme);
  }

  applyTheme(theme: string) {
    const URL = `assets/css/colors/${theme}.css`;
    this.document.getElementById('theme').setAttribute('href', URL);
    this.settings.theme = theme;
    this.settings.themeURL = URL;
    this.saveSettings();
  }
}

interface Settings {
  themeURL: string;
  theme: string;
}
