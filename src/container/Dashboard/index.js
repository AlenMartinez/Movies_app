import NavBar from '../../components/NavBar'

const  Dashboard = ({children}) => {
    return (
        <>
            <NavBar/>
        {children}
        </>
    )
}

export default Dashboard;