import React, { Suspense } from 'react';
import { Routes ,Route} from 'react-router-dom';
//Route  
import RoutePages from '../../Pages/Routes'
//Auth route
import PrivateRoute from '../../../core/auth/PrivateRoute'
import PublicRoute from '../../../core/auth/PublicRoute'
//principal components
import LoginPages from '../../Pages/LoginPages'
import Dashboard from '../../Dashboard'
import LinearProgress from '@mui/material/LinearProgress';


export default function NavigationRoute() {
    
    return (
        <Suspense fallback={<div><LinearProgress color="success" /></div>}>
            <Routes>
                <Route path="/login"  key="/login" element={<PublicRoute><LoginPages/></PublicRoute>} />
                {
                    RoutePages.map(({ path, Component }) =>
                        
                            <Route
                                key={path}
                                path={path}
                                element={ 
                                    <Dashboard> 
                                        <Component/>
                                    </Dashboard>
                                }
                            />
                        
                    )
                }
            </Routes>
        </Suspense>
    )
}

