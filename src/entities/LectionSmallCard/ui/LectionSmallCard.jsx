import './LectionSmallCard.css'
import { Col, Container, Row } from "react-bootstrap";

const LectionSmallCard = () => {
    return(
        <Container className="mb-3 ps-0 pe-0 me-5" style={{height:"18.2vw", width:"28vw", borderRadius:"10px", boxShadow:"5px 5px 20px #00195240", flex:"0 0 auto"}}>
            <Row className="p-0 m-0 w-100" style={{height:"45%", backgroundColor:"#d9d9d9", borderRadius:"10px 10px 0px 0px"}}/>
            <Row className='p-0 m-0'>
                <p className='p-0 mb-0 mt-1 d-flex justify-content-center' style={{color:"#959595", fontSize:"small"}}>Статья</p>
            </Row>
            <Row className='p-0 m-0'>
                <p className='mb-0 ms-2' style={{fontSize:"small"}}>Имя человека</p>
            </Row>
            <Row className='p-0 m-0'>
                <p className='mb-0 ms-2'>Название лекции</p>
            </Row>
            <Row className="w-100 pb-3 m-0 align-self-end d-flex" style={{height:"30%"}}>
                <Col className='d-flex justify-content-end align-items-end'>
                    <button className="lection-card-btn-1">
                        Read
                    </button>
                </Col>
                <Col className='d-flex justify-content-start align-items-end'>
                    <button className="lection-card-btn-2">
                        Skip
                    </button>
                </Col>
            </Row>
    
        </Container>
    )
}
export default LectionSmallCard;