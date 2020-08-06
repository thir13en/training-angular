import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenFormPasswordValidationComponent } from './template-driven-form-password-validation.component';

describe('TemplateDrivenFormPasswordValidationComponent', () => {
  let component: TemplateDrivenFormPasswordValidationComponent;
  let fixture: ComponentFixture<TemplateDrivenFormPasswordValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateDrivenFormPasswordValidationComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrivenFormPasswordValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
