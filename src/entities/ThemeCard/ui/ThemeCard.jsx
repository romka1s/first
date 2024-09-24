import "./ThemeCard.css"
import { Col, Container, Row } from "react-bootstrap"
import ArrowRight from '../../../shared/assets/items/triangle-right.svg'
import ArrowDown from '../../../shared/assets/items/triangle-down.svg'
import Dots from '../../../shared/assets/items/three-dots.svg'
import ArrowNext from '../../../shared/assets/items/arrow-right.svg'
import { useState } from "react"
import { LectionSmallCard } from "entities/LectionSmallCard"

const ThemeCard = () => {
    const [show, setShow] = useState(false);
    return(
        <Container className="theme-card h-auto" style={{maxWidth:"100%", maxHeight:"100%"}}>
            <Row className="align-items-center" style={{height:"6vw"}}>
                <Col md={5} className="d-flex align-items-center ms-4">
                    { !show ? 
                         <div style={{maxWidth:"5%"}}> <ArrowRight style={{cursor:"pointer"}} onClick={() => setShow(!show)}/> </div> 
                        :
                        <div style={{maxWidth:"5%"}}> <ArrowDown style={{cursor:"pointer"}} onClick={() => setShow(!show)}/> </div> }
                    <p className="mb-0 ms-3" style={{fontWeight:"bold", fontSize:'1.5vw', color:"#02234C"}}>Тема 1</p>
                </Col>
                <Col className="d-flex justify-content-end mt-0 pt-3 pe-4 align-items-start h-100">
                    <Dots style={{cursor:"pointer"}}/>
                </Col>
            </Row>
            {show && <Row className="h-auto" style={{height:"22vw", maxWidth:"100%"}} >
                <Col className="lection-cards-container mb-4 " md={{span:11}} style={{maxHeight:"20vw", overflowX:"auto", marginLeft:"4vw", overflowY:"hidden", maxWidth:"100%", display:"flex", flexWrap:"nowrap", justifyContent:"start"}}>
                    <LectionSmallCard/>
                    <LectionSmallCard/>
                    <LectionSmallCard/>
                    <LectionSmallCard/>
                    <LectionSmallCard/>
                    <LectionSmallCard/>
                </Col>
                <Col className="d-flex justify-content-end align-items-center pe-0">
                    <ArrowNext style={{cursor:"pointer"}}/>
                </Col>
            </Row>}
        </Container>
    )
}
export default ThemeCard;