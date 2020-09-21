import React from 'react'
import { Route} from 'react-router-dom';

const GetRoutes = route =>{
    return(
        <Route
            path={route.path}
            exact={route.exact}
            render={props=>{
                    return(
                        <route.component {...props} routes={route.routes}/>
                    )
                }
            }
        />
    )
}

export default GetRoutes