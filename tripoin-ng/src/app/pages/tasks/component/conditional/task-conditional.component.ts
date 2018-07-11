import { Component } from '@angular/core';
import { TopicModel } from '../model/topic.model';

@Component({
  selector: 'task-conditional',
  styleUrls: ['./task-conditional.component.scss'],
  templateUrl: './task-conditional.component.html',
})
export class TaskConditionalComponent {

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
      isView: false
    },
    {
      title : 'Tab #4',
      description: 'Content Tab #4',
      isView: true
    }
  ]

}
