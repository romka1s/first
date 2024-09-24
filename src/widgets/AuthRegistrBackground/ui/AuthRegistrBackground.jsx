import {Container, Row} from "react-bootstrap";
import "./AuthRegistrBackground.css"
import Logo from "shared/assets/logo.svg";
import {AUTH_ROUTE, REGISTRATION_ROUTE} from "shared/consts/paths";
import {Link, useNavigate} from "react-router-dom";

const AuthRegistrBackground = ({header, label, children, ifsign}) => {
    const navigate = useNavigate()
    if (ifsign === 1)
        return (
            <div className='d-flex justify-content-between align-items-center min-vh-100'>
                <Container className='my_container'>
                    <div className="auto-registration">
                        <Row className="justify-content-center">
                            <p className="login_text1 p-0 w-auto">Еще нет аккаунта?</p>
                        </Row>
                        <Row  onClick={(e) => {e.preventDefault();navigate(REGISTRATION_ROUTE)}} className="justify-content-center">
                            <p className="login_text2 p-0 m-0 w-auto">Зарегестрироваться</p>
                        </Row>
                    </div>
                    <Row className="justify-content-center">
                        <p className="header w-auto p-0"> {header} </p>
                    </Row>
                    <Row className="justify-content-center">
                        <p className="text1 w-auto p-0"> Введите свои данные, чтобы {label} </p>
                    </Row>
                    {children}
                </Container>
                <Container className="logo">
                    <Logo width="30vw" height="35vh"/>
                </Container>
            </div>
        )
    else 
        return (
        <div className='d-flex justify-content-between align-items-center min-vh-100'>
            <Container className='my_container'>
                <div className="auto-registration">
                    <Row className="justify-content-center">
                        <p className="login_text1 p-0 w-auto">Уже есть аккаунт?</p>
                    </Row>
                    <Row className="justify-content-center">
                        <Link onClick={(e) => {e.preventDefault();navigate(AUTH_ROUTE)}} className="login_text2 p-0 m-0 w-auto">Войти в личный кабинет</Link>
                    </Row>
                </div>
                <Row className="justify-content-center">
                    <p className="header w-auto p-0"> {header} </p>
                </Row>
                <Row className="justify-content-center">
                    <p className="text1 w-auto p-0"> Введите свои данные, чтобы {label} </p>
                </Row>
                {children}
            </Container>
            <Container className="logo">
                <Logo width="30vw" height="35vh"/>
            </Container>
        </div>
    );
};

export default AuthRegistrBackground;