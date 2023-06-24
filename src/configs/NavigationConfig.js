import {
  DashboardOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'


const dashBoardNavTree = [{
  key: 'dashboards',
  path: `${APP_PREFIX_PATH}/dashboards`,
  title: 'sidenav.dashboard',
  icon: DashboardOutlined,
  breadcrumb: false,
  isGroupTitle: true,
  submenu: [
    {
      key: 'dashboards-default',
      path: `${APP_PREFIX_PATH}/dashboards/default`,
      title: 'sidenav.dashboard.default',
      icon: DashboardOutlined,
      breadcrumb: false,
      submenu: []
    },
  ],
}]

const usersNavTree = [{
  key: 'dashboards-users',
  path: `${APP_PREFIX_PATH}/pages`,
  title: 'Клиенты',
  icon: UserOutlined,
  breadcrumb: false,
  submenu: [
    {
      key: 'dashboards-users-list',
      path: `${APP_PREFIX_PATH}/pages/users-list`,
      title: 'Список Клиентов',
      icon: '',
      breadcrumb: true,
      submenu: []
    },
    {
      key: 'dashboards-users-group',
      path: `${APP_PREFIX_PATH}/pages/users-group`,
      title: 'Группы Клиентов',
      icon: '',
      breadcrumb: true,
      submenu: []
    },
  ]
}]


const catalogNavTree = [
  {
    key: 'dashboards-catalog',
    path: `${APP_PREFIX_PATH}/catalog/catalog`,
    title: 'sidenav.dashboard.catalog',
    icon: ShoppingCartOutlined,
    breadcrumb: false,
    submenu: [
      {
        key: 'dashboards-products',
        path: `${APP_PREFIX_PATH}/pages/products`,
        title: 'Товары',
        icon: '',
        breadcrumb: true,
        submenu: []
      },
      {
        key: 'dashboards-category',
        path: `${APP_PREFIX_PATH}/pages/category`,
        title: 'Категории',
        icon: '',
        breadcrumb: true,
        submenu: []
      },
    ]
  },
]

const orderNavTree = [{
  key: 'dashboards-order',
  path: `${APP_PREFIX_PATH}/pages/order`,
  title: 'Заказы',
  icon: ShoppingOutlined,
  breadcrumb: false,
  submenu: []
}]


const navigationConfig = [
  ...dashBoardNavTree,
  ...catalogNavTree,
  ...orderNavTree,
  ...usersNavTree
]

export default navigationConfig;
