import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'app-template-driven-form-password-validation',
  templateUrl: './template-driven-form-password-validation.component.html',
  styleUrls: ['./template-driven-form-password-validation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TemplateDrivenFormPasswordValidationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
