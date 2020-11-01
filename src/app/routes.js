
import {
    CateAdmin,
    AdminPage,
    ProductAdmin,
    UserAdmin
} from '../pages/adminPage';
import{
    Login,
    Register
} from '../pages/clientPage';
import ClientPage from '../pages';

const routes = [
    {
        exact: false,
        path: '/admin',
        component: AdminPage,
        routes:[
            {
                exact: true,
                path: "/admin/category",
                component: CateAdmin
            },
            {
                exact: true,
                path: "/admin/product",
                component: ProductAdmin
            },
            {
                exact: true,
                path: "/admin/user",
                component: UserAdmin
            }
        ]
    },
    {
        exact: false,
        path: '/',
        component: ClientPage,
        routes: [
            {
                exact: true,
                path: "/login",
                component: Login
            },
            {
                exact: true,
                path: "/register",
                component: Register
            },
        ]
    }
]
export default routes