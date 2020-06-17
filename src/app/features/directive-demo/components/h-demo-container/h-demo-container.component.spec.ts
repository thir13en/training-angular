import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HDemoContainerComponent } from './h-demo-container.component';

describe('HDemoContainerComponent', () => {
  let component: HDemoContainerComponent;
  let fixture: ComponentFixture<HDemoContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HDemoContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HDemoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
