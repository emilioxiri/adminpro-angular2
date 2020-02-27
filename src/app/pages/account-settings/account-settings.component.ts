import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(public settings: SettingsService, @Inject(DOCUMENT) private document)  { }

  ngOnInit() {
    this.moveCheck();
  }

  changeTheme(theme: string, link: any) {
    this.settings.applyTheme(theme);
    this.moveCheck();
  }

  moveCheck() {
    this.document.getElementsByClassName('working')[0].classList.remove('working');
    const selectors = this.document.getElementsByClassName('selector');
    const theme = this.settings.settings.theme;

    for (const selector of selectors) {
      if (selector.getAttribute('data-theme') === theme) {
        selector.classList.add('working');
        break;
      }
    }
  }
}
