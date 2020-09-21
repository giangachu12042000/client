
import {
    CateAdmin,
    AdminPage
} from 'views'

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
            }
        ]
    }
]
export default routes