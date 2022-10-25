import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObjectChildComponent } from '../object-child/object-child.component';
import {
  VALUE_DATA,
  ARRAY_DATA,
  OBJECT_ARRAY_DATA,
} from '../object-data-provider';

@Component({
  selector: 'app-object',
  standalone: true,
  imports: [CommonModule, ObjectChildComponent],
  templateUrl: './object.component.html',
  styleUrls: ['./object.component.scss'],
})
export class ObjectComponent implements OnInit {
  value: string;
  array: Array<string>;
  objectArray: Array<any>;
  copyObject!: boolean;
  copyArray!: boolean;

  constructor() {
    this.value = VALUE_DATA;
    this.array = ARRAY_DATA;
    this.objectArray = OBJECT_ARRAY_DATA;
  }

  ngOnInit(): void {
    this.copyArray = true;
    this.copyObject = false;
  }
}
