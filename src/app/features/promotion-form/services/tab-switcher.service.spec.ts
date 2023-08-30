import { TestBed } from '@angular/core/testing';

import { TabSwitcherService } from './tab-switcher.service';

describe('TabSwitcherService', () => {
  let service: TabSwitcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabSwitcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
