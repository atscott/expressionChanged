import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1 [ngClass]="_classes">Hello {{name}}</h1>`,
  styles: [`h1 { font-family: Lato; } .red { color: red }`],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HelloComponent  {
  @Input() name: string;
  _classes = {};

  constructor(private cd: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this._classes['red'] = true;
    this.cd.markForCheck();
  }
}
