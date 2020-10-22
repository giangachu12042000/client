
import {
    CateAdmin,
    AdminPage,
    ProductAdmin,
    UserAdmin,
} from '../pages'

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
    }
]
export default routes