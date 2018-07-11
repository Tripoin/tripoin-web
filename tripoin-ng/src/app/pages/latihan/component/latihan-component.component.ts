import { Component } from "@angular/core";
import { LatihanModel } from "./latihan.model";

@Component({
    selector: 'latihan-component',
    templateUrl: 'latihan-component.component.html',
  })
export class LatihanComponentComponent {

    /* data: LatihanModel = {
        name: 'Ridla',
        age: 20,
        gender: 'Male'
    } */

    /* name: String = "Ridla Fadilah";
    age: Number = 20;
    gender: any = "Male"; */

    dataList: LatihanModel[] = [
        {
            name: 'Ridla1',
            age: 20,
            gender: 'Male',
            isView: true,
        },
        {
            name: 'Ridla2',
            age: 20,
            gender: 'Male',
            isView: false,
        },
    ]

    constructor(){
        this.dataList.forEach(element => {
            console.log(element); 
        });
        
    }

}