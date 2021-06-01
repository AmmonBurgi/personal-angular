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
  text = ''

  sayHello = () => {
    console.log(`Hello I'm ${this.name}`)
  }

  changeName = () => {
    this.name = 'Bill'
    console.log('Name was changed!')
  }

  onChange = (value: string) => {
    this.text = (<string>value)
  }
}
