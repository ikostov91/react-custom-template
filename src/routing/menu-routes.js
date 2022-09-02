import { FaChartBar, FaQuestionCircle, FaTh, FaSistrix } from "react-icons/fa";
import { TiTabsOutline } from "react-icons/ti";
import { RiPagesFill } from 'react-icons/ri';
import { FiUsers } from 'react-icons/fi';
import { AiOutlineMenu, AiOutlineOrderedList } from 'react-icons/ai';
import { MdOutlineNavigateNext } from 'react-icons/md';

const routes = [{
  id: 'users',
  name: 'navigation.menu.users.label',
  path: '/users',
  icon: FiUsers 
}, {
  id: 'tabsExample',
  name: 'Tabs',
  path: '/tabs',
  icon: TiTabsOutline
}, {
  id: 'virtualized-list',
  name: 'Virtualized list',
  path: '/virtualized-list',
  icon: AiOutlineOrderedList
}, {
  id: 'grid-demo',
  name: 'navigation.menu.custom.grid.label',
  path: '/custom-grid-demo',
  icon: FaTh
}, {
  id: 'nested-menu',
  name: 'Nested menu',
  icon: AiOutlineMenu,
  children: [{
    id: 'child-one',
    name: 'Child 1',
    icon: MdOutlineNavigateNext
  }, {
    id: 'child-two',
    name: 'Child 2',
    icon: MdOutlineNavigateNext
  }]
}, {
  id: 'about',
  name: 'navigation.menu.about.label',
  path: '/about',
  icon: FaQuestionCircle
}];

export default routes;
