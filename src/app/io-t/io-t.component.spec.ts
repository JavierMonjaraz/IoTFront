import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IoTComponent } from './io-t.component';

describe('IoTComponent', () => {
  let component: IoTComponent;
  let fixture: ComponentFixture<IoTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IoTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IoTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
