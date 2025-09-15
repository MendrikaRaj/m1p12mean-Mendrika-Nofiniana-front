import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateServiceAppointmentComponent } from './create-service-appointment.component';

describe('CreateServiceAppointmentComponent', () => {
  let component: CreateServiceAppointmentComponent;
  let fixture: ComponentFixture<CreateServiceAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateServiceAppointmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateServiceAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
