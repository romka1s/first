import {AuthRegistrBackground} from "widgets/AuthRegistrBackground";
import {Button, Form, Row, InputGroup, Image} from "react-bootstrap";
import "./AuthenticationPage.css"
import {Link, useNavigate} from "react-router-dom";
import {REGISTRATION_ROUTE} from "shared/consts/paths";
import {useEffect, useState} from "react";
import KnowledgeBaseApi from "shared/api/UserApi";
import { useDispatch } from "react-redux";
import { userActions } from "entities/User";
import EyeOpen from "shared/assets/items/view.png";
import EyeClosed from "shared/assets/items/hide.png";



const AuthenticationPage = () => {
    const navigate = useNavigate()
    const dispatch =  useDispatch()
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)

    const auth = () => {
        KnowledgeBaseApi.loginByUsername(login, password).then((res) => {
            if (!res || res.errors) return
            dispatch(userActions.setAuth(true))
        })
    }

    return (
        <>
        <AuthRegistrBackground header="ВХОД" label="войти" ifsign={1}>
            <Form className="d-flex justify-content-center w-100 p-0 m-0">
                <Form.Group className="mb-3">
                    <Form.Control
                        placeholder='Логин'
                        className="form"
                        onChange={(e) => setLogin(e.target.value)}
                    />
                    <InputGroup>
                        <Form.Control
                            type={showPassword ? 'text' : 'password'}
                            placeholder='Пароль'
                            className="form1"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button className="show-pswrd-btn">
                            <Image 
                                src={showPassword ? EyeOpen : EyeClosed}
                                className="showPassword"
                                onClick = {(e) => {
                                    e.preventDefault()
                                    setShowPassword(!showPassword)
                                }}
                                alt="search"
                            />
                        </button>   
                    </InputGroup>

                    
                </Form.Group>
            </Form>
            <Row className="justify-content-center">
                <Link
                    className="link_text w-auto"
                    onClick={(e) => {
                        e.preventDefault()
                        navigate(REGISTRATION_ROUTE)
                    }}
                >
                    Зарегистрироваться
                </Link>
            </Row>
            <Row className="justify-content-center">
                <Button
                    className="btn_auth"
                    onClick={auth}
                >
                    <p className="btn_auth_text m-0 w-auto"> Войти </p>
                </Button>
            </Row>
        </AuthRegistrBackground>
        </>
    );
};

export default AuthenticationPage;
