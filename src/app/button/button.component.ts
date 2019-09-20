import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <div>
      <video autoplay loop>
        <source src="assets/video/food-ad.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>
  `,
  styles: [`
    /* test styling */
    div {
      border: 3px solid greenyellow;
    }
  `],
  encapsulation: ViewEncapsulation.Native
})
export class ButtonComponent {}
