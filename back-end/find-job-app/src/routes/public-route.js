import HomePage from "../pages/Home";
import HomeIcon from "@material-ui/icons/Home";

import LoginPage from '../pages/Login';
import LoginIcon from '@material-ui/icons/PeopleAltOutlined';

import RegisterPage from '../pages/Register';

import JobDetailPage from '../pages/JobDetail';


const NEDRoutes = {
  New: "new",
  Detail: ":id"
}

export const PublicRouteNames = {
  Home: '',
  Login: 'Login',
  Register: 'Register',
  JobDetail: 'JobDetail',
}

export const AllRouteNames = {
  ...PublicRouteNames
}

export const RoutePaths = {
  Home: ['', PublicRouteNames.Home].join('/'),
  Login: ['', PublicRouteNames.Login].join('/'),
  Register: ['', PublicRouteNames.Register].join('/'),
  JobDetail: ['', PublicRouteNames.JobDetail, NEDRoutes.Detail].join('/'),
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

// -----------------------------------------------------------
export const JobDetail = {
  exact: true,
  id: PublicRouteNames.JobDetail,
  label: "Tin chi tiết",
  path: RoutePaths.JobDetail,
  component: JobDetailPage,
  icon: HomeIcon
}

export const JobDetail1 = {
  exact: true,
  id: PublicRouteNames.JobDetail,
  label: "Tin chi tiết",
  path: '/?page=2',
  component: JobDetailPage,
  icon: HomeIcon
}