import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceListClientComponent } from './service-list-client.component';

describe('ServiceListClientComponent', () => {
  let component: ServiceListClientComponent;
  let fixture: ComponentFixture<ServiceListClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceListClientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceListClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
