import HomePage from "../pages/Home";
import HomeIcon from "@material-ui/icons/Home";

import LoginPage from '../pages/Login';
import LoginIcon from '@material-ui/icons/PeopleAltOutlined';

import RegisterPage from '../pages/Register';

import JobDetailPage from '../pages/JobDetail';
import RecruiterInfoPage from '../pages/RecruiterInfo';

const NEDRoutes = {
  New: "new",
  Detail: ":id"
}

export const PublicRouteNames = {
  Home: '',
  Login: 'Login',
  Register: 'Register',
  JobDetail: 'JobDetail',
  RecruiterInfo: 'RecruiterInfo'
}

export const AllRouteNames = {
  ...PublicRouteNames
}

export const RoutePaths = {
  Home: ['', PublicRouteNames.Home].join('/'),
  Login: ['', PublicRouteNames.Login].join('/'),
  Register: ['', PublicRouteNames.Register].join('/'),
  JobDetail: ['', PublicRouteNames.JobDetail, NEDRoutes.Detail].join('/'),
  RecruiterInfo: ['', PublicRouteNames.RecruiterInfo, NEDRoutes.Detail].join('/'),
}

export const PublicRoutes = {
  Home: {
    exact: true,
    id: PublicRouteNames.Home,
    label: "Home",
    path: RoutePaths.Home,
    component: HomePage,
    icon: HomeIcon
  },
  JobDetail: {
    exact: true,
    id: PublicRouteNames.JobDetail,
    label: "Tin chi tiết",
    path: RoutePaths.JobDetail,
    component: JobDetailPage,
    icon: HomeIcon
  },
  RecruiterInfo: {
    exact: true,
    id: PublicRouteNames.RecruiterInfo,
    label: "Thông tin nhà tuyển dụng",
    path: RoutePaths.RecruiterInfo,
    component: RecruiterInfoPage,
    icon: HomeIcon
  },
  Login: {
    exact: true,
    id: PublicRouteNames.Login,
    label: "Login label",
    path: RoutePaths.Login,
    component: LoginPage,
    icon: LoginIcon
  },
  Register: {
    exact: true,
    id: PublicRouteNames.Register,
    label: "Register label",
    path: RoutePaths.Register,
    component: RegisterPage,
    icon: LoginIcon
  }
}


