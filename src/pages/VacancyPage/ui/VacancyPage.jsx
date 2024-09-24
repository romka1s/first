import { Navbar } from "features/Navbar";
import { ProfileMenu } from "features/ProfileMenu";
import { VacancyContent } from "features/VacancyContent";
import { Col, Container, Row } from "react-bootstrap";

const VacancyPage = () => {
    return (
        <Container style={{maxWidth:"100vw", maxHeight:"100vw", margin:"0%", overflowX:"hidden", overflowY:"hidden", padding:"0%"}}>
            <Navbar/>
            <Row>
                <Col md={2}>
                    <ProfileMenu/>
                </Col>
                <VacancyContent/>
            </Row>
        </Container>
    );
};

export default VacancyPage;