import { Component } from '@angular/core';
import { TopicModel } from '../model/topic.model';

@Component({
  selector: 'task-looping',
  styleUrls: ['./task-looping.component.scss'],
  templateUrl: './task-looping.component.html',
})
export class TaskLoopingComponent {

  topics: TopicModel[] = [
    {
      title : 'Tab #1',
      description: 'Content Tab #1',
      isView: true
    },
    {
      title : 'Tab #2',
      description: 'Content Tab #2',
      isView: true
    },
    {
      title : 'Tab #3',
      description: 'Content Tab #3',
      isView: true
    },
    {
      title : 'Tab #4',
      description: 'Content Tab #4',
      isView: true
    }
  ]

}
