import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {

  writeToConsole(event: any) {
    console.log(event);
  }

  navigateToLibPage() {
    console.log("This is the lib page?!")
  }

}
