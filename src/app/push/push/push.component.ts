import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { DATA } from '../data-provider';
import { DefaultStrategyComponent } from '../default-strategy/default-strategy.component';
import { PushStrategyComponent } from '../push-strategy/push-strategy.component';

@Component({
  selector: 'app-push',
  standalone: true,
  templateUrl: './push.component.html',
  styleUrls: ['./push.component.scss'],
  imports: [PushStrategyComponent, DefaultStrategyComponent],
})
export class PushComponent implements OnInit {
  data: Array<any>;
  @ViewChild(PushStrategyComponent) child!: PushStrategyComponent;

  constructor(private ref: ChangeDetectorRef) {
    this.data = DATA;
  }

  ngOnInit(): void {}

  increment() {
    for (var d of this.data) {
      d.age += 1;
    }
  }

  incrementAndSetData() {
    this.increment();
    this.data = [...this.data];
  }

  incrementAndDetectChanges() {
    this.increment();
    this.ref.detectChanges();
  }

  incrementAndMarkForCheck() {
    this.increment();
    this.ref.markForCheck();
  }
}
