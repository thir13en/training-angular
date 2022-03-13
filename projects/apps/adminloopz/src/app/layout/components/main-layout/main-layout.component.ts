import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { UIFacade } from '../../../+state/ui/ui.facade';

import { MenuItem } from '../../interfaces/menu-item';
import { sidenavItems } from './sidenav-items';
// import { UIStateService } from '@store/ui-state.service';


@Component({
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayoutComponent implements OnInit {
  sidenavOpened$!: Observable<boolean>;
  menuItems: MenuItem[] = sidenavItems;

  constructor(private uiFacade: UIFacade) {}

  ngOnInit(): void {
    this.sidenavOpened$ = this.uiFacade.sidenavOpen$;
  }

  toggleSidenav(): void {
    this.uiFacade.toggleSidenav();
  }

}
