import { ChangeDetectionStrategy, Component, HostBinding, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { UIStateService } from '@store/ui-state.service';


@Component({
  selector: 'app-toggle-hamburger',
  templateUrl: './toggle-hamburger.component.html',
  styleUrls: ['./toggle-hamburger.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToggleHamburgerComponent implements OnInit {
  @HostBinding('class') classList = 'd-flex align-items-center';
  sidenavOpened$!: Observable<boolean>;

  constructor(public uiStateService: UIStateService) { }

  ngOnInit(): void {
    this.sidenavOpened$ = this.uiStateService.sidenavOpened$;
  }

}
