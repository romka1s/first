import {Navigate, Route, Routes} from "react-router-dom";
import {memo, Suspense, useMemo} from "react";
import {AUTH_ROUTE, LANDING_ROUTE, PROFILE_ROUTE, REGISTRATION_ROUTE} from "shared/consts/paths";
import { routeConfig } from "shared/config/routeConfig";
import {getAuthFlag} from "entities/User";
import {useSelector} from "react-redux";

const AppRouter = memo(() => {
    const isAuth = useSelector(getAuthFlag)
    const routes = useMemo(() => Object.values(routeConfig).filter((route) => {
        if (route.authOnly !== isAuth) {
            return false
        }
        return true
    }), [isAuth])
    return (
        <Routes>
            {routes.map(({ path, element }) => (
                <Route
                    key={path}
                    path={path}
                    element={(
                        <Suspense fallback={<div>Loading...</div>}>
                            {element}
                        </Suspense>
                    )}
                />
            ))}
            <Route path="*" element={<Navigate to={isAuth ? PROFILE_ROUTE : AUTH_ROUTE} />} />
            {/* <Route path="*" element={<Navigate to={LANDING_ROUTE} />} /> */}
        </Routes>
    );
});

export default AppRouter;
