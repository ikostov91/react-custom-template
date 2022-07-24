import { FaChartBar, FaQuestionCircle, FaTh, FaSistrix } from "react-icons/fa";
import { TiTabsOutline } from "react-icons/ti";
import { RiPagesFill } from 'react-icons/ri'

const routes = [{
  id: 'dashboard',
  name: 'navigation.menu.dashboard.label',
  path: '/dashboard',
  icon: FaChartBar
}, {
  id: 'grid-demo',
  name: 'navigation.menu.custom.grid.label',
  path: '/custom-grid-demo',
  icon: FaTh
}, {
  id: 'example-pages',
  name: 'Examples',
  icon: RiPagesFill,
  children: [{
    id: 'tabsExample',
    name: 'Tabs',
    path: '/tabs',
    icon: TiTabsOutline
  }, {
    id: 'empty-menu-item',
    name: 'Empty',
    path: '/empty',
    icon: FaSistrix
  }]
}, {
  id: 'about',
  name: 'navigation.menu.about.label',
  path: '/about',
  icon: FaQuestionCircle
}];

export default routes;
