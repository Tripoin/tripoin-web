import { Component } from '@angular/core';
import { IconModel } from '../model/icon.model';

@Component({
  selector: 'task-component',
  templateUrl: 'task-component.component.html',
})
export class TaskComponentComponent {

  icons: IconModel[] = [
    {
      title : 'Power',
      icon: 'nb-power-circled',
      type: 'success'
    },
    {
      title : 'Flame',
      icon: 'nb-flame-circled',
      type: 'info'
    },
    {
      title : 'Location',
      icon: 'nb-location',
      type: 'warning'
    },
    {
      title : 'Volume',
      icon: 'nb-volume-high',
      type: 'primary'
    }
  ]

}
