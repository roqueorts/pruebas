import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
/*export class CounterComponent { // With Signals


  value = input(0);
constructor(){
  effect(() => {
    console.log(value());
  })
}

}*/
export class CounterComponent implements OnChanges { // Without Signals

  @Input()
  value = 0;

  ngOnChanges(changes: SimpleChanges) {

    const change = changes['value'];

    if (change) {
      console.log(`New counter value: ${change.currentValue}`);

    }

  }

}
