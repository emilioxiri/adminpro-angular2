import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incremental',
  templateUrl: './incremental.component.html',
  styles: []
})
export class IncrementalComponent implements OnInit {

  @ViewChild('inputProgress', {static: false}) inputProgress: ElementRef;

  @Input('progress') percent: number = 50;
  @Input() legend: string = 'Legend';

  @Output() changeValue: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  onChangeModel(value: number) {
    if (value >= 100) {
      this.percent = 100;
    } else if (value <= 0) {
      this.percent = 0;
    } else {
      this.percent = value;
    }

    this.inputProgress.nativeElement.value = this.percent;
    this.changeValue.emit(this.percent);
  }

  changePercent(value: number) {
    const operation = this.percent + value;

    if (operation > 100) {
      return;
    }

    if (operation < 0) {
      return;
    }

    this.percent = operation;
    this.changeValue.emit(this.percent);
    this.inputProgress.nativeElement.focus();
  }


}
