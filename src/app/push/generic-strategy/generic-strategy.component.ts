import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-generic-strategy',
  standalone: true,
  imports: [CommonModule],
  template: '',
})
export class GenericStrategyComponent implements OnInit {
  @Input() strategy: string = '';
  @Input() data: Array<any> = [];
  innerData: Array<any> = [];

  constructor(private ref: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.innerData = [
      ...this.data.map((d) => {
        return { ...d };
      }),
    ];
  }

  increment() {
    for (var d of this.innerData) {
      d.age += 1;
    }
  }

  incrementAndSetData() {
    this.increment();
    this.innerData = [...this.innerData];
  }

  incrementAndDetectChanges() {
    this.increment();
    this.detectChanges();
  }

  incrementAndMarkForCheck() {
    this.increment();
    this.markForCheck();
  }

  detectChanges() {
    this.ref.detectChanges();
  }
  markForCheck() {
    this.ref.markForCheck();
  }
}
