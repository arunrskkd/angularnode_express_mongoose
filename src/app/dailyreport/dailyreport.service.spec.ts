import { TestBed, inject } from '@angular/core/testing';

import { DailyreportService } from './dailyreport.service';

describe('DailyreportService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DailyreportService]
    });
  });

  it('should be created', inject([DailyreportService], (service: DailyreportService) => {
    expect(service).toBeTruthy();
  }));
});
