import './styles/index.css'
import AppRouter from "app/providers/router/AppRouter";
import 'bootstrap/dist/css/bootstrap.min.css'
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getAuthFlag, userActions} from "entities/User"; // do not know what it is

const App = () => {
    const isAuth = useSelector(getAuthFlag)
    const dispatch = useDispatch()
    //
    // useEffect(() => {
    //     dispatch(userActions.initUserData())
    // }, [dispatch])

    return (
        <div className="app">
            {/* {isAuth && <Navbar/>} */}
            <AppRouter />
        </div>
    )
}

export default App
