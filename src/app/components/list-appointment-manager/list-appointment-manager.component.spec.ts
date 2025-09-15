import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAppointmentManagerComponent } from './list-appointment-manager.component';

describe('ListAppointmentManagerComponent', () => {
  let component: ListAppointmentManagerComponent;
  let fixture: ComponentFixture<ListAppointmentManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListAppointmentManagerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAppointmentManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
