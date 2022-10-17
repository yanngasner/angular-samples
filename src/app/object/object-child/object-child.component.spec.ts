import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectChildComponent } from './object-child.component';

describe('ObjectChildComponent', () => {
  let component: ObjectChildComponent;
  let fixture: ComponentFixture<ObjectChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ObjectChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjectChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
