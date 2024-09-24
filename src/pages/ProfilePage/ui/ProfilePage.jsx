import { ProfileInformation } from "features/ProfileInformation";
import { Navbar } from "features/Navbar";
import { Col, Container, Row } from "react-bootstrap";
import { ProfileMenu } from "features/ProfileMenu";

const ProfilePage = () => {
    return (
        <Container style={{maxWidth:"100vw", maxHeight:"100vw", margin:"0%", overflowX:"hidden", overflowY:"hidden", padding:"0%"}}>
            <Navbar/>
            <Row>
                <Col md={2}>
                    <ProfileMenu/>
                </Col>
                <Col>
                    <ProfileInformation/>
                </Col>
            </Row>
        </Container>
    );
};

export default ProfilePage;
