import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <div>
      <button (click)="decrease()">-</button>
        {{ value }}
      <button (click)="increase()">+</button>
    </div>
  `,
  styles: [`
    div {
      color: red;
    }
  `],
  encapsulation: ViewEncapsulation.Native
})
export class ButtonComponent implements OnInit {
  @Input() startingValue: string = '0';

  public value: number = 0;

  constructor() { }

  ngOnInit() {
    this.value = parseInt(this.startingValue, 10);
  }

  decrease() {
    this.value--;
  }

  increase() {
    this.value++;
  }

}
