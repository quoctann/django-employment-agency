import HomePage from "../views/Home";
import HomeIcon from "@material-ui/icons/Home";

import LoginPage from '../views/Login';
import LoginIcon from '@material-ui/icons/PeopleAltOutlined';

import RegisterPage from '../views/Register';
import ProfileCanPage from '../views/ProfileCandidate';
import HomeRecruPage from '../views/HomeRecruiter';

const NEDRoutes = {
    New: "new",
    Detail: ":id"
}

export const PublicRouteNames = {
    Home: '',
    Login: 'Login',
    Register: 'Register',
    ProfileCan: 'ProfileCan',
    HomeRecruiter: 'HomeRecruiter',
   
}

export const AllRouteNames = {
    ...PublicRouteNames
}

export const RoutePaths = {
    Home: ['', PublicRouteNames.Home].join('/'),
    Login: ['', PublicRouteNames.Login].join('/'),
    Register: ['', PublicRouteNames.Register].join('/'),
    ProfileCan: ['', PublicRouteNames.ProfileCan].join('/'),
    HomeRecruiter: ['', PublicRouteNames.HomeRecruiter].join('/'),
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
    Login: {
        exact: true,
        id: PublicRouteNames.Login,
        label: "Login label",
        path: RoutePaths.Login,
        component: LoginPage,
        icon: LoginIcon
    },
    ProfileCanPage: {
        exact: true,
        id: PublicRouteNames.ProfileCan,
        label: "Profile can label",
        path: RoutePaths.Profile,
        component: ProfileCanPage,
        icon: LoginIcon
    },
    HomeRecruiter: {
        exact: true,
        id: PublicRouteNames.HomeRecruiter,
        label: "Home recruiter label",
        path: RoutePaths.HomeRecruiter,
        component: HomeRecruPage,
        icon: LoginIcon
    },
    Register: {
        exact: true,
        id: PublicRouteNames.Register,
        label: "Register label",
        path: RoutePaths.Register,
        component: RegisterPage,
        icon: LoginIcon
    },
}