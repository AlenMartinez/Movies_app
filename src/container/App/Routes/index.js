import React, { Suspense } from 'react';
import { Routes ,Route} from 'react-router-dom';
//Route  
import RoutePages from '../../Pages/Routes'
//Auth route
import PrivateRoute from '../../../core/auth/PrivateRoute'
import PublicRoute from '../../../core/auth/PublicRoute'
//principal components
import LoginPages from '../../Pages/LoginPages'

export default function NavigationRoute() {
    
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/login"  key="/login" element={<PublicRoute><LoginPages/></PublicRoute>} />
                {
                    RoutePages.map(({ path, Component }) =>
                        <Route
                            key={path}
                            path={path}
                            element={ 
                                <PrivateRoute>
                                        <Component/>
                                </PrivateRoute>
                            }
                        />
                    )
                }
            </Routes>
        </Suspense>
    )
}

