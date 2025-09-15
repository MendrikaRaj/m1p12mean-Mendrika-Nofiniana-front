import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMecanicienComponent } from './create-mecanicien.component';

describe('CreateMecanicienComponent', () => {
  let component: CreateMecanicienComponent;
  let fixture: ComponentFixture<CreateMecanicienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateMecanicienComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateMecanicienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
