import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListServiceManagerComponent } from './list-service-manager.component';

describe('ListServiceManagerComponent', () => {
  let component: ListServiceManagerComponent;
  let fixture: ComponentFixture<ListServiceManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListServiceManagerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListServiceManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
