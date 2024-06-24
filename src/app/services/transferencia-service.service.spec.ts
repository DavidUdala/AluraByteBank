import { TestBed } from '@angular/core/testing';

import { TransferenciaServiceService } from './transferencia-service.service';

describe('TransferenciaServiceService', () => {
  let service: TransferenciaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransferenciaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
