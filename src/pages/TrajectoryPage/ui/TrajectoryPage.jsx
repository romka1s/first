import { Navbar } from "features/Navbar";
import { ProfileMenu } from "features/ProfileMenu";
import { TrajectoryContent } from "features/TrajectoryContent";
import { Col, Container, Row } from "react-bootstrap";

const TrajectoryPage = () => {
    return (
        <Container style={{maxWidth:"100vw", maxHeight:"100vw", margin:"0%", overflowX:"hidden", overflowY:"hidden", padding:"0%"}}>
            <Navbar/>
            <Row>
                <Col md={2}>
                    <ProfileMenu/>
                </Col>
                <TrajectoryContent />
            </Row>
        </Container>
    );
};

export default TrajectoryPage;
