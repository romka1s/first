import { Col, Row } from "react-bootstrap"
import MenuSvg from '../../../shared/assets/items/menu-full.svg';
const Navbar = () => {
    return(
        <Row className="ms-0" style={{width:"100vw", paddingLeft:"0%", boxShadow:"5px 5px 20px #00195245", position:"fixed", backgroundColor:"white", zIndex:"4"}}>
            <Col md={1}>
                <MenuSvg />
            </Col>
            <Col md={{offset:4, span:2}} className='d-flex justify-content-center'>
                <p className="mb-0 align-items-center" style={{display:"flex", justifyContent:"center", fontWeight:"350", fontSize:"2vw", color:"#02234C", cursor:"pointer"}}>SelfEd</p>
            </Col>
            <Col className='d-flex justify-content-end me-5 pb-0'>
                <p  className="mb-0 align-items-center" style={{display:"flex", justifyContent:"center", textDecoration:"underline", cursor:"pointer"}}>ProfileName</p>
            </Col>
        </Row>
    )
}
export default Navbar;