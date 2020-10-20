
import {
    CateAdmin,
    AdminPage,
    ProductAdmin
} from '../pages'

const routes = [
    {
        exact: false,
        path:'/admin',
        component: AdminPage,
        routes:[
            {
                exact: true,
                path:"/admin/category",
                component: CateAdmin
            },
            {
                exact: true,
                path:"/admin/product",
                component: ProductAdmin
            }
        ]
    }
]
export default routes