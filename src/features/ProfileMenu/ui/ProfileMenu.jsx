import './ProfileMenu.css'
import { Container, OverlayTrigger, Tooltip } from 'react-bootstrap';
import PersonSvg from '../../../shared/assets/items/person.svg';
import TrophySvg from '../../../shared/assets/items/trophy.svg';
import ArrowSvg from '../../../shared/assets/items/send.svg';
import FlagSvg from '../../../shared/assets/items/flag.svg';
import RobotSvg from '../../../shared/assets/items/robot.svg';
import HelpSvg from '../../../shared/assets/items/material-symbol.svg';
import ExitSvg from '../../../shared/assets/items/exit.svg';
import { useNavigate } from 'react-router-dom';
import { PROFILE_ROUTE, TRAJECTORY_ROUTE, VACANCY_ROUTE } from 'shared/consts/paths';

const ProfileMenu = () => {
    const navigate = useNavigate()
    return (
        <Container className="profile-menu pt-4 pb-3 ps-1 pe-0" style={{position:"relative", zIndex:"3"}}>
            <OverlayTrigger
                placement="right"
                delay={{show:0, hide:0}}
                overlay={
                    <div className="menu-item-tooltip" style={{ height:"3.3vw", display:"flex", justifyContent:"start", position:"relative", zIndex:"1"}}>
                        <p 
                            className="h-100 ps-3 ms-0 pe-3 " 
                            style={{backgroundColor:"#1E5D4D", display:"flex", justifyContent:"start", alignItems:"center", color:"white", borderRadius:"0px 5px 5px 0px", backgroundImage: "linear-gradient(180deg, #006B73, #02234C)"}}
                        >
                            Личный кабинет
                        </p>
                    </div>
                }
            >
                <div className="pb-3 pt-2 mb-2 menu-item" onClick = {() => navigate(PROFILE_ROUTE)}><PersonSvg /></div>
            </OverlayTrigger>
            <OverlayTrigger
                placement="right"
                delay={{show:0, hide:0}}
                overlay={
                    <div className="menu-item-tooltip" style={{ height:"3.3vw", display:"flex", justifyContent:"start", position:"relative", zIndex:"1"}}>
                        <p 
                            className="h-100 ps-3 ms-0 pe-3 " 
                            style={{backgroundColor:"#1E5D4D", display:"flex", justifyContent:"start", alignItems:"center", color:"white", borderRadius:"0px 5px 5px 0px", backgroundImage: "linear-gradient(180deg, #006B73, #02234C)"}}
                        >
                            Траектория
                        </p>
                    </div>
                }
            >
                <div className="pb-3 pt-2 mb-2  menu-item" onClick = {() => navigate(TRAJECTORY_ROUTE)} ><TrophySvg/></div>
            </OverlayTrigger>
            <div className="pb-3 pt-2 mb-2  menu-item"><ArrowSvg /></div>
            <OverlayTrigger
                placement="right"
                delay={{show:0, hide:0}}
                overlay={
                    <div className="menu-item-tooltip" style={{ height:"3.3vw", display:"flex", justifyContent:"start", position:"relative", zIndex:"1"}}>
                        <p 
                            className="h-100 ps-3 ms-0 pe-3 " 
                            style={{backgroundColor:"#1E5D4D", display:"flex", justifyContent:"start", alignItems:"center", color:"white", borderRadius:"0px 5px 5px 0px", backgroundImage: "linear-gradient(180deg, #006B73, #02234C)"}}
                        >
                            Вакансии
                        </p>
                    </div>
                }
            >
                <div className="pb-3 pt-2 mb-2 menu-item" onClick = {() => navigate(VACANCY_ROUTE)}><FlagSvg/></div>
            </OverlayTrigger>
            <div className="pb-3 pt-2 mb-2 menu-item" ><RobotSvg/></div>
            <div className="pb-3 pt-2 mb-2  menu-item" ><HelpSvg/></div>
            <div className="pb-3 pt-2 mb-2  menu-item"><ExitSvg/></div>
        </Container>
    )
}
export default ProfileMenu;