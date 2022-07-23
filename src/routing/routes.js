import { FaChartBar, FaQuestionCircle, FaTh, FaSistrix } from "react-icons/fa";

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
  id: 'nested-menu',
  name: 'Examples',
  icon: FaSistrix,
  children: [{
    id: 'tabsExample',
    name: 'Tabs',
    path: '/tabs',
    icon: FaSistrix
  }, {
    id: 'child2',
    name: 'Nested 2',
    path: '/nested2',
    icon: FaSistrix
  }]
}, {
  id: 'about',
  name: 'navigation.menu.about.label',
  path: '/about',
  icon: FaQuestionCircle
}];

export default routes;
