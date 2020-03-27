import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FnTagComponent } from './fn-tags.component';

describe('FnTagComponent', () => {
  let component: FnTagComponent;
  let fixture: ComponentFixture<FnTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FnTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FnTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
