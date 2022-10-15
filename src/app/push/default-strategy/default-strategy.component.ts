import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericStrategyComponent } from '../generic-strategy/generic-strategy.component';

@Component({
  selector: 'app-default-strategy',
  changeDetection: ChangeDetectionStrategy.Default,
  standalone: true,
  imports: [CommonModule, GenericStrategyComponent],
  templateUrl: './../generic-strategy/generic-strategy.component.html',
  styleUrls: ['./../generic-strategy/generic-strategy.component.scss'],
})
export class DefaultStrategyComponent extends GenericStrategyComponent {}
