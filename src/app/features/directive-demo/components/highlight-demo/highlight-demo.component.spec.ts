import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightDemoComponent } from './highlight-demo.component';

describe('HighlightDemoComponent', () => {
  let component: HighlightDemoComponent;
  let fixture: ComponentFixture<HighlightDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighlightDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighlightDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
