import './TrajectoryContent.css'
import { ThemeCard } from 'entities/ThemeCard';
import { TrajectoryProgressChart } from 'entities/TrajectoryProgressChart';
import { useState } from 'react';
import { Col, Form, FormGroup, Modal, Row } from "react-bootstrap";

const TrajectoryContent = () => {
    const [modalShow, setModalShow] = useState(false);
    const [target, setTarget] = useState('Программирование')
    const [context, setContext] = useState("Стать квалифицированным разработчиком программного обеспечения с глубоким пониманием языков программирования, различных технологий и методов разработки")
    return(
        <Col md={10}>
            <Row className="mt-5" style={{height:"20vw"}}>
                <Col className="h-100 pt-3" md={6} style={{borderRadius:"13px", backgroundColor:"white", boxShadow:"5px 5px 20px #00195245"}}>
                    <Row className="mt-4" style={{height:"5vw", maxWidth:"70%", backgroundColor:"#006B734D", borderRadius:"13px", boxShadow:"5px 5px 20px #00000026", alignItems:"center"}}>
                        <p className='p-0 ms-2 mb-0 w-auto ' style={{maxWidth:"5%", writingMode:"vertical-rl", textOrientation:"mixed", transform:"rotate(180deg)", color:"#959595"}}>Цель</p>
                        <p className='p-0 m-0 ms-3 w-auto' style={{maxWidth:"95%", fontSize:"2vw"}}>{target}</p>
                    </Row>
                    <Row className="mt-4" style={{height:"5vw", maxWidth:"70%", alignItems:"center"}}>
                        <p className='p-0 ms-2 mb-0 w-auto' style={{maxWidth:"5%",writingMode:"vertical-rl", textOrientation:"mixed", transform:"rotate(180deg)", color:"#959595"}}>Контекст</p>
                        <p className='p-0 m-0 ms-3 w-auto' style={{maxWidth:"85%"}}>
                            {context}
                        </p>
                    </Row>
                    <Row className='d-flex justify-content-end align-items-end' style={{height:"5vw"}} >
                        <button className="trajectory-edit-btn me-3" style={{width:"10vw", height:"2vw"}} onClick={() => setModalShow(!modalShow)}>Редактировать</button>
                        <Modal
                            show={modalShow}
                            onHide={() => setModalShow(!modalShow)}
                            size="lg"
                            aria-labelledby="contained-modal-title-vcenter"
                            animation={false} //Если она будет, будут жесткие траблы по закрытию модалки. Ссылку на проблему я сохранила
                            centered
                            backdropClassName='edit-trajectory-backdrop'
                            style={{borderRadius:"13px"}}
                        >
                            <Modal.Header closeButton> Редактировать </Modal.Header>
                            <Modal.Body>
                                <FormGroup className="ps-4 pe-4 pb-2">
                                    <Form.Label className="modal-label">
                                        Цель
                                    </Form.Label>
                                    <Form.Control className="modal-info" value={target} onChange={(e) => setTarget(e.target.value)}/>
                                    <Form.Label className="modal-label">
                                        Контекст
                                    </Form.Label>
                                    <Form.Control className="modal-info" value={context} onChange={(e) => setContext(e.target.value)}/>
                                </FormGroup>
                            </Modal.Body>
                        </Modal>
                    </Row>
                </Col>
                
                <TrajectoryProgressChart value={75} absValue={100}/>
                
            </Row>
            <Row className='mt-4 mb-4'>
                <Col md={{span:2, offset:9}}>
                    <button className="add-theme-btn">
                        Добавить тему
                    </button>
                </Col>
            </Row>
            <Row className="pe-5 mb-5" style={{maxWidth:"100%"}}>
                <ThemeCard/>
            </Row>
            <Row className="pe-5 mb-5" style={{maxWidth:"100%"}}>
                <ThemeCard/>
            </Row>
            <Row className="pe-5 mb-5" style={{maxWidth:"100%"}}>
                <ThemeCard/>
            </Row>
            <Row className="pe-5 mb-5" style={{maxWidth:"100%"}}>
                <ThemeCard/>
            </Row>
            <Row className="pe-5 mb-5" style={{maxWidth:"100%"}}>
                <ThemeCard/>
            </Row>
            <Row className="pe-5 mb-5" style={{maxWidth:"100%"}}>
                <ThemeCard/>
            </Row>
        </Col>
    )
}
export default TrajectoryContent;