import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestingModule } from '@testing/testing.module';
import { TemplateDrivenFormPasswordValidationComponent } from './template-driven-form-password-validation.component';


describe('TemplateDrivenFormPasswordValidationComponent', () => {
  let component: TemplateDrivenFormPasswordValidationComponent;
  let fixture: ComponentFixture<TemplateDrivenFormPasswordValidationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule],
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

  it('should have initially submit button disabled', () => {
    const buttonEl = fixture.nativeElement.querySelector('button[type="submit"]');
    expect(buttonEl.disabled).toBeTrue();
  });

});
