import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-playground',
  standalone: true,
  imports: [],
  templateUrl: './playground.component.html',
  styleUrl: './playground.component.scss'
})
export class PlaygroundComponent  {
  title = 'angularPracticeV18';

  isServerRunning = true;

  users = [
    { id: 0, name: 'Sarah' },
    { id: 1, name: 'Amy' },
    { id: 2, name: 'Rachel' },
    { id: 3, name: 'Jessica' },
    { id: 4, name: 'Poornima' },
  ];

  numbers = [
    0, 1, 2, 3, 4, 5, 6, 7
  ];

  length = signal(20)
  breadth = signal(30)

  constructor() {
    effect(() => {
      //   this.breadth()
      //   this.length()
      //  console.log('effect works')
      console.log('effect works', this.breadth(), this.length())
})                                                      
  }

  onClick() {
    console.log('length', this.length())
    console.log('breadth', this.breadth())

    this.breadth.update(value => value + 10);

    const area = computed(() => this.length() + this.breadth())

    console.log('area', area())

    const showCount = signal(true);
    const count = signal(0);
    const conditionalCount = computed(() => {
      if (showCount()) {
        return `The count is ${count()}.`;
      } else {
        return 'Nothing to see here!';
      }
    });

    console.log(conditionalCount())

  }



}
