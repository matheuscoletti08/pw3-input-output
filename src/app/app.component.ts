import { Component } from '@angular/core';
import { TextOverflowComponent } from "./components/text-overflow/text-overflow.component";

@Component({
  selector: 'app-root',
  imports: [TextOverflowComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pw3-input-output';
}
