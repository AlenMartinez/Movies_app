import  {lazy} from 'react'

const HomePages = lazy(() => import('../HomePages'));

const RoutePages = [
    {
        path: `/`,
        Component: HomePages,
        exact: true,
    },
];


export default RoutePages;