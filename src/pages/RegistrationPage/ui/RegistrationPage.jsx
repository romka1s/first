import {Button, Form, Row} from 'react-bootstrap';
import './Registration.css';
import {AuthRegistrBackground} from "widgets/AuthRegistrBackground";
import {useState} from "react";
import UserApi from "shared/api/UserApi";

const RegistrationPage = () => {
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [password_2, setPassword2] = useState("")
    const [email, setEmail] = useState("")

    const register = (e) => {
        e.preventDefault()
        if (password_2 === password) {
            UserApi.register(login, password, email).then(res => {
                console.log(res)
            })
        }
        else {
            alert('Пароли не совпадают')
        }
    }
    
    // const checkForEnter = (e) => {
    //     if (e.keyCode == 13) { 
    //       document.querySelector(".block .FormControl").click();
    //     }
    // }

    return (
        <AuthRegistrBackground header="РЕГИСТРАЦИЯ" label="зарегистрироваться">
            <Form className="d-flex justify-content-center w-100 p-0 m-0">
                <Form.Group className="mb-3">
                    <Form.Control
                        placeholder='Логин'
                        className="form"
                        onChange={e => setLogin(e.target.value)}
                    />
                    <Form.Control
                        placeholder='Почта'
                        className="form"
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        type="password"
                        placeholder='Пароль'
                        className="form"
                        onChange={(e) => {
                            // checkForEnter(e);
                            setPassword(e.target.value)}}
                    />
                    <Form.Control
                        type="password"
                        placeholder='Подтверждение пароля'
                        className="form"
                        onChange={e => setPassword2(e.target.value)}
                    />
                </Form.Group>
            </Form>
            <Form className="d-flex justify-content-center align-items-center w-100 p-0 m-0">
                <Form.Check.Input type="checkbox" className="checkbox m-0" />
                <Form.Check.Label className="checkbox_text ms-2"> Я принимаю условия обработки персональных
                    данных </Form.Check.Label>
            </Form>
            <Row className="justify-content-center">
                <Button className="btn_regist" onClick={register}>
                    <p className="btn_regist_text m-0"> ЗАРЕГИСТРИРОВАТЬСЯ </p>
                </Button>
            </Row>
        </AuthRegistrBackground>
    );
};

export default RegistrationPage;