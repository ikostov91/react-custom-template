import { FaChartBar, FaQuestionCircle, FaTh, FaSistrix } from "react-icons/fa";

const routes = [{
  name: 'navigation.menu.dashboard.label',
  path: '/dashboard',
  icon: FaChartBar
}, {
  name: 'navigation.menu.custom.grid.label',
  path: '/custom-grid-demo',
  icon: FaTh
}, {
  name: 'Empty Parent',
  icon: FaSistrix,
  children: [{
    name: 'Nested 1',
    path: '/nested1',
    icon: FaSistrix
  }, {
    name: 'Nested 2',
    path: '/nested2',
    icon: FaSistrix
  }]
}, {
  name: 'navigation.menu.about.label',
  path: '/about',
  icon: FaQuestionCircle
}];

export default routes;
