import { Col, Container, Row } from "react-bootstrap";

const ProgressChart = ({value, absValue, name}) => {
    const percentage = 100* value / absValue 
    const r = 72;
    const circ = 2 * Math.PI * r;
    const ofs = -((100 - percentage) * circ) / 100

    return(
        <Col className="ps-0 pe-0">
            <Row style={{height:"16vw", paddingTop:"45%"}} className='d-flex justify-content-center mt-4 pe-0 ps-0'>
                <svg width="16w" height="16vw" >
                    <defs>
                        <linearGradient id="Gradient1">
                            <stop  offset="0%" stopColor="#2EA081"/>
                            <stop  offset="100%" stopColor="#02234C"/>
                        </linearGradient>
                    </defs>
                    <circle style={{transform:"rotate(-90deg)", transformOrigin:"center"}} r={r} cx="8vw" cy="8vw" fill="white" stroke="url(#Gradient1)" strokeWidth="5.2" strokeDasharray={circ} strokeDashoffset={ofs} strokeLinecap="round" filter="drop-shadow(-5px 5px 10px #006B734D) drop-shadow(4px -4px 5px #02234C4D)"/>
                    <text style={{fontWeight:"300", fontSize:"2.5vw"}} x="50%" y="40%" dominantBaseline="central" textAnchor="middle">{value}</text>
                </svg>
            </Row>
            <Row style={{height:"9vw"}} className=' align-items-start mt-4'>
                <p className='d-flex justify-content-center' style={{fontWeight:"340", fontSize:"1.3vw"}}>{name}</p>
            </Row>
        </Col>
    )
}
export default ProgressChart;