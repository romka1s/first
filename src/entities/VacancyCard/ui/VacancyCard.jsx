import './VacancyCard.css'
import { Col, Container, Row } from "react-bootstrap"

const VacancyCard = () => {
    return(
        //className="vacancy-card-container ps-0"
        <Col md={4} className="ps-0 pe-3 mb-4" style={{height:"6vw"}}> 
            <Row className="p-0 m-0" style={{border:"1px solid #D9D9D98C",width:"100%", height:"100%", borderRadius:"10px", boxShadow: "3px 3px 10px #00195245"}}>
                <Col className="p-0 m-0" style={{backgroundColor:"#407e8c", borderRadius:"10px 0px 0px 10px", maxWidth:"5%"}}/>
                <Col style={{width:"95%"}}>
                    <Row  className="" style={{height:"2vw"}}>
                        <p 
                            className="mb-0 pt-1 d-flex justify-content-center" 
                            style={{fontSize:"x-small", color:"#959595"}}
                        >
                            Вакансия
                        </p>
                    </Row>
                    <Row style={{height:"2vw"}}>
                        <p 
                            className='mb-0' 
                            style={{fontSize:"medium", textOverflow:"ellipsis", whiteSpace:"nowrap", overflow:"hidden"}}
                        >
                            Ведущий программист-разработчик С/С++
                        </p>
                    </Row>
                    <Row className="mb-0" style={{height:"2vw"}}>
                        <p className="align-items-end d-flex mb-0 pb-1" style={{fontSize:"x-small"}}>от 250 000 до 350 000 ₽</p>
                    </Row>
                </Col>
            </Row>
        </Col>
    )
}

export default VacancyCard;