import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-text-overflow',
  imports: [],
  templateUrl: './text-overflow.component.html',
  styleUrl: './text-overflow.component.css'
})
export class TextOverflowComponent {
  @Input() titulo: string = "input a output"
  texto: string = "do you like a p. diddy?"

}
