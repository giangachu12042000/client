import React from 'react'
import { Route, Redirect} from 'react-router-dom';
import Auth from '../localStorage/Auth';

const GetRoutes = route =>{
    return(
        <Route
            path={route.path}
            exact={route.exact}
            render={props=>{
                    return(
                        // Auth.isAuthenticate() ? 
                        //     (
                                <route.component {...props} routes={route.routes}/>
                        //     ) : (
                        //             <Redirect 
                        //                 to={{
                        //                     pathname: "/signup/login",
                        //                     state: { from: props.location.pathname },
                        //                 }}
                        //             />
                        //         )
                    )
                }
            }
        />
    )
}

export default GetRoutes