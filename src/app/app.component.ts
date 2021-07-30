import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  id: number;
  pwd: number;
  title = 'pathshala-ui';

  constructor(){
    this.id = 0;
    this.pwd = 0;
  }
}
