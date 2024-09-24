import './ProfileInformation.css'
import { Col, Container, Form, FormGroup, InputGroup,  Row } from "react-bootstrap";
import SearchSvg from '../../../shared/assets/items/search-accept.svg';
import CrossSvg from '../../../shared/assets/items/cross.svg';
import { ProfileMenu } from 'features/ProfileMenu';
import { ProgressChart } from 'entities/ProgressChart';
const ProfileInformation = () => {
    return (
        <Container style={{maxWidth:"100%", height:"100%",marginLeft:"0%", marginTop:"7%", paddingLeft:"0%", marginBottom:"2vw"}}>
            <Row className=" pe-4" style={{width:"100%", height:"7vw"}}>
                <Col className="h-100 p-0" >
                    <Container className="" style={{height:"7vw", maxWidth:"100%", borderRadius:"13px", boxShadow:"5px 5px 20px #00195245"}}>
                        <Row className="align-items-center h-100">
                            <Col md={1} className='align-items-center'>
                                <Container
                                    className="rounded-circle d-flex justify-content-center align-items-center"
                                    style={{width: '5vw',height:'5vw', border:"none", backgroundImage:"linear-gradient(180deg, #006B73, #02234C)", color:"white"}}
                                >
                                    <p className='mb-0' style={{fontWeight:"bold", fontSize:"2.5vw"}}>NS</p>
                                </Container>
                            </Col>
                            <Col className='d-flex justify-content-start h-100 align-items-center'>
                                <p className="mb-0 ms-3" style={{fontSize:"1.7vw", fontWeight:"350"}} >Name Surname</p>
                            </Col>
                            <Col className='align-items-end d-flex justify-content-end h-100'>
                                <p  className="mb-2" style={{fontSize:"0.9vw", color:"#959595", cursor:"pointer"}}>Изменить фон</p>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
            <Row className='mt-5 pe-4' style={{width:"100%", height:"50vw"}}>
                {/* <Col md={2} style={{height:"50vw"}}>
                    <ProfileMenu/>
                </Col> */}
                <Col md={{span:8}} className="ps-0 pe-5" style={{height:"50vw"}}>
                    <FormGroup className="profileform-container">
                        <p className="mt-3 mb-0" style={{display:"flex", justifyContent:"center", fontWeight:"440", fontSize:"1.4vw"}}>
                            Настройки профиля
                        </p>
                        <Form.Label className="profileform-label">Фамилия:</Form.Label>
                        <Form.Control className='profileform-info'/>
                        <Form.Label className="profileform-label">Имя:</Form.Label>
                        <Form.Control className='profileform-info'/>
                        <Form.Label className="profileform-label">Отчество:</Form.Label>
                        <Form.Control className='profileform-info'/>
                        <Form.Label className="profileform-label">Логин:</Form.Label>
                        <Form.Control className='profileform-info'/>
                        <Form.Label className="profileform-label">Email:</Form.Label>
                        <Form.Control className='profileform-info'/>
                        <Form.Label className="profileform-label">Telergam:</Form.Label>
                        <Form.Control className='profileform-info'/>
                    </FormGroup>
                    <FormGroup className="profileform-container mt-4">
                        <Row>
                            <p className="mt-3 mb-0" style={{display:"flex", justifyContent:"center", fontWeight:"440", fontSize:"1.4vw"}}>
                                Образование
                            </p>
                        </Row>
                        <Row>
                            <Col md={9}>
                                <Form.Label className="profileform-label">Университет:</Form.Label>
                                <Form.Control className='profileform-info'/>
                            </Col>
                            <Col md={3}>
                                <Form.Label className="profileform-label">Курс:</Form.Label>
                                <Form.Control className='profileform-info'/>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={9}>
                                <Form.Label className="profileform-label">Школа:</Form.Label>
                                <Form.Control className='profileform-info'/>
                            </Col>
                            <Col>
                                <Form.Label className="profileform-label">Класс:</Form.Label>
                                <Form.Control className='profileform-info'/>
                            </Col>
                        </Row>
                    </FormGroup>
                </Col>
                <Col style={{height:"50vw"}}>
                    <Row  style={{height:"23vw"}}>
                        <FormGroup className="profileform-container ps-4 pe-4">
                            <p className="mt-3 mb-0" style={{display:"flex", justifyContent:"center", fontWeight:"440", fontSize:"1.4vw"}}>
                                Смена пароля
                            </p>
                            <Form.Label className="profileform-label">Старый пароль:</Form.Label>
                            <Form.Control className='profileform-info'/>
                            <Form.Label className="profileform-label">Новый пароль:</Form.Label>
                            <Form.Control className='profileform-info'/>
                            <Form.Label className="profileform-label">Подтверждение пароля:</Form.Label>
                            <Form.Control className='profileform-info'/>
                            <Container className="w-100 d-flex justify-content-center mt-4 mb-1">
                                <button className="profileform-change-password-btn">Сменить</button>
                            </Container>
                        </FormGroup>
                    </Row>
                    <Row className='ms-0 me-0'  style={{height:"27vw"}}>
                        <ProgressChart value={270} absValue={400} name="Рейтинг"/>
                        <ProgressChart value={4.6} absValue={5.0} name="Средний балл обучения"/>
                    </Row>
                </Col>
            </Row>
            <Row  className="mt-5 pe-4" style={{width:"100%"}}>
                <Col className="ps-0 pe-0" >
                    <Container className='profileform-container ms-0' style={{ maxWidth:"100%", height:"auto"}}>
                        <Row className="mb-2 mt-3">
                            <p className="mb-0" style={{display:"flex", justifyContent:"center", fontWeight:"440", fontSize:"1.4vw"}}>
                                Интересы
                            </p>
                        </Row>
                        <Row style={{ display:"flex", justifyContent:"center", }}>
                            <InputGroup style={{width:"50%", boxShadow:"5px 5px 20px  #00195245", borderRadius:"10px", padding:"0%"}}>
                                <Form.Control placeholder="Поиск..." style={{borderRadius:"10px 0px 0px 10px", borderRight:"none"}}/>
                                <InputGroup.Text style={{borderRadius:"0px 10px 10px 0px", borderLeft:"none", backgroundColor:"white"}}>
                                    <SearchSvg/>
                                </InputGroup.Text>
                            </InputGroup>
                        </Row>
                        <Row className="mt-4 justify-content-center mx-auto" style={{width:"50%", height:"auto"}}>
                            <Col className="pe-3 ps-3 pb-3" md={6}>
                                <Container style={{backgroundColor:"#91bfc3", borderRadius:"10px", width:"100%", height:"2.2vw", alignItems:"center"}}>
                                    <Row style={{height:"100%"}}>
                                        <Col md={9}  style={{height:"100%"}}>
                                            <p className='d-flex align-items-center' style={{height:"100%"}}>Программирование</p>
                                        </Col>
                                        <Col md={3} className='d-flex align-items-center justify-content-center pe-0'>
                                            <CrossSvg style={{cursor:"pointer"}}/>
                                        </Col>
                                    </Row>
                                </Container>
                            </Col>
                            <Col className="pe-3 ps-3 pb-3" md={6}>
                                <Container style={{backgroundColor:"#91bfc3", borderRadius:"10px", width:"100%", height:"2.2vw", alignItems:"center"}}>
                                    <Row style={{height:"100%"}}>
                                        <Col md={9}  style={{height:"100%"}}>
                                            <p className='d-flex align-items-center' style={{height:"100%"}}>Программирование</p>
                                        </Col>
                                        <Col md={3} className='d-flex align-items-center justify-content-center pe-0'>
                                            <CrossSvg style={{cursor:"pointer"}}/>
                                        </Col>
                                    </Row>
                                </Container>
                            </Col>
                            <Col className="pe-3 ps-3 pb-3" md={6}>
                                <Container style={{backgroundColor:"#91bfc3", borderRadius:"10px", width:"100%", height:"2.2vw", alignItems:"center"}}>
                                    <Row style={{height:"100%"}}>
                                        <Col md={9}  style={{height:"100%"}}>
                                            <p className='d-flex align-items-center' style={{height:"100%"}}>Программирование</p>
                                        </Col>
                                        <Col md={3} className='d-flex align-items-center justify-content-center pe-0'>
                                            <CrossSvg style={{cursor:"pointer"}}/>
                                        </Col>
                                    </Row>
                                </Container>
                            </Col>
                            <Col className="pe-3 ps-3 pb-3" md={6}>
                                <Container style={{backgroundColor:"#91bfc3", borderRadius:"10px", width:"100%", height:"2.2vw", alignItems:"center"}}>
                                    <Row style={{height:"100%"}}>
                                        <Col md={9}  style={{height:"100%"}}>
                                            <p className='d-flex align-items-center' style={{height:"100%"}}>Программирование</p>
                                        </Col>
                                        <Col md={3} className='d-flex align-items-center justify-content-center pe-0'>
                                            <CrossSvg style={{cursor:"pointer"}}/>
                                        </Col>
                                    </Row>
                                </Container>
                            </Col>
                            <Col className="pe-3 ps-3 pb-3" md={6}>
                                <Container style={{backgroundColor:"#91bfc3", borderRadius:"10px", width:"100%", height:"2.2vw", alignItems:"center"}}>
                                    <Row style={{height:"100%"}}>
                                        <Col md={9}  style={{height:"100%"}}>
                                            <p className='d-flex align-items-center' style={{height:"100%"}}>Программирование</p>
                                        </Col>
                                        <Col md={3} className='d-flex align-items-center justify-content-center pe-0'>
                                            <CrossSvg style={{cursor:"pointer"}}/>
                                        </Col>
                                    </Row>
                                </Container>
                            </Col>


                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
};

export default ProfileInformation;
