import { MenuItem } from '@layout/interfaces/menu-item';
import { ROUTES_LIST } from '@core/routes';


export const sidenavItems: MenuItem[] = [
  {
    code: 1,
    text: 'AREAS',
    link: ROUTES_LIST.AREAS,
    icon: 'map',
  },
  {
    code: 2,
    text: 'TRACKING',
    link: ROUTES_LIST.TRACKING,
    icon: 'gesture',
  },
];
