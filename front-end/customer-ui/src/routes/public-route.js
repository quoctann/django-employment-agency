import HomePage from "../views/Home";
import HomeIcon from "@material-ui/icons/Home";

import LoginPage from '../views/Login';
import LoginIcon from '@material-ui/icons/PeopleAltOutlined';

import RegisterPage from '../views/Register';
import ProfilePage from '../views/Profile';

const NEDRoutes = {
    New: "new",
    Detail: ":id"
}

export const PublicRouteNames = {
    Home: '',
    Login: 'Login',
    Register: 'Register',
    Profile: 'Profile',
   
}

export const AllRouteNames = {
    ...PublicRouteNames
}

export const RoutePaths = {
    Home: ['', PublicRouteNames.Home].join('/'),
    Login: ['', PublicRouteNames.Login].join('/'),
    Register: ['', PublicRouteNames.Register].join('/'),
    Profile: ['', PublicRouteNames.Profile].join('/'),
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
    Profile: {
        exact: true,
        id: PublicRouteNames.Profile,
        label: "Profile label",
        path: RoutePaths.Profile,
        component: ProfilePage,
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