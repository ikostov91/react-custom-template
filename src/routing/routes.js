import { FaChartBar, FaQuestionCircle, FaTh, FaSistrix } from "react-icons/fa";

const routes = [{
  name: 'navigation.menu.dashboard.label',
  path: '/dashboard',
  icon: FaChartBar
}, {
  name: 'navigation.menu.custom.grid.label',
  path: '/custom-grid-demo',
  icon: FaTh,
  children: [{
    name: 'Test 1',
    path: '/test1',
    icon: FaSistrix
  }, {
    name: 'Test 2',
    path: '/test2',
    icon: FaSistrix
  }]
}, {
  name: 'navigation.menu.about.label',
  path: '/about',
  icon: FaQuestionCircle
}];

export default routes;
