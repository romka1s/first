import AuthenticationPage from "pages/AuthenticationPage/ui/AuthenticationPage";
import {RegistrationPage} from "pages/RegistrationPage";
import {PasswordRecoveryPage} from "pages/PasswordRecoveryPage";
import {
    AUTH_ROUTE,
    CONFIRM_REGISTRATION, LANDING_ROUTE,
    PROFILE_ROUTE,
    RECOVERY_ROUTE,
    REGISTRATION_ROUTE,
    TRAJECTORY_ROUTE,
    VACANCY_ROUTE
} from "shared/consts/paths";
import {AfterRegistrationPage} from "pages/AfterRegistrationPage";
import { ProfilePage } from "pages/ProfilePage";
import { VacancyPage } from "pages/VacancyPage";
import { TrajectoryPage } from "pages/TrajectoryPage";
import {Landing} from "pages/Landing";

export const routeConfig = [
    {
        path: AUTH_ROUTE,
        element: <AuthenticationPage />,
        authOnly: false
    },
    {
        path: REGISTRATION_ROUTE,
        element: <RegistrationPage />,
        authOnly: false
    },
    {
        path: LANDING_ROUTE,
        element: <Landing />,
        authOnly: false
    },
    {
        path: RECOVERY_ROUTE,
        element: <PasswordRecoveryPage />,
        authOnly: false
    },
    {
        path: CONFIRM_REGISTRATION,
        element: <AfterRegistrationPage />,
        authOnly: false
    },
    {
        path: PROFILE_ROUTE,
        element: <ProfilePage />,
        authOnly: true
    },
    {
        path: TRAJECTORY_ROUTE,
        element: <TrajectoryPage />,
        authOnly: false
    },
    {
        path: VACANCY_ROUTE,
        element: <VacancyPage />,
        authOnly: false
    }
]
