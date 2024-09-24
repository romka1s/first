import { Col, Container, Row } from "react-bootstrap";

const TrajectoryProgressChart = ({value, absValue}) => {
    const percentage = 100* value / absValue 
    const r = 110;
    const circ = 2 * Math.PI * r;
    const ofs = -((100 - percentage) * circ) / 100
    return(
        <Col className="pt-0">
            <Row style={{height:"20vw", }} className='d-flex justify-content-center mt-4 pe-0 ps-0'>
                <svg width="18w" height="18vw" >
                    <defs>
                        <linearGradient id="Gradient1">
                            <stop  offset="0%" stopColor="#2EA081"/>
                            <stop  offset="100%" stopColor="#02234C"/>
                        </linearGradient>
                    </defs>
                    <circle style={{transform:"rotate(-90deg)", transformOrigin:"center"}} r={r} cx="50%" cy="50%" fill="white" strokeWidth="0" filter="drop-shadow(0px -5px 7px #2EA08180)  drop-shadow(0px 5px 7px #02234C80)"/>
                    <circle style={{transform:"rotate(190deg)", transformOrigin:"center"}} r={r + 20} cx="50%" cy="50%" fill="none" stroke="#02234C" strokeWidth="2" strokeDasharray={circ} strokeDashoffset={ofs} strokeLinecap="round"/>
                    {/* <circle r="5" fill="#03274E" cx={50%}/>           Кружок в конце обязательно сделаю, но пока не хочу ебать, как вычислить координаты его центра*/}
                    <text style={{fontWeight:"300", fontSize:"2.5vw"}} x="50%" y="50%" dominantBaseline="central" textAnchor="middle">{value}%</text>
                </svg>
            </Row>
        </Col>
    )
}

export default TrajectoryProgressChart;