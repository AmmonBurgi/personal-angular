import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'personal-angular';
  styling = {
    fontColor: 'blue',
    backgroundColor: 'grey'
  }
  name = 'ammon'

  sayHello = () => {
    console.log(`Hello I'm ${this.name}`)
  }
}
