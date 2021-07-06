import { Component, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  @Input() // faz a variável abaixo virar props
  rating: number = 0;

  starWidth: number = 0;

  constructor() { }

  ngOnChanges(): void {
    this.starWidth = this.rating * 74 / 5;
  }
}
