import  {lazy} from 'react'

const HomePages = lazy(() => import('../HomePages'));
const MoviePages = lazy(() => import('../MoviePages'));


const RoutePages = [
    {
        path: `/`,
        Component: HomePages,
        exact: true,
    },
    {
        path: `/movie/:id`,
        Component: MoviePages,
    }
];


export default RoutePages;