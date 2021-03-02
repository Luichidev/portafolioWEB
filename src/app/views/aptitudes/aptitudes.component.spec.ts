import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AptitudesComponent } from './aptitudes.component';

describe('AptitudesComponent', () => {
  let component: AptitudesComponent;
  let fixture: ComponentFixture<AptitudesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AptitudesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AptitudesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
