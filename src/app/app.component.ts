import { Component } from '@angular/core';
import '../../public/css/styles.css'; // load with angular2-template-loader plug-in.
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'Hello from Angular App with Webpack';
}
