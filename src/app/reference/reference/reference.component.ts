import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReferenceChildComponent } from '../reference-child/reference-child.component';
import {
  VALUE_DATA,
  ARRAY_DATA,
  OBJECT_ARRAY_DATA,
} from '../reference-data-provider';

@Component({
  selector: 'app-reference',
  standalone: true,
  imports: [CommonModule, ReferenceChildComponent],
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.scss'],
})
export class ReferenceComponent implements OnInit {
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
    this.copyArray = false;
    this.copyObject = false;
  }
}
