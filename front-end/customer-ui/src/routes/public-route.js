import HomePage from "../views/Home";
import HomeIcon from "@material-ui/icons/Home";

import LoginPage from '../views/Login';
import LoginIcon from '@material-ui/icons/PeopleAltOutlined';

import RegisterPage from '../views/Register';
import ProfileCanPage from '../views/ProfileCandidate';
import HomeRecruPage from '../views/HomeRecruiter';
import CanInfoPage from '../views/CanInfo';
import NewPostPage from '../views/NewPost';
// import PostDetailPage from '../views/PostDetail';

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
    CanInfo: 'CanInfo',
    NewPost: 'NewPost',
    PostDetail: 'PostDetail',
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
    CanInfo: ['', PublicRouteNames.CanInfo, NEDRoutes.Detail].join('/'),
    NewPost: ['', PublicRouteNames.NewPost, NEDRoutes.New].join('/'),
    PostDetail: ['', PublicRouteNames.PostDetail, NEDRoutes.Detail].join('/'),

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
   
    Register: {
        exact: true,
        id: PublicRouteNames.Register,
        label: "Register label",
        path: RoutePaths.Register,
        component: RegisterPage,
        icon: LoginIcon
    },

    CanInfo: {
        exact: true,
        id: PublicRouteNames.CanInfo,
        label: "Info Candidate page",
        path: RoutePaths.CanInfo,
        component: CanInfoPage,
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
    NewPost: {
        exact: true,
        id: PublicRouteNames.NewPost,
        label: "Info Candidate page",
        path: RoutePaths.NewPost,
        component: NewPostPage,
        icon: LoginIcon
    },
    PostDetail: {
        exact: true,
        id: PublicRouteNames.PostDetail,
        label: "Info Candidate page",
        path: RoutePaths.PostDetail,
        component: NewPostPage,
        icon: LoginIcon
    }
}

export const CandidateRoutes = {
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
    Register: {
        exact: true,
        id: PublicRouteNames.Register,
        label: "Register label",
        path: RoutePaths.Register,
        component: RegisterPage,
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
}

export const RecruiterRoutes = {
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
    Register: {
        exact: true,
        id: PublicRouteNames.Register,
        label: "Register label",
        path: RoutePaths.Register,
        component: RegisterPage,
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
    CanInfo: {
        exact: true,
        id: PublicRouteNames.CanInfo,
        label: "Info Candidate page",
        path: RoutePaths.CanInfo,
        component: CanInfoPage,
        icon: LoginIcon
    },
    // NewPost: {
    //     exact: true,
    //     id: PublicRouteNames.NewPost,
    //     label: "Info Candidate page",
    //     path: RoutePaths.NewPost,
    //     component: NewPostPage,
    //     icon: LoginIcon
    // }
}