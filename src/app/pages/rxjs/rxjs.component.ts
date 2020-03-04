import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {
    this.subscription = this.getObserver()
      .pipe(
        map(response =>  response.value),
      filter((value, index) => {
        if ( (value % 2) === 1) {
          return true;
        } else {
          return false;
        }
      }))
      .subscribe( int => console.log(`Number: ${int}`),
                     error => console.log(`Error in the observer: ${error}`),
                     () => console.log('Observer finished!'));
   }

  ngOnInit() {

  }

  ngOnDestroy(): void {
    console.log('Page is going to close.');
    this.subscription.unsubscribe();
  }

  getObserver(): Observable<any> {
    return new Observable(observer => {
      let counter: number = 0;

      const interval = setInterval(() => {
        counter += 1;

        const response = {
          value: counter
        };

        observer.next(response);
      }, 1000);
    });
  }
}
