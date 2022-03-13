import { MenuItem } from '@layout/interfaces/menu-item';
import { ROUTES_LIST } from '@core/routes';


export const sidenavItems: MenuItem[] = [
  {
    code: 1,
    text: 'TEMPLATE DRIVEN FORMS',
    link: ROUTES_LIST.TEMPLATE_DRIVEN_FORMS,
  },
  {
    code: 2,
    text: 'DIRECTIVES',
    link: ROUTES_LIST.DIRECTIVES,
  },
];
