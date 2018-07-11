import { Component } from '@angular/core';

@Component({
  selector: 'task-interpolation',
  styleUrls: ['./task-interpolation.component.scss'],
  templateUrl: './task-interpolation.component.html',
})
export class TaskInterpolationComponent {
  
  name: string = 'Ridla Fadilah';
  age: number = 15;
  gender: any = 'Male';

}
