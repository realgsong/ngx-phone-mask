import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	phone = '';

	constructor() {
		setTimeout(() => this.phone = '+79991569231', 1000);
	}
}
