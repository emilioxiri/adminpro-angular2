import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: []
})
export class PromisesComponent implements OnInit {

  constructor() {
    this.countThree().then((result) => {
      console.log(result);
    }).catch((err) => {
      console.log('Error!', err);
    });
  }
  ngOnInit() {

  }

  countThree(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      let counter: number = 0;

      setInterval(() => {
        counter += 1;
        if (counter === 3) {
          resolve('Done!!');
        }
      }, 1000);
    });
  }
}
