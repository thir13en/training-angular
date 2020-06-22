import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepInjectionOneComponent } from './dep-injection-one.component';

describe('DepInjectionOneComponent', () => {
  let component: DepInjectionOneComponent;
  let fixture: ComponentFixture<DepInjectionOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepInjectionOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepInjectionOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
