import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericStrategyComponent } from '../generic-strategy/generic-strategy.component';

@Component({
  selector: 'app-push-strategy',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, GenericStrategyComponent],
  templateUrl: './../generic-strategy/generic-strategy.component.html',
  styleUrls: ['./../generic-strategy/generic-strategy.component.scss'],
})
export class PushStrategyComponent extends GenericStrategyComponent {}
