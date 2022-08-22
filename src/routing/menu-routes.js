import { FaChartBar, FaQuestionCircle, FaTh, FaSistrix } from "react-icons/fa";
import { TiTabsOutline } from "react-icons/ti";
import { RiPagesFill } from 'react-icons/ri';
import { FiUsers } from 'react-icons/fi';

const routes = [{
  id: 'dashboard',
  name: 'navigation.menu.dashboard.label',
  path: '/dashboard',
  icon: FaChartBar
}, {
  id: 'users',
  name: 'navigation.menu.users.label',
  path: '/users',
  icon: FiUsers 
},{
  id: 'example-pages',
  name: 'Examples',
  icon: RiPagesFill,
  children: [{
    id: 'tabsExample',
    name: 'Tabs',
    path: '/tabs',
    icon: TiTabsOutline
  }, {
    id: 'grid-demo',
    name: 'navigation.menu.custom.grid.label',
    path: '/custom-grid-demo',
    icon: FaTh
  }]
}, {
  id: 'about',
  name: 'navigation.menu.about.label',
  path: '/about',
  icon: FaQuestionCircle
}];

export default routes;
