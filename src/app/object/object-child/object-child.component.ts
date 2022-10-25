import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-object-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './object-child.component.html',
  styleUrls: ['./object-child.component.scss'],
})
export class ObjectChildComponent implements OnInit {
  @Input() value!: string;
  @Input() array!: Array<string>;
  @Input() objectArray!: Array<any>;
  @Input() copyArray!: boolean;
  @Input() copyObject!: boolean;

  constructor() {}

  ngOnInit(): void {
    if (this.copyArray) {
      this.array = [...this.array];
      this.objectArray = [...this.objectArray];

      if (this.copyObject) {
        this.objectArray = this.objectArray.map((item) => {
          return { ...item };
        });
      }
    }
  }

  changeValue() {
    this.value = this.value + '!';
  }
  addItem() {
    this.array.push('Gabriel');
  }
  changeItem() {
    this.array[0] = this.array[0] + '!';
  }
  addObject() {
    this.objectArray.push({ name: 'Gabriel', age: 46 });
  }
  changeObject() {
    this.objectArray[0].age += 1;
  }
}
