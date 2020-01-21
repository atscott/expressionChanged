import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <hello name="example"></hello>
  <hello name="example" *ngIf="show"></hello>
  <div>
    <button (click)="show = !show">toggle hello</button>
  </div>`,

})
export class AppComponent {
  title = 'expressionChanged';
  show = false;
}
