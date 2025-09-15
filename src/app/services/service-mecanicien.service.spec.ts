import { TestBed } from '@angular/core/testing';

import { ServiceMecanicienService } from './service-mecanicien.service';

describe('ServiceMecanicienService', () => {
  let service: ServiceMecanicienService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceMecanicienService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
