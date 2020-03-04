import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  menu: any = [
    {
      title: 'Home',
      icon: 'mdi mdi-gauge',
      submenu: [
        {title: 'Dashboard', url: '/dashboard'},
        {title: 'ProgressBar', url: '/progress'},
        {title: 'Charts', url: '/charts'},
        {title: 'Promises', url: '/promises'},
        {title: 'Observables', url: '/rxjs'}
      ]
    }
  ];

  constructor() { }
}
