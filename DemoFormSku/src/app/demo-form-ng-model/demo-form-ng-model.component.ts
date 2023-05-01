import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-form-ng-model',
  templateUrl: './demo-form-ng-model.component.html',
  styleUrls: ['./demo-form-ng-model.component.css'],
})
export class DemoFormNgModelComponent {
  productName: string;
  constructor() {
    this.productName = 'ng-book: The Comple Guide To Angular';
  }

  onSubmit(value: string): void {
    console.log('you submitted value: ', value);
  }
}
