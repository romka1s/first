import { VacancyCard } from "entities/VacancyCard";
import { Col, Row } from "react-bootstrap"

const VacancyContent = () => {
    return(
        <Col md={10}>
            <Row className="mt-5">
                <p className="ps-0" style={{fontSize:"3.3vw", color:"#407e8c"}}>ВАКАНСИИ</p>
            </Row>
            <Row className="mt-4 pe-3">
                <VacancyCard/>
                <VacancyCard/>
                <VacancyCard/>
                <VacancyCard/>
                <VacancyCard/>
                <VacancyCard/>
                <VacancyCard/>
                <VacancyCard/>
                <VacancyCard/>
            </Row>
        </Col>
    )
}

export default VacancyContent;